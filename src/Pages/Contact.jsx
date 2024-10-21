import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import axios from "axios";
import "./Contact.css"; // Import the CSS file

// Modal Component for displaying messages
const MessageModal = ({ message, onClose }) => {
  return (
    <div className="modal-overlayed">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
};

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); // State for modal message
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setModalMessage("Please enter a valid email address.");
      setLoading(false);
      setShowModal(true);
      return;
    }

    try {
      const response = await axios.post("https://liveonline.pythonanywhere.com/send-email/", formData);

      if (response.status === 200) {
        setModalMessage(<>
          <span>✅ Thank You for your response.</span><br />
          <span>Your message has been sent to <strong>wharoadsolution</strong> successfully!</span><br />
          <span>You will be contacted soon through the email you provided.</span>
      </>);
        // Clear the form after successful submission
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("❗ Error sending email:", error);
      if (error.response && error.response.status === 400) {
        setModalMessage("❌ The provided email is incorrect. Please use a valid email.");
      } else {
        setModalMessage("❗Failed to send the message. Please try again.");
      }
    } finally {
      setLoading(false);
      setShowModal(true); // Show the modal after processing the request
    }
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="tel:(123) 456-7869">
                <i className="fa-solid fa-phone"></i>&nbsp; (123) 456-7869
              </a>
              <a href="mailto:wharoadsolution@gmail.com?subject=Car%20Booking%20Inquiry&body=Hello%20WHA%20Team!,">
                <i className="fa-solid fa-envelope"></i>&nbsp; wharoadsolution@gmail.com
              </a>
              {/* Embed Google Map */}
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11386.388701769723!2d115.86430722297126!3d-31.955643740395953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32966cdb47733d%3A0x304f0b535df55d0!2sPerth%20WA%2C%20Australia!5e0!3m2!1sen!2s!4v1729503971559!5m2!1sen!2s" 
                  width="300" 
                  height="250" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              <a href="https://maps.app.goo.gl/i9kd19i9aBt5gaHz8">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Perth, Australia
              </a>
            </div>
            <div className="contact-div__form">
              <form onSubmit={handleSubmit}>
                <label>
                  Full Name <b>*</b>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder='E.g: "Joe Shmoe"'
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea
                  name="message"
                  placeholder="Write Here.."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>&nbsp; Sending! Please Wait...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
      {/* Render the MessageModal if showModal is true */}
      {showModal && (
        <MessageModal message={modalMessage} onClose={closeModal} />
      )}
    </>
  );
}

export default Contact;

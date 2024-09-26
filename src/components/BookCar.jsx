import React, { useState, useEffect } from "react";

function BookCar() {
  const [modal, setModal] = useState(false);

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section); // Toggle logic
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // Form state (example fields)
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");
  const [licence, setLicence] = useState("");
  const [licenceExpiry, setLicenceExpiry] = useState("");
  const [option, setOption] = useState("");
  const [licenceFrontImage, setLicenceFrontImage] = useState(null);
  const [licenceBackImage, setLicenceBackImage] = useState(null);

  // Handle input changes
  const handleName = (e) => setName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleDob = (e) => {
    setDob(e.target.value);
    calculateAge(e.target.value);
  };
  const handleStreetAddress = (e) => setStreetAddress(e.target.value);
  const handleSuburb = (e) => setSuburb(e.target.value);
  const handleState = (e) => setState(e.target.value);
  const handlePostcode = (e) => setPostcode(e.target.value);
  const handleLicence = (e) => setLicence(e.target.value);
  const handleLicenceExpiry = (e) => setLicenceExpiry(e.target.value);
  const handleOption = (e) => setOption(e.target.value);
  const handleLicenceFrontImage = (e) => setLicenceFrontImage(e.target.files[0]);
  const handleLicenceBackImage = (e) => setLicenceBackImage(e.target.files[0]);

  // Function to auto-calculate age based on Date of Birth
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age);
  };

  // Validate form function
  const validateForm = () => {
    return (
      name.trim() !== "" &&
      lastName.trim() !== "" &&
      phone.trim() !== "" &&
      streetAddress.trim() !== "" &&
      suburb.trim() !== "" &&
      state.trim() !== "" &&
      postcode.trim() !== "" &&
      licence.trim() !== "" &&
      licenceExpiry.trim() !== "" &&
      dob.trim() !== "" &&
      option.trim() !== "" &&
      licenceFrontImage !== null &&
      licenceBackImage !== null
    );
  };

  // Confirm booking function
  const confirmBooking = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      alert("Please fill all required fields.");
      return;
    }

    // Create a FormData object to handle both text and file data
    const formData = new FormData();
    formData.append('first_name', name);
    formData.append('last_name', lastName);
    formData.append('phone', phone);
    formData.append('dob', dob);
    formData.append('age', age);
    formData.append('street_address', streetAddress);
    formData.append('suburb', suburb);
    formData.append('state', state);
    formData.append('postcode', postcode);
    formData.append('licence', licence);
    formData.append('licence_expiry', licenceExpiry);
    formData.append('option', option);
    formData.append('licence_front_image', licenceFrontImage); // Adding files
    formData.append('licence_back_image', licenceBackImage);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/reserve/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert("Reservation was successful! Check your email to confirm.");
      } else {
        alert("Reservation failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section id="booking-section" className="book-section">
      <div className="container">
        <div className="book-content">
          <div className="book-content__box">
            <h2>Book an Appointment</h2>

            {/* Accordion for entire form */}
            <div className="accordion-section">
              <div className="accordion-header" onClick={() => toggleAccordion('personalInfo')}>
                <h4>Personal Information</h4>
                <span className={`accordion-icon ${openAccordion === 'personalInfo' ? "open" : ""}`}>
                  {openAccordion === 'personalInfo' ? (
                    <i className="fas fa-chevron-up"></i> // Use Font Awesome chevron up icon
                  ) : (
                    <i className="fas fa-chevron-down"></i> // Use Font Awesome chevron down icon
                  )}
                </span>
              </div>
              {openAccordion && (
                <div className="accordion-content">
                  <form className="info-form" onSubmit={confirmBooking}>
                    <div className="info-form__2col">
                      <span>
                        <label>
                          <i className="fas fa-user"></i> {/* Icon for First Name */}
                          First Name <b>*</b>
                        </label>
                        <input value={name} onChange={handleName} type="text" placeholder="Enter your first name" required />
                      </span>
                      <span>
                        <label>
                          <i className="fas fa-user"></i> {/* Icon for Last Name */}
                          Last Name <b>*</b>
                        </label>
                        <input value={lastName} onChange={handleLastName} type="text" placeholder="Enter your last name" required />
                      </span>
                    </div>

                    <div className="info-form__2col">
                      <span>
                        <label>
                          <i className="fas fa-phone"></i> {/* Icon for Phone/Mobile */}
                          Phone/Mobile <b>*</b>
                        </label>
                        <input value={phone} onChange={handlePhone} type="tel" placeholder="Enter your phone number" required />
                      </span>
                      <span>
                        <label>
                          <i className="fas fa-calendar-alt"></i> {/* Icon for Date of Birth */}
                          Date of Birth <b>*</b>
                        </label>
                        <input value={dob} onChange={handleDob} type="date" required />
                      </span>
                    </div>

                    <div className="info-form__2col">
                      <span>
                        <label>
                          <i className="fas fa-home"></i> {/* Icon for Street Address */}
                          Street Address <b>*</b>
                        </label>
                        <input value={streetAddress} onChange={handleStreetAddress} type="text" placeholder="Enter your address" required />
                      </span>
                      <span>
                        <label>
                          <i className="fas fa-map-marker-alt"></i> {/* Icon for Suburb */}
                          Suburb <b>*</b>
                        </label>
                        <input value={suburb} onChange={handleSuburb} type="text" placeholder="Enter your suburb" required />
                      </span>
                    </div>

                    <div className="info-form__2col">
                      <span>
                        <label>
                          <i className="fas fa-flag"></i> {/* Icon for State */}
                          State <b>*</b>
                        </label>
                        <input value={state} onChange={handleState} type="text" placeholder="Enter your state" required />
                      </span>
                      <span>
                        <label>
                          <i className="fas fa-code"></i> {/* Icon for Postcode */}
                          Postcode <b>*</b>
                        </label>
                        <input value={postcode} onChange={handlePostcode} type="text" placeholder="Enter your postcode" required />
                      </span>
                    </div>

                    <div className="info-form__2col">
                      <span>
                        <label>
                          <i className="fas fa-id-card"></i> {/* Icon for Licence Number */}
                          Licence Number <b>*</b>
                        </label>
                        <input value={licence} onChange={handleLicence} type="text" placeholder="Enter your licence number" required />
                      </span>
                      <span>
                        <label>
                          <i className="fas fa-calendar-check"></i> {/* Icon for Licence Expiry Date */}
                          Licence Expiry Date <b>*</b>
                        </label>
                        <input value={licenceExpiry} onChange={handleLicenceExpiry} type="date" required />
                      </span>
                    </div>

                    <div className="info-form__2col">
                      <span>
                        <label>
                          <i className="fas fa-file-upload"></i> {/* Icon for Upload Licence Image (Front) */}
                          Upload Licence Image (Front) <b>*</b>
                        </label>
                        <input type="file" onChange={handleLicenceFrontImage} accept="image/*" required />
                      </span>
                      <span>
                        <label>
                          <i className="fas fa-file-upload"></i> {/* Icon for Upload Licence Image (Back) */}
                          Upload Licence Image (Back) <b>*</b>
                        </label>
                        <input type="file" onChange={handleLicenceBackImage} accept="image/*" required />
                      </span>
                    </div>

                    <div className="info-form__2col">
                      <span>
                        <label>
                          <i className="fas fa-car"></i> {/* Icon for Choose your option */}
                          Choose your option <b>*</b>
                        </label>
                        <select value={option} onChange={handleOption} required>
                          <option value="">-- Select an option --</option>
                          <option value="purchase">Purchase Car</option>
                          <option value="rent">Rent Car</option>
                          <option value="rent_to_own">Rent to Own Car</option>
                        </select>
                      </span>
                      <span>
                        <label>
                          <i className="fas fa-birthday-cake"></i> {/* Icon for Age */}
                          Age
                        </label>
                        <input value={age} type="text" disabled />
                      </span>
                    </div>

                    {/* Submit button */}
                    <div className="info-form__submit">
                      <button type="submit">Submit Booking</button>
                    </div>
                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>

  );
}

export default BookCar;


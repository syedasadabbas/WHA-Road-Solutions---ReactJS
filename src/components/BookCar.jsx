import React, { useState, useEffect } from "react";
import MessageModal from "./MessageModal"; // Import the modal


function BookCar() {
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); // For modal message
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  const closeModal = () => setShowModal(false); // Close the modal

  const [openAccordion, setOpenAccordion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section); // Toggle logic
  };
  const resetFormFields = () => {
    setName('');
    setLastName('');
    setPhone('');
    setEmail('')
    setStreetAddress('');
    setSuburb('');
    setState('');
    setPostcode('');
    setLicence('');
    setLicenceExpiry('');
    setDob('');
    setAge('');
    setOption('');
    setLicenceFrontImage(null);
    setLicenceBackImage(null);
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
  const [email, setEmail] = useState("");
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
  const handleEmail = (e) => setEmail(e.target.value);
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
  // const validateForm = () => {
  //   return (
  //     name.trim() !== "" &&
  //     lastName.trim() !== "" &&
  //     phone.trim() !== "" &&
  //     email.trim() !== "" &&
  //     streetAddress.trim() !== "" &&
  //     suburb.trim() !== "" &&
  //     state.trim() !== "" &&
  //     postcode.trim() !== "" &&
  //     licence.trim() !== "" &&
  //     licenceExpiry.trim() !== "" &&
  //     dob.trim() !== "" &&
  //     option.trim() !== "" &&
  //     licenceFrontImage !== null &&
  //     licenceBackImage !== null
  //   );
  // };

  const [missingFields, setMissingFields] = useState([]); // Track missing required fields

  const validateForm = () => {
    const requiredFields = {
      name,
      lastName,
      phone,
      email,
      streetAddress,
      suburb,
      state,
      postcode,
      licence,
      licenceExpiry,
      dob,
      option,
      licenceFrontImage,
      licenceBackImage,
    };

    // Directly identify empty fields and update missingFields
    const emptyFields = Object.keys(requiredFields).filter(
      (field) => !requiredFields[field] ||
        (typeof requiredFields[field] === 'string' && requiredFields[field].trim() === '')
    );

    setMissingFields(emptyFields); // Update missing fields immediately
    return emptyFields.length === 0;
  };

  // Confirm booking function
  const confirmBooking = async (e) => {
    e.preventDefault();

    // Validate form and check if there are missing fields
    const isValid = validateForm();

    // Validate form
    if (!isValid) {
      // const fieldNames = {
      //   name: "First Name",
      //   lastName: "Last Name",
      //   phone: "Phone/Mobile",
      //   email: "Email",
      //   streetAddress: "Street Address",
      //   suburb: "Suburb",
      //   state: "State",
      //   postcode: "Postcode",
      //   licence: "Licence",
      //   licenceExpiry: "Licence Expiry Date",
      //   dob: "Date of Birth",
      //   option: "Option",
      //   licenceFrontImage: "Licence Image (Front)",
      //   licenceBackImage: "Licence Image (Back)",
      // };

      // Build modal message for missing fields
      // const missingFieldNames = missingFields.map(field => fieldNames[field]).join(", ");
      setModalMessage(`❗Please fill in all required fields`);
      setShowModal(true);
      return;
    }

    // Create a FormData object to handle both text and file data
    const formData = new FormData();
    formData.append('first_name', name);
    formData.append('last_name', lastName);
    formData.append('phone', phone);
    formData.append('email', email);
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
    setIsLoading(true);


    try {
      const response = await fetch('https://liveonline.pythonanywhere.com/api/appointment/', {
        // const response = await fetch('http://127.0.0.1:8000/api/appointment/', {

        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setModalMessage("✅ Appointment Reservation was successful!\nYou will receive confirmation mail shortly.");
        resetFormFields();
      } else {
        setModalMessage("❌ Failed to reserve the appointment. Please try again.");
      }
    } catch (error) {
      setModalMessage("❗An error occurred. Please try again.");
    }
    finally {
      setIsLoading(false); // Hide loader and enable button
      setShowModal(true);
    }
  };

  return (
    <>
    <br />
    <br />
    <br />
    <br />
      <section id="booking-section" className="book-section" style={{marginTop: '35px'}}>
        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book an Appointment</h2>

              {/* Accordion for entire form */}
              <div className="accordion-section">
                <div className="accordion-header" onClick={() => toggleAccordion('personalInfo')}>
                  <h4>Booking Form for Appointment</h4>
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
                          <input value={name} onChange={handleName} type="text" placeholder="Enter your first name" required style={{ border: missingFields.includes('name') ? '2px solid red' : '' }} />
                        </span>
                        <span>
                          <label>
                            <i className="fas fa-user"></i> {/* Icon for Last Name */}
                            Last Name <b>*</b>
                          </label>
                          <input value={lastName} onChange={handleLastName} type="text" placeholder="Enter your last name" required style={{ border: missingFields.includes('lastName') ? '2px solid red' : '' }} />
                        </span>
                      </div>

                      <div className="info-form__2col">
                        <span>
                          <label>
                            <i className="fas fa-phone"></i> {/* Icon for Phone/Mobile */}
                            Phone/Mobile <b>*</b>
                          </label>
                          <input
                            value={phone}
                            onChange={handlePhone}
                            type="tel"
                            placeholder="Enter your phone number"
                            required
                            style={{ border: missingFields.includes('phone') ? '2px solid red' : '' }}
                            onKeyPress={(event) => {
                              // Allow only numbers
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          />
                        </span>
                        <span>
                          <label>
                            <i className="fas fa-calendar-alt"></i> {/* Icon for Date of Birth */}
                            Date of Birth <b>*</b>
                          </label>
                          <input value={dob} onChange={handleDob} type="date" required style={{ border: missingFields.includes('dob') ? '2px solid red' : '' }} />
                        </span>
                      </div>
                      <div className="info-form__2col">
                        <span>
                          <label>
                            <i className="fas fa-car"></i> {/* Icon for Choose your option */}
                            Choose your option <b>*</b>
                          </label>
                          <select value={option}
                            onChange={handleOption}
                            required
                            style={{ border: missingFields.includes('option') ? '2px solid red' : '' }}
                          >
                            <option value="">-- Select an option --</option>
                            <option value="purchase">Purchase Car</option>
                            <option value="rent">Rent Car</option>
                            <option value="rent_to_own">Rent to Own Car</option>
                          </select>
                        </span>
                        <span>
                          <label>
                            <i className="fas fa-envelope"> </i>
                            Email <b>*</b>
                          </label>
                          <input
                            value={email}
                            onChange={handleEmail}
                            type="email"
                            placeholder="Enter your email address"
                            style={{ border: missingFields.includes('email') ? '2px solid red' : '' }}
                          ></input>
                          <p className="error-modal">This field is required.</p>
                        </span>
                      </div>

                      <div className="info-form__2col">
                        <span>
                          <label>
                            <i className="fas fa-home"></i> {/* Icon for Street Address */}
                            Street Address <b>*</b>
                          </label>
                          <input value={streetAddress} onChange={handleStreetAddress} type="text" placeholder="Enter your address" required style={{ border: missingFields.includes('streetAddress') ? '2px solid red' : '' }} />
                        </span>
                        <span>
                          <label>
                            <i className="fas fa-map-marker-alt"></i> {/* Icon for Suburb */}
                            Suburb <b>*</b>
                          </label>
                          <input value={suburb} onChange={handleSuburb} type="text" placeholder="Enter your suburb" required style={{ border: missingFields.includes('suburb') ? '2px solid red' : '' }} />
                        </span>
                      </div>

                      <div className="info-form__2col">
                        <span>
                          <label>
                            <i className="fas fa-flag"></i> {/* Icon for State */}
                            State <b>*</b>
                          </label>
                          <select
                            value={state}
                            onChange={handleState}
                            required
                            style={{ border: missingFields.includes('option') ? '2px solid red' : '' }}
                          >
                            <option value="">-- Select your State --</option>
                            <option value="WA">WA</option>
                            <option value="SA">SA</option>
                            <option value="NT">NT</option>
                            <option value="NSW">NSW</option>
                            <option value="NSW">NSW</option>
                            <option value="VIC">VIC</option>
                            <option value="QLD">QLD</option>
                            <option value="TAS">TAS</option>
                          </select>
                        </span>
                        <span>
                          <label>
                            <i className="fas fa-paper-plane"> </i> {/* Icon for Postcode */}
                            Postcode <b>*</b>
                          </label>
                          <input value={postcode} onChange={handlePostcode} type="text" placeholder="Enter your postcode" required style={{ border: missingFields.includes('postcode') ? '2px solid red' : '' }} />
                        </span>
                      </div>

                      <div className="info-form__2col">
                        <span>
                          <label>
                            <i className="fas fa-id-card"></i> {/* Icon for Licence Number */}
                            Licence Number <b>*</b>
                          </label>
                          <input value={licence} onChange={handleLicence} type="text" placeholder="Enter your licence number" required style={{ border: missingFields.includes('licence') ? '2px solid red' : '' }} />
                        </span>
                        <span>
                          <label>
                            <i className="fas fa-calendar-check"></i> {/* Icon for Licence Expiry Date */}
                            Licence Expiry Date <b>*</b>
                          </label>
                          <input value={licenceExpiry} onChange={handleLicenceExpiry} type="date" required style={{ border: missingFields.includes('licenceExpiry') ? '2px solid red' : '' }} />
                        </span>
                      </div>

                      <div className="info-form__2col">
                        <span>
                          <label>
                            <i className="fas fa-file-upload"></i> {/* Icon for Upload Licence Image (Front) */}
                            Upload Licence Image (Front) <b>*</b>
                          </label>
                          <input type="file" onChange={handleLicenceFrontImage} accept="image/*" required style={{ border: missingFields.includes('licenceFrontImage') ? '2px solid red' : '' }} />
                        </span>
                        <span>
                          <label>
                            <i className="fas fa-file-upload"></i> {/* Icon for Upload Licence Image (Back) */}
                            Upload Licence Image (Back) <b>*</b>
                          </label>
                          <input type="file" onChange={handleLicenceBackImage} accept="image/*" required style={{ border: missingFields.includes('licenceBackImage') ? '2px solid red' : '' }} />
                        </span>
                      </div>
                      {/* <div className="info-form__2col">
                      <span>
                        <label>
                          <i className="fas fa-car"></i>
                          Choose your option <b>*</b>
                        </label>
                        <select value={option} onChange={handleOption} required style={{ border: missingFields.includes('option') ? '2px solid red' : '' }} >
                          <option value="">-- Select an option --</option>
                          <option value="purchase">Purchase Car</option>
                          <option value="rent">Rent Car</option>
                          <option value="rent_to_own">Rent to Own Car</option>
                        </select>
                      </span> */}
                      {/* <span> */}
                      {/* <label> */}
                      {/* <i className="fas fa-birthday-cake"></i> Icon for Age */}
                      {/* Age */}
                      {/* </label> */}
                      {/* <input value={age} type="text" disabled /> */}
                      {/* </span> */}
                      {/* </div> */}

                      {/* Submit button */}
                      <div className="info-form__submit">
                        <button
                          type="submit"
                          onClick={confirmBooking}
                          disabled={isLoading} // Disable the button while loading
                        >
                          {isLoading ? (
                            <span>⏳</span> // Show loading text or spinner
                          ) : (
                            'Book Appointment'
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>
      {showModal && <MessageModal message={modalMessage} onClose={closeModal} />}
    </>
  );
}

export default BookCar;


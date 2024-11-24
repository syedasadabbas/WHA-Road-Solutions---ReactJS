import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroPages from '../components/HeroPages'; // Adjust import based on your folder structure
import Footer from '../components/Footer'; // Adjust import based on your folder structure
import carLogos from '../components/loadCarLogos';
import MessageModal from "../components/MessageModal";


function CarDetails() {
    const location = useLocation();
    const car = location.state?.car;
    const [carImages, setCarImages] = useState([]); // State for storing car images
    const [loading, setLoading] = useState(true); // Loading state for images
    const [error, setError] = useState(null); // Error state if API call fails
    const [mainImage, setMainImage] = useState(''); // State for main image
    const carBrand = car?.car_make.toLowerCase();
    const carLogo = carLogos[carBrand];
    const baseUrl = 'https://liveonline.pythonanywhere.com/'
    // const baseUrl = 'http://127.0.0.1:8000/'


    // const bookBtn = () => {
    //     document
    //         .querySelector("#booking-section")
    //         .scrollIntoView({ behavior: "smooth" });
    // };

    //NEW CODE

    const [successMessageVisible, setSuccessMessageVisible] = useState(true); // For tracking success message visibility
    // Declare state hooks at the top level of the component

    const [modal, setModal] = useState(false); //  class - active-modal
    const [selectedCar, setSelectedCar] = useState(null); // State for the selected car
    const [isLoading, setIsLoading] = useState(false);
    const [modalMessage, setModalMessage] = useState(""); // For modal message
    const [showModal, setShowModal] = useState(false); // Control modal visibility

    const closeMessageModal = () => setShowModal(false); // Close the modal

    // Open modal when all inputs are fulfilled
    const openModal = (e, car) => {
        e.preventDefault();
        setSelectedCar(car);
        setModal(true);
        setSuccessMessageVisible(false); // Reset success message on modal open
    };

    const closeModal = () => {
        setModal(false);
        setSelectedCar(null);
        setSuccessMessageVisible(false);
        resetFormFields();
    };

    // Modal information state
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState(""); // Defaulting to 'N/A' for optional field
    const [age, setAge] = useState("");
    const [dob, setDob] = useState(""); // New field for Date of Birth
    const [streetAddress, setStreetAddress] = useState("");
    const [suburb, setSuburb] = useState("");
    const [state, setState] = useState("");
    const [postcode, setPostcode] = useState("");
    const [licence, setLicence] = useState("");
    const [licenceExpiry, setLicenceExpiry] = useState("");
    const [option, setOption] = useState("");
    const [licenceFrontImage, setLicenceFrontImage] = useState(null);
    const [licenceBackImage, setLicenceBackImage] = useState(null);

    // Handling input changes
    const handleName = (e) => setName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value); // If empty, default to "N/A"
    const handleDob = (e) => {
        setDob(e.target.value);
        calculateAge(e.target.value); // Calculate age based on DOB
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
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        // Adjust if the birth date hasn't occurred this year yet
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            setAge(age - 1);
        } else {
            setAge(age);
        }
    };

    const [missingFields, setMissingFields] = useState([]); // Track missing required fields

    // Validate form function with missing fields tracking
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

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Check if this cookie string begins with the name we want
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const resetFormFields = () => {
        setName('');
        setLastName('');
        setPhone('');
        setEmail('');
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


    // Confirm booking function
    const confirmBooking = async (e) => {
        e.preventDefault();

        // Validate form
        // Validate form
        if (!validateForm()) {
            const fieldNames = {
                name: "First Name",
                lastName: "Last Name",
                phone: "Phone/Mobile",
                email: "Email",
                streetAddress: "Street Address",
                suburb: "Suburb",
                state: "State",
                postcode: "Postcode",
                licence: "Licence",
                licenceExpiry: "Licence Expiry Date",
                dob: "Date of Birth",
                option: "Option",
                licenceFrontImage: "Licence Image (Front)",
                licenceBackImage: "Licence Image (Back)",
            };

            // Build modal message for missing fields
            const missingFieldNames = missingFields.map(field => fieldNames[field]).join(", ");
            setModalMessage(`Please fill in all required fields: ${missingFieldNames}`);
            setShowModal(true);
            return;
        }



        const csrfToken = getCookie('csrftoken'); // Function to get CSRF token

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

        // Ensure selectedCar exists before adding car details
        if (selectedCar) {
            formData.append('car_type', selectedCar.car_type);
            formData.append('car_price', selectedCar.car_price);
            formData.append('car_make', selectedCar.car_make);
            formData.append('car_color', selectedCar.car_colour);
            formData.append('car_registration', selectedCar.car_registration); // Fixed spelling
            formData.append('car_vin', selectedCar.vin);

            // If `car_picture` is a URL and not a file, ensure it's handled correctly.
            if (selectedCar.car_picture instanceof File) {
                formData.append('car_picture', selectedCar.car_picture);
            } else {
                formData.append('car_picture_url', selectedCar.car_picture); // If it’s a URL, append as string
            }
        }
        console.log("Selected Car: ", selectedCar)
        setIsLoading(true);

        try {
            const response = await fetch('https://liveonline.pythonanywhere.com/api/reserve/', {
                // const response = await fetch('http://127.0.0.1:8000/api/reserve/', {

                method: 'POST',
                headers: {
                    'X-CSRFToken': csrfToken,
                    // 'Content-Type': 'application/json',
                },
                body: formData,
            });

            if (response.ok) {
                const responseData = await response.json();
                if (responseData.status === "success") {
                    setModal(false);
                    setSuccessMessageVisible(true);
                    setModalMessage("✅ Car Reservation was successful!\nYou will receive confirmation mail shortly.");
                    resetFormFields();
                } else {
                    setModalMessage("❌ Failed to reserve the car. Please try again." + (responseData.message || 'Unexpected error occurred.'));
                }
            } else {
                const errorData = await response.json();
                setModalMessage("❌ Failed to reserve the car. Please try again." + (errorData.message || 'Unexpected error occurred.'));
            }
        } catch (error) {
            // console.error("Error submitting reservation:", error);
            setModalMessage("❗An error occurred. Please try again.");
        }
        finally {
            setIsLoading(false); // Hide loader and enable button
            setShowModal(true);
        }

    };

    // Hide message
    const hideMessage = () => {
        setSuccessMessageVisible(false); // Hide message using state
    };

    // NEW CODE ENDS

    // Fetch car images based on car details (car_make, car_model, car_registration)
    useEffect(() => {
        if (car) {
            const carName = `${car.car_make} ${car.car_model} (${car.car_registration})`;
            setMainImage(car.car_picture); // Set initial main image

            // Function to fetch car images from the API
            const fetchCarImages = async () => {
                try {
                    const response = await fetch(`https://liveonline.pythonanywhere.com/api/car-images/${encodeURIComponent(carName)}/`);
                    // const response = await fetch(`http://127.0.0.1:8000/api/car-images/${encodeURIComponent(carName)}/`);

                    if (!response.ok) {
                        throw new Error('Failed to fetch car images');
                    }
                    const data = await response.json();
                    setCarImages(data.images); // Set car images from API response
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false); // Mark loading as complete
                }
            };

            fetchCarImages();
        }
    }, [car]);

    if (!car) {
        return <h2>No car details available. Please go back and try again.</h2>;
    }

    if (loading) {
        return (
            <div className="loader-component">
                <div className="spinner"></div>
            </div>
        );
    }

    if (error) {
        return <div><h2>Error Loading Cars: {error}</h2></div>;
    }

    // Function to handle thumbnail click and set the main image
    const handleThumbnailClick = (imageUrl) => {
        setMainImage(imageUrl);
    };

    return (
        <>
            <section className="car-details-section">
                <HeroPages name="Car Details" />
                {/* Success message */}
                {successMessageVisible && (
                    <p className="booking-done" style={{ padding: 50 }}>
                        Check your email to confirm an order.{" "}
                        <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
                    </p>
                )}

                <div onClick={closeModal} className={`modal-overlay ${modal ? "active-modal" : ""}`}></div>

                <div className="container">
                    <div style={{ justifyContent: 'center', display: 'flex' }}>
                        <div className='hero-content__text' style={{ justifyContent: 'center' }}>
                            <h1>
                                <span>{car.car_make} {car.car_model}</span>
                            </h1>
                            <div style={{ justifyContent: 'center', display: 'flex' }}>
                                {carLogo && <img src={carLogo} alt={`${car.car_make} logo`}
                                    style={{ width: 'auto', height: '60px' }} />}
                            </div>
                        </div>
                    </div>

                    <div className="book-content__box">
                        <div className="box-cars">
                            <div className="container">
                                <section id="default" className="padding-top0">
                                    <div className="row">
                                        <div className="large-5 column">
                                            <div className="xzoom-container">
                                                <img className="xzoom" id="xzoom-fancy" src={mainImage} alt="Car Main" />
                                                {carImages.length > 0 ? (
                                                    <div className="xzoom-thumbs">
                                                        <img className="xzoom-gallery" onClick={() => handleThumbnailClick(car.car_picture)} width="80" src={car.car_picture} />
                                                        {carImages.map((image, index) => (
                                                            <a key={index} onClick={() => handleThumbnailClick(baseUrl + image.url)}>
                                                                <img className="xzoom-gallery" width="80" src={baseUrl + image.url} title={`Image ${index + 1}`} />
                                                            </a>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <h2></h2>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    {car.car_description && (
                                        <div className="book-content__box" style={{ marginTop: '30px', marginBottom: '30px' }}>
                                            <h2 style={{ color: '#ff4d30' }}>More Description & Details</h2>
                                            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{car.car_description}</span>
                                        </div>
                                    )}

                                </section>

                            </div>

                            {/* Description */}
                            <div className="pick-description">
                                <div className="pick-description__price">
                                    Price <span>${car.car_price >= 1 ? car.car_price : 'TBC'}</span>
                                </div>
                                <div className="pick-description__table">
                                    <div className="pick-description__table__col">
                                        <span>Model</span>
                                        <span>{car.car_model}</span>
                                    </div>

                                    <div className="pick-description__table__col">
                                        <span>Make</span>
                                        <span>{car.car_make}</span>
                                    </div>

                                    <div className="pick-description__table__col">
                                        <span>Year</span>
                                        <span>{car.built_date.split("-")[0]}</span> {/* Extract year from date */}
                                    </div>

                                    <div className="pick-description__table__col">
                                        <span>Doors</span>
                                        <span>{car.doors}</span>
                                    </div>

                                    <div className="pick-description__table__col">
                                        <span>Transmission</span>
                                        <span>{car.transmission}</span>
                                    </div>

                                    <div className="pick-description__table__col">
                                        <span>Fuel Type</span>
                                        <span>{car.fuel_type}</span>
                                    </div>

                                    <div className="pick-description__table__col">
                                        <span>Cylinders</span>
                                        <span>{car.cylinders}</span>
                                    </div>

                                    <div className="pick-description__table__col">
                                        <span>Capacity</span>
                                        <span>{car.capacity}</span>
                                    </div>

                                    <div className="pick-description__table__col">
                                        <span>Odometer</span>
                                        <span>{car.odometer}</span>
                                    </div>

                                    <div className="pick-description__table__col">
                                        <span>Car Colour</span>
                                        <span>{car.car_colour}</span>
                                    </div>

                                    <div className="pick-description__table__col">
                                        <span>Registration</span>
                                        <span>{car.car_registration}</span>
                                    </div>

                                    {/* <div className="pick-description__table__col">
                                        <span>VIN</span>
                                        <span>{car.vin}</span>
                                    </div> */}
                                </div>
                                <div className="pick-description__table__col" >
                                    <span style={{ fontSize: '1.4rem', fontWeight: '700' }}>VIN</span>
                                    <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>{car.vin}</span>
                                </div>
                                <br /><br />
                                <div className="models-div__box__descr__name-price__btn"
                                    onClick={(e) => openModal(e, car)}
                                    role="button"
                                    tabIndex={0}
                                    style={{ color: 'white', fontWeight: 700, textAlign: 'center' }}>
                                    Book Now
                                </div>

                                {/* Call to Action button */}
                                {/* <Link
                                    onClick={bookBtn}
                                    className="cta-btn"
                                    to="/models"
                                >
                                    Book Car &nbsp; <i className="fa-solid fa-circle-check"></i>
                                </Link> */}

                                {/* <a className="cta-btn" href="#booking-section">
                                    Reserve Now
                                </a> */}
                            </div>
                        </div>
                    </div>
                    {/* Modal section */}
                    <div className={`booking-modal ${modal ? "active-modal" : ""}`} style={{ marginTop: '45px' }}>
                        {/* title */}
                        <div className="booking-modal__title">
                            <h2>Complete Reservation</h2>
                            <div className="X-mark" onClick={closeModal}>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                        {/* message */}
                        <div className="booking-modal__message">
                            <h4>
                                <i className="fa-solid fa-circle-info"></i> Upon completing this
                                reservation enquiry, you will receive a confirmation message to provided email
                            </h4>
                            <p>
                                Our customer representative will contact you further after you receive the confirmation email.
                            </p>
                        </div>
                        {/* car info */}
                        <div className="booking-modal__car-info">
                            <div className="booking-modal__car-info__model">
                                {selectedCar && (
                                    <>
                                        <h5>
                                            <span>Car -</span> {selectedCar.car_type}
                                        </h5>
                                        <h5>
                                            <span>Car Price -</span> ${selectedCar.car_price > 1 ? selectedCar.car_price : 'TBC'}
                                        </h5>
                                        <p style={{ color: 'gray' }}><b><i>* This price is applicable if you buy outright</i></b></p>
                                        {<img src={selectedCar.car_picture} alt="car_img" />}
                                    </>
                                )}
                            </div>
                        </div>

                        {/* personal info */}
                        <div className="booking-modal__person-info">
                            <h4>Personal Information</h4>
                            <form className="info-form" onSubmit={confirmBooking}>
                                <div className="info-form__2col">
                                    <span>
                                        <label>
                                            <i className="fas fa-user"></i>
                                            First Name <b>*</b>
                                        </label>
                                        <input
                                            value={name}
                                            onChange={handleName}
                                            type="text"
                                            placeholder="Enter your first name"
                                            required
                                            style={{ border: missingFields.includes('name') ? '2px solid red' : '' }}
                                        ></input>
                                        <p className="error-modal">This field is required.</p>
                                    </span>

                                    <span>
                                        <label>
                                            <i className="fas fa-user"></i> {/* Icon for Last Name */}
                                            Last Name <b>*</b>
                                        </label>
                                        <input
                                            value={lastName}
                                            onChange={handleLastName}
                                            type="text"
                                            placeholder="Enter your last name"
                                            required
                                            style={{ border: missingFields.includes('lastName') ? '2px solid red' : '' }}
                                        ></input>
                                        <p className="error-modal">This field is required.</p>
                                    </span>
                                </div>

                                {/* Address Fields */}
                                <div className="info-form__2col">
                                    <span>
                                        <label><i className="fas fa-home"></i> {/* Icon for Street Address */}
                                            Street Address <b>*</b></label>
                                        <input value={streetAddress} onChange={handleStreetAddress} type="text" placeholder="Street address" required style={{ border: missingFields.includes('streetAddress') ? '2px solid red' : '' }} />
                                        <p className="error-modal">This field is required.</p>
                                    </span>
                                    <span>
                                        <label><i className="fas fa-map-marker-alt"></i> {/* Icon for Suburb */}
                                            Suburb <b>*</b></label>
                                        <input value={suburb} onChange={handleSuburb} type="text" placeholder="Suburb" required style={{ border: missingFields.includes('suburb') ? '2px solid red' : '' }} />
                                        <p className="error-modal">This field is required.</p>
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
                                        <p className="error-modal">This field is required.</p>
                                    </span>
                                    <span>
                                        <label><i className="fas fa-paper-plane"> </i> {/* Icon for Postcode */}
                                            Postcode <b>*</b></label>
                                        <input value={postcode} onChange={handlePostcode} type="text" placeholder="Postcode" required style={{ border: missingFields.includes('postcode') ? '2px solid red' : '' }} />
                                        <p className="error-modal">This field is required.</p>
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

                                    {/* Choose Your Option */}
                                    <div className="info-form">
                                        <span>
                                            <label><i className="fas fa-car"></i> {/* Icon for Choose your option */}
                                                Choose your option <b>*</b></label>
                                            <select value={option} onChange={handleOption} required style={{ border: missingFields.includes('option') ? '2px solid red' : '' }} >
                                                <option value="" disabled>Select an option</option>
                                                <option value="purchase">Purchase Car</option>
                                                <option value="rent">Rent Car</option>
                                                <option value="rent_to_own">Rent to Own Car</option>
                                            </select>
                                            <p className="error-modal">This field is required.</p>
                                        </span>
                                    </div>
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
                                    <span>
                                        <label>
                                            <i className="fas fa-calendar-alt"></i> {/* Icon for Date of Birth */}
                                            Date of Birth <b>*</b>
                                        </label>
                                        <input
                                            value={dob}
                                            onChange={handleDob}
                                            type="date"
                                            required
                                            style={{ border: missingFields.includes('dob') ? '2px solid red' : '' }}
                                        ></input>
                                        <p className="error-modal">This field is required.</p>
                                    </span>
                                </div>

                                <div className="info-form__2col">
                                    <span>
                                        <label>
                                            <i className="fas fa-id-card"></i> {/* Icon for Licence Number */}
                                            Licence Number <b>*</b>
                                        </label>
                                        <input
                                            value={licence}
                                            onChange={handleLicence}
                                            type="text"
                                            placeholder="Enter your licence number"
                                            required
                                            style={{ border: missingFields.includes('licence') ? '2px solid red' : '' }}
                                        ></input>
                                        <p className="error-modal">This field is required.</p>
                                    </span>

                                    <span>
                                        <label>
                                            <i className="fas fa-calendar-check"></i> {/* Icon for Licence Expiry Date */}
                                            Licence Expiry Date <b>*</b>
                                        </label>
                                        <input
                                            value={licenceExpiry}
                                            onChange={handleLicenceExpiry}
                                            type="date"
                                            required
                                            style={{ border: missingFields.includes('licenceExpiry') ? '2px solid red' : '' }}
                                        ></input>
                                        <p className="error-modal">This field is required.</p>
                                    </span>
                                </div>

                                {/* <div className="info-form__2col">
                  <span>
                    <label>
                      <i className="fas fa-calendar-alt"></i>
                      Date of Birth <b>*</b>
                    </label>
                    <input
                      value={dob}
                      onChange={handleDob}
                      type="date"
                      required
                      style={{ border: missingFields.includes('dob') ? '2px solid red' : '' }}
                    ></input>
                    <p className="error-modal">This field is required.</p>
                  </span> */}

                                {/* <span> */}
                                {/* <label> */}
                                {/* Age <b>*</b> */}
                                {/* </label> */}
                                {/* <input */}
                                {/* // value={age} */}
                                {/* // type="number" */}
                                {/* // readOnly */}
                                {/* // required */}
                                {/* // ></input> */}
                                {/* <p className="error-modal">Auto-calculated from DOB.</p> */}
                                {/* </span> */}
                                {/* </div> */}


                                <div className="info-form__2col">
                                    <span>
                                        <label>
                                            <i className="fas fa-file-upload"></i> {/* Icon for Upload Licence Image (Front) */}
                                            Upload Licence Image (Front) <b>*</b>
                                        </label>
                                        <input
                                            type="file"
                                            onChange={handleLicenceFrontImage}
                                            accept="image/*"
                                            required
                                            style={{ border: missingFields.includes('licenceFrontImage') ? '2px solid red' : '' }}
                                        />
                                        <p className="error-modal">This field is required.</p>
                                    </span>

                                    <span>
                                        <label>
                                            <i className="fas fa-file-upload"></i> {/* Icon for Upload Licence Image (Back) */}
                                            Upload Licence Image (Back) <b>*</b>
                                        </label>
                                        <input
                                            type="file"
                                            onChange={handleLicenceBackImage}
                                            accept="image/*"
                                            required
                                            style={{ border: missingFields.includes('licenceFrontImage') ? '2px solid red' : '' }}
                                        />
                                        <p className="error-modal">This field is required.</p>
                                    </span>
                                </div>

                                <div className="reserve-button">
                                    <br />
                                    <button
                                        type="submit"
                                        style={{ marginRight: '10px' }}
                                        onClick={confirmBooking}
                                        disabled={isLoading} // Disable the button while loading
                                    >
                                        {isLoading ? (
                                            <span>⏳</span> // Show loading text or spinner
                                        ) : (
                                            'Reserve Now'
                                        )}
                                    </button>
                                    <button type="button" onClick={closeModal}>Close</button>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </section>
            {showModal && <MessageModal message={modalMessage} onClose={closeMessageModal} />}

            <Footer />
        </>
    );
}

export default CarDetails;

import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import Footer from "../components/Footer";
import MessageModal from "../components/MessageModal";
import HeroPages from "../components/HeroPages";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Models.css";  // Import the CSS file


// Main component to render car models
function Models() {
  const [modal, setModal] = useState(false); //  class - active-modal
  const [cars, setCars] = useState([]);  // State to hold the cars data
  const [originalCars, setOriginalCars] = useState([]);  // State to hold the original cars data
  const [uniqueBrands, setUniqueBrands] = useState([]);
  const [uniqueCarTypes, setUniqueCarTypes] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null); // State for the selected car
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); // For modal message
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  const closeMessageModal = () => setShowModal(false); // Close the modal

  const [filters, setFilters] = useState({
    car_make: "",
    car_type: "",
    price_min: "",
    price_max: ""
  });
  const [sortOrder, setSortOrder] = useState("");
  const [successMessageVisible, setSuccessMessageVisible] = useState(true); // For tracking success message visibility

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // You can adjust the number of items per page

  // Fetch all cars without filters
  const fetchAllCars = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://liveonline.pythonanywhere.com/api/cars/");
      // const response = await axios.get("http://127.0.0.1:8000/api/cars/");

      const carsData = response.data;
      setOriginalCars(response.data); // Store the original cars data
      setCars(response.data.sort((a, b) => b.id - a.id)); // Sort cars by id in descending order
      const brands = [...new Set(carsData.map(car => car.car_make))].sort();
      const carTypes = [...new Set(carsData.map(car => car.car_type))].sort();
      setUniqueBrands(brands);
      setUniqueCarTypes(carTypes);
    } catch (error) {
      console.error("Error fetching all car data. The error is: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch cars based on filters
  const fetchCars = useCallback(async () => {
    try {
      let query = `?car_make=${filters.car_make}&car_type=${filters.car_type}`;

      // Translate the selected price range into price_min and price_max
      if (filters.price_range) {
        const [price_min, price_max] = filters.price_range.split('-');
        query += `&price_min=${price_min}&price_max=${price_max}`;
      }

      const response = await axios.get(`https://liveonline.pythonanywhere.com/api/cars/${query}`);
      // const response = await axios.get(`http://127.0.0.1:8000/api/cars/${query}`);

      setOriginalCars(response.data); // Store the original cars data after filtering
      setCars(response.data.sort((a, b) => b.id - a.id)); // Sort filtered cars by id in descending order
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  }, [filters]);

  // Fetch all cars on component mount
  useEffect(() => {
    fetchAllCars();
  }, []);

  // Handle filter input changes
  const handleInputChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRemoveFilters = () => {
    setFilters({
      car_make: "",
      car_type: "",
      price_min: "",
      price_max: "",
      price_range: ""  // Reset price_range if used
    });
    fetchAllCars();  // Fetch all cars without filters
  };

  // Sorting function
  const sortCars = () => {
    let sortedCars = [...cars]; // Use current cars for sorting
    if (sortOrder === "alphabetical") {
      sortedCars.sort((a, b) => a.car_make.localeCompare(b.car_make)); // Sort by car brand name
    } else if (sortOrder === "price") {
      sortedCars.sort((a, b) => a.car_price - b.car_price); // Sort by price
    }
    setCars(sortedCars); // Update cars to trigger re-render
  };

  // Handle sort button click
  const handleSort = () => {
    sortCars(); // Call the sorting function
  };

  // Handle remove sorting
  const handleRemoveSorting = () => {
    setCars(originalCars.sort((a, b) => b.id - a.id)); // Reset cars to original data sorted by id
    setSortOrder(""); // Reset sort order
  };

  // Handle radio button change for sorting
  const handleRadioChange = (e) => {
    setSortOrder(e.target.value);
  };

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

  // Validate form function
  const validateForm = () => {
    return (
      name.trim() !== "" &&
      lastName.trim() !== "" &&
      phone.trim() !== "" &&
      email.trim() !== "" &&
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
    if (!validateForm()) {
      setModalMessage("Please fill all required fields.");
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



  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFile = (e) => {
  //   setSelectedFile(e.target.files[0]);
  // };
  // Hide message
  const hideMessage = () => {
    setSuccessMessageVisible(false); // Hide message using state
  };

  const navigate = useNavigate(); // Use the navigate function to change pages

  // Handle "View Details" button click
  const handleViewDetails = (e, car) => {
    e.preventDefault();
    console.log(car);  // Check if car object is defined and contains the correct data
    // navigate('/cardetails', { state: { car } });
    navigate('/cardetails', { state: { car: { ...car, car_images: car.car_images } } });
    console.log(car);
  };

  // Pagination logic
  const indexOfLastCar = currentPage * itemsPerPage;
  const indexOfFirstCar = indexOfLastCar - itemsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(cars.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <>
    {/* {isLoading ? (
            <Loader />  // Show loader while loading
          ) : ( */}
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        {/* Success message */}
        {successMessageVisible && (
          <p className="booking-done" style={{ padding: 50 }}>
            Check your email to confirm an order.{" "}
            <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
          </p>
        )}

        <div onClick={closeModal} className={`modal-overlay ${modal ? "active-modal" : ""}`}></div>
        <div className="container">

          {/* Filter section */}
          <div className="filter-bar" style={{ marginTop: 20 }}>
            <div>
              <label><h2>Car Brand</h2></label>
              <select
                className="select-input"
                name="car_make"
                value={filters.car_make}
                onChange={handleInputChange}
                >
                <option value="">All</option>
                {uniqueBrands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
            <div>
              <label><h2>Car Type</h2></label>
              <select
                className="select-input"
                name="car_type"
                value={filters.car_type}
                onChange={handleInputChange}
                >
                <option value="">All</option>
                {uniqueCarTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label><h2>Price Range</h2></label>
              <select
                className="select-input"
                name="price_range"
                value={filters.price_range}
                onChange={handleInputChange}
                >
                <option value="">All</option>
                <option value="10000-25000">$10,000 - $25,000</option>
                <option value="25000-40000">$25,000 - $40,000</option>
                <option value="40000-60000">$40,000 - $60,000</option>
                <option value="60000-75000">$60,000 - $75,000</option>
                <option value="75000-100000">$75,000 - $100,000</option>
                <option value="100000-200000">$100,000 - $200,000</option>
              </select>
            </div>
            <button className="custom-button" style={{ marginTop: 25 }} onClick={fetchCars}>Search</button>
            <button className="remove-filter-button" style={{ marginTop: 25 }} onClick={handleRemoveFilters}>Remove Filters</button>
          </div>

          {/* Sorting section */}
          <div className="sorting-bar">
            <label className="sorting-radio" style={{ marginTop: 10 }}>
              <input
                type="radio"
                value="alphabetical"
                checked={sortOrder === "alphabetical"}
                onChange={handleRadioChange}
                />
              <h2>Sort Alphabetically</h2>
            </label>
            <label className="sorting-radio" style={{ marginTop: 10 }}>
              <input
                type="radio"
                value="price"
                checked={sortOrder === "price"}
                onChange={handleRadioChange}
                />
              <h2>Sort by Price</h2>
            </label>
            <button className="custom-button-sort" onClick={handleSort}>Sort</button>
            <button className="custom-remove-button-sort" onClick={handleRemoveSorting}>Reset Sort</button>
          </div>

          {/* Car models listing */}
          {isLoading ? (
        <div className="loader-component">
          <div className="spinner"></div>
        </div>
      ) : (
          <div className="models-div">
            {currentCars.map((car) => (
              <div className="models-div__box" key={car.id}>
                <div className="models-div__box__img">
                  <img src={car.car_picture || "/images/default-car.png"} alt={car.car_model} />
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p>{car.car_make} <br /> {car.car_model}</p>
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4>${car.car_price}</h4>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <span>
                        <i className="fa-solid fa-car-side"></i> &nbsp; {car.car_type}
                      </span>
                      <span style={{ textAlign: "right" }}>
                        {car.doors} Doors &nbsp; <i className="fa-solid fa-door"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-car-side"></i> &nbsp; {car.transmission}
                      </span>
                      <span style={{ textAlign: "right" }}>
                        {car.fuel_type} &nbsp; <i className="fa-solid fa-gas-pump"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__more__btn"
                      onClick={(e) => handleViewDetails(e, car)}
                      role="button"
                      tabIndex={0}>
                      View Details
                    </div>
                    <div className="models-div__box__descr__name-price__btn"
                      onClick={(e) => openModal(e, car)}
                      role="button"
                      tabIndex={0}
                      style={{ color: 'white', fontWeight: 700 }}>
                      Book Now
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      )}

          {/* Pagination Controls */}
          <div className="pagination" style={{justifyContent: 'center'}}>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
                >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Modal section */}
          <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
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
                reservation enquiry, you will receive:
              </h4>
              <p>
                Your rental voucher to produce on arrival at the rental desk and a
                toll-free customer support number.
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
                      <span>Car Price -</span> ${selectedCar.car_price}
                    </h5>
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
                      First Name <b>*</b>
                    </label>
                    <input
                      value={name}
                      onChange={handleName}
                      type="text"
                      placeholder="Enter your first name"
                      required
                    ></input>
                    <p className="error-modal">This field is required.</p>
                  </span>

                  <span>
                    <label>
                      Last Name <b>*</b>
                    </label>
                    <input
                      value={lastName}
                      onChange={handleLastName}
                      type="text"
                      placeholder="Enter your last name"
                      required
                    ></input>
                    <p className="error-modal">This field is required.</p>
                  </span>
                </div>

                {/* Address Fields */}
                <div className="info-form__2col">
                  <span>
                    <label>Street Address <b>*</b></label>
                    <input value={streetAddress} onChange={handleStreetAddress} type="text" placeholder="Street address" required />
                    <p className="error-modal">This field is required.</p>
                  </span>
                  <span>
                    <label>Suburb <b>*</b></label>
                    <input value={suburb} onChange={handleSuburb} type="text" placeholder="Suburb" required />
                    <p className="error-modal">This field is required.</p>
                  </span>
                </div>

                <div className="info-form__2col">
                  <span>
                    <label>State <b>*</b></label>
                    <input value={state} onChange={handleState} type="text" placeholder="State" required />
                    <p className="error-modal">This field is required.</p>
                  </span>
                  <span>
                    <label>Postcode <b>*</b></label>
                    <input value={postcode} onChange={handlePostcode} type="text" placeholder="Postcode" required />
                    <p className="error-modal">This field is required.</p>
                  </span>
                </div>

                <div className="info-form__2col">
                  <span>
                    <label>
                      Phone/Mobile <b>*</b>
                    </label>
                    <input
                      value={phone}
                      onChange={handlePhone}
                      type="tel"
                      placeholder="Enter your phone number"
                      required
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
                      <label>Choose Your Option <b>*</b></label>
                      <select value={option} onChange={handleOption} required>
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
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={handleEmail}
                      type="email"
                      placeholder="Enter your email address"
                    ></input>
                    <p className="error-modal">Optional field. If left empty, N/A will be sent.</p>
                  </span>
                </div>

                <div className="info-form__2col">
                  <span>
                    <label>
                      Licence Number <b>*</b>
                    </label>
                    <input
                      value={licence}
                      onChange={handleLicence}
                      type="text"
                      placeholder="Enter your licence number"
                      required
                    ></input>
                    <p className="error-modal">This field is required.</p>
                  </span>

                  <span>
                    <label>
                      Licence Expiry Date <b>*</b>
                    </label>
                    <input
                      value={licenceExpiry}
                      onChange={handleLicenceExpiry}
                      type="date"
                      required
                    ></input>
                    <p className="error-modal">This field is required.</p>
                  </span>
                </div>

                <div className="info-form__2col">
                  <span>
                    <label>
                      Date of Birth <b>*</b>
                    </label>
                    <input
                      value={dob}
                      onChange={handleDob}
                      type="date"
                      required
                    ></input>
                    <p className="error-modal">This field is required.</p>
                  </span>

                  <span>
                    <label>
                      Age <b>*</b>
                    </label>
                    <input
                      value={age}
                      type="number"
                      readOnly
                      required
                    ></input>
                    <p className="error-modal">Auto-calculated from DOB.</p>
                  </span>
                </div>


                <div className="info-form__2col">
                  <span>
                    <label>
                      Upload Licence Image (Front) <b>*</b>
                    </label>
                    <input
                      type="file"
                      onChange={handleLicenceFrontImage}
                      accept="image/*"
                      required
                    />
                    <p className="error-modal">This field is required.</p>
                  </span>

                  <span>
                    <label>
                      Upload Licence Image (Back) <b>*</b>
                    </label>
                    <input
                      type="file"
                      onChange={handleLicenceBackImage}
                      accept="image/*"
                      required
                    />
                    <p className="error-modal">This field is required.</p>
                  </span>
                </div>

                <div className="reserve-button">
                  <button
                    type="submit"
                    style={{marginRight: '10px'}}
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
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
      
    {/* )} */}
      {showModal && <MessageModal message={modalMessage} onClose={closeMessageModal} />}
      <Footer />
    </>
  );
}

export default Models;

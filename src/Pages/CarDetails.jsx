import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import HeroPages from '../components/HeroPages'; // Adjust import based on your folder structure
import Footer from '../components/Footer'; // Adjust import based on your folder structure
import carLogos from '../components/loadCarLogos';

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


    const bookBtn = () => {
        document
            .querySelector("#booking-section")
            .scrollIntoView({ behavior: "smooth" });
    };

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
        return <div>No car details available. Please go back and try again.</div>;
    }

    if (loading) {
        return <div>Loading car images...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Function to handle thumbnail click and set the main image
    const handleThumbnailClick = (imageUrl) => {
        setMainImage(imageUrl);
    };

    return (
        <>
            <section className="car-details-section">
                <HeroPages name="Car Details" />

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
                                                    <h2>No images available for this car.</h2>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Description */}
                            <div className="pick-description">
                                <div className="pick-description__price">
                                    Value <span>${car.car_price}</span>
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

                                    <div className="pick-description__table__col">
                                        <span>VIN</span>
                                        <span>{car.vin}</span>
                                    </div>
                                </div>

                                {/* Call to Action button */}
                                <Link
                                    onClick={bookBtn}
                                    className="cta-btn"
                                    to="/models"
                                >
                                    Book Car &nbsp; <i className="fa-solid fa-circle-check"></i>
                                </Link>

                                {/* <a className="cta-btn" href="#booking-section">
                                    Reserve Now
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default CarDetails;

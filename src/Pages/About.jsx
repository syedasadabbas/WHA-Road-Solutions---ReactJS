import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                WHA Road Solution provides tailored road solutions throughout Australia to meet diverse customer needs. Whether you're looking to buy a vehicle for exploring our stunning landscapes, rent a car for a weekend getaway, or rideshare drivers seeking affordable rental options, we’ve got you covered. Our diverse fleet includes compact cars for city driving and spacious SUVs for family adventures, ensuring you find the perfect vehicle for any occasion. Let us help you hit the road with confidence!
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons">
                  <div className="about-main__text__icons__box">
                    <i className="fas fa-car icon-style" aria-hidden="true"></i>
                    <span>
                      <h4>25+</h4>
                      <p>Car Brands</p>
                    </span>
                  </div>
                  <div className="about-main__text__icons__box">
                    <i className="fas fa-users icon-style" aria-hidden="true"></i>
                    <span>
                      <h4>150+</h4>
                      <p>Existing Customers</p>
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="about-main__text" style={{ justifyItems: "center", textAlign: "center" }}>
            <h2 style={{ justifyItems: "center" }}>Our Mission</h2>

            <div className="mission-card">
              <div className="mission-card__header">
                <h3>Your Journey with <span style={{ color: '#fa4226' }}>WHA</span></h3>
              </div>
              <div className="mission-card__content">
                <p>
                  Our mission at WHA Road Solution is to provide exceptional value and convenience throughout your journey. We recognize that selecting the right vehicle is about more than just a transaction; it’s about crafting memorable experiences on the road. That’s why we emphasize outstanding customer service, offering personalized assistance to help you navigate your options and make informed choices.
                </p>
                <p>
                  We take pride in our transparent pricing with no hidden fees, allowing you to plan your budget with confidence. Our flexible booking options make reserving your vehicle online a breeze, and our dedicated team is always available to support you from the moment you choose your vehicle to the day you embark on your next adventure.
                </p>
                <p>
                  With WHA Road Solution, you can hit the road with confidence and peace of mind. We strive to make every journey enjoyable and tailored to your unique needs. Experience the freedom of the open road with us and discover the difference that comes from choosing a service that genuinely cares about your driving experience in Australia.
                </p>
              </div>
            </div>
          </div>

          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <span>
              {/* <i className="fa-solid fa-phone"></i> */}
              <h3><a href="/models" style={{ color: '#ff4d30', textDecoration: 'none' }}>Book a Car</a></h3>
            </span>
            <h2>by getting in touch with us</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

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
                At WHA Road Solution, an Australian-based company, we're dedicated to providing the ultimate road solutions tailored to meet the diverse needs of our customers across Australia.
                Whether you're looking to purchase a new vehicle to explore the stunning landscapes of our great nation, rent a car for a weekend getaway with friends, or opt for our flexible rent-to-own program,
                we have a comprehensive selection of vehicles that perfectly match your requirements. Our diverse fleet includes everything from compact cars for city driving to spacious SUVs for family adventures, ensuring that you find the ideal vehicle for any occasion.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>25+</h4>
                    <p>Car Brands</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>5</h4>
                    <p>Service Centers</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>14</h4>
                    <p>Repair Shops</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-main__text" style={{ justifyItems: "center", textAlign: "center" }}>
            <h2 style={{ justifyItems: "center" }}>Our Mission</h2>

            <div className="mission-card">
              <div className="mission-card__header">
                <h3>Your Journey with <span style={{color: '#fa4226'}}>WHA</span></h3>
              </div>
              <div className="mission-card__content">
                <p>
                  Our mission is to deliver unparalleled value and convenience at every step of your journey. We understand that choosing the right vehicle is more than just a transaction; it’s about creating memorable experiences on the road. That’s why we prioritize exceptional customer service, offering personalized assistance to guide you through your options and help you make informed decisions.
                </p>
                <p>
                  We pride ourselves on our transparent pricing, with no hidden fees, so you can confidently plan your budget. Our flexible booking options allow you to reserve your vehicle online with ease, and our dedicated team is always on hand to assist you throughout the process, from the moment you select your vehicle to the day you drive off into your next adventure.
                </p>
                <p>
                  With WHA Road Solution, your road adventures begin with confidence and peace of mind. We are committed to ensuring that every journey is safe, enjoyable, and tailored to your unique needs. Discover the freedom of the open road with us, and experience the difference of choosing a service that genuinely cares about your driving experience in Australia.
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
            <h2>Book a car by getting in touch with</h2>
            <span>
              {/* <i className="fa-solid fa-phone"></i> */}
              <h3>WHA</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

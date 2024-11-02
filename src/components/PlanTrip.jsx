import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plan your journey now</h3>
              <h2>Quick & easy car solutions</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Select a Car and Submit Your Booking Form or Just Book an Appointment</h3>
                <p>
                  We offer a wide range of vehicles for all your needs. Whether you’re looking to
                  <strong> buy, rent, or rent to own</strong>, we have the perfect car to suit your journey.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>A Specialist Will Contact You to Finalize Your Booking</h3>
                <p>
                  Our knowledgeable Car Specialist will assist you in finalizing your purchase, rental, or
                  rent-to-own plan. If you’ve booked an appointment, we’ll confirm your appointment date and time.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Let's Hit the Road</h3>
                <p>
                  Once your booking is confirmed, you’re all set to hit the road! Whether you’re buying, renting, or opting for a rent-to-own plan, we have you covered with our extensive selection of vehicles. Our team will guide you through the paperwork, ensuring a smooth process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;

import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Reviewed by People</h4>
              <h2>Client Testimonials</h2>
              <p>
                Discover the positive impact we've made on our clients by reading through their testimonials.
                Our clients have experienced our exceptional service and results, and they’re eager to share their
                positive experiences with you. Join the community of satisfied customers who have trusted WHA Road Solution
                for their driving needs.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "We rented a car from this website and had an amazing experience!
                  The booking process was straightforward, and the rental rates were very affordable.
                  The car was clean and ready on time, which made our trip enjoyable."
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="Parry Hotter" />
                    <span>
                      <h4>Parry Hotter</h4>
                      <p>Belgrade</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "The car was in great condition and made our trip even better.
                  We drove across beautiful landscapes, and it was a seamless experience.
                  I highly recommend this car rental website for anyone looking for quality service!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="Ron Rizzly" />
                    <span>
                      <h4>Ron Rizzly</h4>
                      <p>Novi Sad</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-3">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "I was pleasantly surprised by the level of service I received.
                  The staff were friendly and helpful, making sure I had everything I needed for my trip.
                  The vehicle performed exceptionally well, and I will definitely be using WHA Road Solution again!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="Anna Smith" />
                    <span>
                      <h4>Anna Smith</h4>
                      <p>Melbourne</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;

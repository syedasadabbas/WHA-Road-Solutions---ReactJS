import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us</h4>
                <h2>Best valued deals you will ever find</h2>
                <p>
                  At WHA Road Solution, we believe in delivering exceptional value and quality to our customers.
                  Discover unbeatable offers that cater to all your driving needs, whether you're looking to purchase, rent, or rent to own.
                  Our mission is to provide you with a top-notch experience without breaking the bank.
                  Explore our amazing deals designed to elevate your driving experience and ensure you get the most out of your investment.
                </p>
                <a href="#home">
                  Find Details &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Cross Country Drive</h4>
                    <p>
                      Embark on unforgettable cross-country adventures with our premium selection of vehicles,
                      designed for comfort, reliability, and performance on any terrain.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>All-Inclusive Pricing</h4>
                    <p>
                      Enjoy the convenience of our all-inclusive pricing policy, where you receive everything you need
                      in one transparent package, making budgeting a breeze.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>No Hidden Charges</h4>
                    <p>
                      Drive with confidence knowing there are no hidden charges.
                      We pride ourselves on our honest and transparent pricing, ensuring you always know what to expect.
                    </p>
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

export default ChooseUs;

import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Frequently Asked Questions About WHA Road Solution: Here, we address common concerns and inquiries to help you make informed decisions.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question ${getClassQuestion("q1")}`}
                >
                  <p>1. How do I book a car for rental?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="a1"
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  To book a car for rental, visit our website, choose your desired vehicle, select your rental dates, and follow the prompts to complete your booking. You can also contact our customer service for assistance.
                </div>
              </div>

              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. What is the process for purchasing a car?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="a2"
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  To purchase a car from WHA Road Solution, browse our inventory online, select the vehicle you’re interested in, and fill out the inquiry form. Our sales team will contact you to discuss financing options and schedule a test drive.
                </div>
              </div>

              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. What does the rent-to-own program entail?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="a3"
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Our rent-to-own program allows you to rent a vehicle with the option to purchase it after a specified rental period. A portion of your rental payments may go toward the purchase price. Please contact us for specific terms and conditions.
                </div>
              </div>

              <div className="faq-box">
                <div
                  id="q4"
                  onClick={() => openQ("q4")}
                  className={`faq-box__question ${getClassQuestion("q4")}`}
                >
                  <p>4. How can I book an appointment for services?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="a4"
                  className={`faq-box__answer ${getClassAnswer("q4")}`}
                >
                  You can book an appointment for services by visiting our website and navigating to the appointment booking section. Fill out the required details and choose your preferred date and time. Alternatively, you can call us directly to schedule.
                </div>
              </div>

              <div className="faq-box">
                <div
                  id="q5"
                  onClick={() => openQ("q5")}
                  className={`faq-box__question ${getClassQuestion("q5")}`}
                >
                  <p>5. What types of vehicles do you offer for rental?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="a5"
                  className={`faq-box__answer ${getClassAnswer("q5")}`}
                >
                  We offer a diverse fleet of vehicles for rental, including economy cars, SUVs, vans, and luxury vehicles. Each vehicle is well-maintained to ensure a safe and enjoyable driving experience.
                </div>
              </div>

              <div className="faq-box">
                <div
                  id="q6"
                  onClick={() => openQ("q6")}
                  className={`faq-box__question ${getClassQuestion("q6")}`}
                >
                  <p>6. Can I return my rental car early?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="a6"
                  className={`faq-box__answer ${getClassAnswer("q6")}`}
                >
                  Yes, you can return your rental car early. However, please check our policies regarding early returns, as there may be fees associated with returning a vehicle before the scheduled end of the rental period.
                </div>
              </div>

              <div className="faq-box">
                <div
                  id="q7"
                  onClick={() => openQ("q7")}
                  className={`faq-box__question ${getClassQuestion("q7")}`}
                >
                  <p>7. What forms of payment do you accept for car purchases?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="a7"
                  className={`faq-box__answer ${getClassAnswer("q7")}`}
                >
                  We accept various forms of payment for car purchases, including cash, credit cards, and financing options. Please contact our sales team for more details on financing plans and payment methods.
                </div>
              </div>

              <div className="faq-box">
                <div
                  id="q8"
                  onClick={() => openQ("q8")}
                  className={`faq-box__question ${getClassQuestion("q8")}`}
                >
                  <p>8. What are the benefits of renting a car from WHA Road Solution?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="a8"
                  className={`faq-box__answer ${getClassAnswer("q8")}`}
                >
                  Renting from WHA Road Solution provides you with a variety of options, competitive pricing, well-maintained vehicles, and exceptional customer service. Our flexible rental terms and comprehensive insurance options ensure a hassle-free experience.
                </div>
              </div>

              <div className="faq-box">
                <div
                  id="q9"
                  onClick={() => openQ("q9")}
                  className={`faq-box__question ${getClassQuestion("q9")}`}
                >
                  <p>9. How can I contact WHA Road Solution for further inquiries?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="a9"
                  className={`faq-box__answer ${getClassAnswer("q9")}`}
                >
                  You can reach us through our website's contact form, call our customer service number, or connect with us on social media. Our team is here to assist you with any questions or concerns.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;

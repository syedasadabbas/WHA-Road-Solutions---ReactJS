function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>WHA</span> Road Solution
              </li>
              <li>
                We offer a wide range of vehicles for all your driving needs. Whether you're looking to 
                <strong> buy, rent,</strong> or <strong>rent to own</strong>, we have the perfect car to meet your needs.
              </li>

              <li>
                {/* <a href="tel:123456789"> */}
                  <i className="fa-solid fa-phone"></i> &nbsp; (123) -456-789
                {/* </a> */}
              </li>

              <li>
                <a
                  href="mailto: 
                wharoadsolution@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; wharoadsolution@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/syedasadabbas"
                >
                  Design with ❤️ by Asad
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Navigate</li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/models">Vehicle Models</a>
              </li>
              <li>
                <a href="/testimonials">Client Testimonials</a>
              </li>
              <li>
                <a href="/team">Our Team</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 8:00AM - 6:00PM</li>
              <li>Sat: 10:00AM - 3:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

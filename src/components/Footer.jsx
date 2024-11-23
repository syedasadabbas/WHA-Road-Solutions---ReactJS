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
                <a>
                  <i className="fa-solid fa-location"></i>&nbsp; Huntingdale, WA 6110
                </a>
              </li>

              <li>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRvwTgrcxCGWCMSKTXFSJwLncHbCJWBmndzRPzPSCZHHGqxLxRBnPtpbBcVZXgNfpxLCTJV"
                  onClick={() => window.location.href = 'mailto:wharoadsolution@gmail.com'}
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; wharoadsolution@gmail.com
                </a>
              </li>

              <li>
                <h2>
                <a
                  href="https://www.instagram.com/wharoadsolution"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                  &nbsp; @wharoadsolution
                </a>
                </h2>
              </li>
              <li>
                <h2>
                <a
                  href="https://x.com/wharoadsolution"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                  &nbsp; @wharoadsolution
                </a>
                </h2>
              </li>
              <li>
                <h2>
                <a
                  href="https://www.facebook.com/people/WHA-Road-Solution/61567290635331/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                  &nbsp; WHA Road Solution
                </a>
                </h2>
              </li>
              {/* 
              <li>
                  <h2 style={{color: 'dark-gray'}}>Copyright © 2024 WHA Road Solution - All Rights Reserved.</h2>
              </li> */}

              {/* <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/syedasadabbas"
                >
                  Design with ❤️ by Asad
                </a>
              </li> */}
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
                <a href="/models">Our Fleet</a>
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
              <li>Contact Us</li>
              <li>
                <p>Have questions? Contact us, and a specialist will get back to you promptly to assist you!</p>
              </li>
              <li>
                <a href="/contact">
                  <button className="submit-email">To Contact Us Form</button>
                </a>
              </li>
            </ul>
          </div>
          <br />
          <h2 style={{ color: 'gray', alignSelf: 'center', justifySelf: 'center', textAlign: 'center', marginTop: '60px' }}>Copyright © 2024 WHA Road Solution - All Rights Reserved.</h2>
        </div>
      </footer>
    </>
  );
}

export default Footer;

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
        {/* Testimonial 1 - Car Purchase */}
        <div className="all-testimonials__box">
          <span className="quotes-icon">
            <i className="fa-solid fa-quote-right"></i>
          </span>
          <p>
            "I recently purchased a car from WHA Road Solution, and the experience was exceptional! 
            The staff were knowledgeable and guided me through the entire process, making it easy to find the perfect vehicle.
            Highly recommend them for anyone looking to buy a car!"
          </p>
          <div className="all-testimonials__box__name">
            <div className="all-testimonials__box__name__profile">
              <span>
                <h4>Lucas Anderson</h4>
                <p>Brisbane</p>
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial 2 - Car Rental */}
        <div className="all-testimonials__box">
          <span className="quotes-icon">
            <i className="fa-solid fa-quote-right"></i>
          </span>
          <p>
            "We rented a car from WHA Road Solution during our family trip, and it was fantastic! 
            The car was clean and well-maintained, and the customer service was top-notch. 
            I’ll definitely rent from them again!"
          </p>
          <div className="all-testimonials__box__name">
            <div className="all-testimonials__box__name__profile">
              <span>
                <h4>Emily Nguyen</h4>
                <p>Sydney</p>
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial 3 - Rent to Own */}
        <div className="all-testimonials__box">
          <span className="quotes-icon">
            <i className="fa-solid fa-quote-right"></i>
          </span>
          <p>
            "The rent-to-own option offered by WHA Road Solution was perfect for me! 
            I was able to drive my dream car while working towards owning it. 
            The process was straightforward, and the team was very supportive throughout!"
          </p>
          <div className="all-testimonials__box__name">
            <div className="all-testimonials__box__name__profile">
              <span>
                <h4>Charlotte Brown</h4>
                <p>Melbourne</p>
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial 4 - Car Purchase */}
        <div className="all-testimonials__box">
          <span className="quotes-icon">
            <i className="fa-solid fa-quote-right"></i>
          </span>
          <p>
            "I had a fantastic experience purchasing my first car here! 
            The staff were patient and helped me understand everything, 
            from financing to maintenance. I'm thrilled with my new ride!"
          </p>
          <div className="all-testimonials__box__name">
            <div className="all-testimonials__box__name__profile">
              <span>
                <h4>Daniel Smith</h4>
                <p>Perth</p>
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial 5 - Car Rental */}
        <div className="all-testimonials__box">
          <span className="quotes-icon">
            <i className="fa-solid fa-quote-right"></i>
          </span>
          <p>
            "Rented a car for a weekend getaway and it was a seamless experience! 
            The booking was easy, the car was ready when I arrived, 
            and it made our trip so much fun. Thank you, WHA!"
          </p>
          <div className="all-testimonials__box__name">
            <div className="all-testimonials__box__name__profile">
              <span>
                <h4>Sarah Wilson</h4>
                <p>Adelaide</p>
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial 6 - Rent to Own */}
        <div className="all-testimonials__box">
          <span className="quotes-icon">
            <i className="fa-solid fa-quote-right"></i>
          </span>
          <p>
            "The rent-to-own program at WHA Road Solution is incredible! 
            I love being able to test out the car while making payments towards ownership. 
            The process was clear and the team was so helpful!"
          </p>
          <div className="all-testimonials__box__name">
            <div className="all-testimonials__box__name__profile">
              <span>
                <h4>Michael Johnson</h4>
                <p>Gold Coast</p>
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

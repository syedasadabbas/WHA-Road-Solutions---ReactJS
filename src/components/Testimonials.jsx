import React, { useState, useEffect } from "react";
import "./Testimonials.css"; // assuming a separate CSS file for fading animations

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  // Testimonials data
  const testimonials = [
    { 
      // First testimonial object - Car Purchase
      text: "I recently purchased a car from WHA Road Solution, and the experience was exceptional! The staff were knowledgeable and guided me through the entire process, making it easy to find the perfect vehicle. I highly recommend them for anyone looking to buy a car!",
      name: "Lucas Anderson",
      location: "Brisbane",
      suggestion: "Maybe consider offering some car maintenance workshops for first-time buyers. It would be a great add-on!"
    },
  
    { 
      // Second testimonial object - Car Rental
      text: "We rented a car from WHA Road Solution during our family trip, and it was fantastic! The car was clean and well-maintained, and the customer service was top-notch. I’ll definitely rent from them again!",
      name: "Emily Nguyen",
      location: "Sydney",
      suggestion: "It would be awesome if there were some loyalty discounts for frequent renters!"
    },
  
    { 
      // Third testimonial object - Rent-to-Own
      text: "The rent-to-own option offered by WHA Road Solution was perfect for me! I was able to drive my dream car while working towards ownership. The process was straightforward, and the team was very supportive throughout!",
      name: "Charlotte Brown",
      location: "Melbourne",
      suggestion: "Perhaps adding some flexible payment options could make this even more accessible."
    },
  
    { 
      // Fourth testimonial object - First Car Purchase
      text: "I had a fantastic experience purchasing my first car here! The staff were patient and helped me understand everything, from financing to maintenance. I'm thrilled with my new ride!",
      name: "Daniel Smith",
      location: "Perth",
      suggestion: "Would be great to have a dedicated point-of-contact for first-time buyers to answer any follow-up questions."
    },
  
    { 
      // Fifth testimonial object - Weekend Car Rental
      text: "Rented a car for a weekend getaway and it was a seamless experience! The booking was easy, the car was ready when I arrived, and it made our trip so much fun. Thank you, WHA!",
      name: "Sarah Wilson",
      location: "Adelaide",
      suggestion: "Weekend package deals for occasional renters would be a great addition!"
    },
  
    { 
      // Sixth testimonial object - Rent-to-Own Program
      text: "The rent-to-own program at WHA Road Solution is incredible! I love being able to test out the car while making payments toward ownership. The process was clear, and the team was so helpful!",
      name: "Michael Johnson",
      location: "Gold Coast",
      suggestion: "Maybe consider offering a more extensive selection of cars in the rent-to-own program!"
    }
  ];  

  // Effect to update current index every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + testimonialsPerPage) % testimonials.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get the current set of testimonials
  const currentTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + testimonialsPerPage
  );

  // Wrap around if reaching the end
  if (currentTestimonials.length < testimonialsPerPage) {
    currentTestimonials.push(
      ...testimonials.slice(0, testimonialsPerPage - currentTestimonials.length)
    );
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-content">
          <div className="testimonials-content__title">
            <h2>Client Testimonials</h2>
            <h3>We value our customers' feedback and strive to improve based on their experiences.</h3>
          </div>
          <div className="all-testimonials">
            {currentTestimonials.map((testimonial, index) => (
              <div key={index} className="all-testimonials__box fade">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>{testimonial.text}</p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <span>
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.location}</p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Testimonials from "../components/Testimonials";

function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonials" />
        <Testimonials />
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
      </section>
    </>
  );
}

export default TestimonialsPage;

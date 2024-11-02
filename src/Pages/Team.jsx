import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Team() {
  const teamPpl = [
    { name: "Wasim", job: "Co-Founder WHA" },
    { name: "Haider", job: "Co-Founder WHA" },
    { name: "Ahmad", job: "Co-Founder WHA" },
  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  {/* <img src={ppl.img} alt="team_img" /> */}
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <a
          style={{ fontSize: "14px", color: '#ff4d30', textDecoration: 'none' }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/syedasadabbas"
        >
          This Website was Developed with ❤️ by Asad
        </a> */}
        <div className="" style={{ justifyItems: 'center', textAlign: 'center' }}>
          <div className="">
            <div className="team-container__box">
              <div className="team-container__box__img-div">
              </div>
              <div className="team-container__box__descr">
                <h3>Syed Asad Abbas</h3>
                <p>Web and Mobile App Developer</p>
                <br />
                <div className="team-container__social-links" style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                  <a href="https://github.com/syedasadabbas" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" style={{ fontSize: '24px', color: '#000' }}></i>
                  </a>
                  <a href="https://www.linkedin.com/in/syed-asad-abbas-234325201/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin" style={{ fontSize: '24px', color: '#0077B5' }}></i>
                  </a>
                  <a href="https://www.instagram.com/iam_.eleven/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" style={{ fontSize: '24px', color: '#E1306C' }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default Team;

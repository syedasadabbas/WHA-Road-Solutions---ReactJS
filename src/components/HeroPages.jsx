// import { Link } from "react-router-dom";

function HeroPages({ name }) {
  return (
    <>
      <section className="hero-pages">
        <div className="hero-pages__overlay"></div>
        <div className="container">
          <div className="hero-pages__text" style={{alignContent:"center", alignItems:"center", color:"#ff4d30", fontFamily: "monospace", fontWeight:700}}>
            <h3>{name}</h3>
            {/* <p>
              <Link to="/">Home</Link> / {name}
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPages;

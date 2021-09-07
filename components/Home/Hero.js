import Navbar from "../partials/Navbar";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <Navbar />
        <div className="hero-img blur">
          <img src="hero.jpeg" alt="" />
        </div>
        <div className="hero-content container">
          <div className="hero-top">
            <div className="hero-title-wrapper">
              <span className="white">FUTURES LEADERS</span>
              <span className="black">SUMMIT &#39;21</span>
            </div>
            <div className="hero-info">
              <span>DECEMBER</span>
              <span>Tuzla, B&H</span>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="hero-button-black">
              <span>
                STEM outside<br></br> the box
              </span>
            </div>
            <div className="hero-button-yellow">
              <span>COMING SOON</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

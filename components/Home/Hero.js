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
          <img src="/hero-logo.svg" alt="" />
        </div>
      </div>
    </>
  );
}

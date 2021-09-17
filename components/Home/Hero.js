export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-img blur">
          <img src="hero.png" alt="" />
        </div>
        <div className="hero-content container is-fluid">
          <div className="hero-logo">
            <img src="/hero-logo.svg" alt="" />
          </div>
          <div className="dots">
            <img src="/dots.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

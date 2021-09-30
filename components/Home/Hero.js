import Image from "next/image";
import heroimg from "../../public/hero.png";
export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-img blur">
          <Image
            src={heroimg}
            alt="Futures Leaders Summit"
            layout="fill"
            priority="true"
            placeholder="blur"
          />
        </div>
        <div className="hero-content container is-fluid">
          <div className="hero-logo">
            <img src="/hero-logo.svg" alt="" />
          </div>
          <div className="dots is-hidden-touch">
            <img src="/dots.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

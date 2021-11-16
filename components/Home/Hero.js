import Image from "next/image";
import heroimg from "../../public/hero.webp";
import Link from "next/link";

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
            quality={20}
          />
        </div>
        <div className="hero-content container is-fluid">
          <div className="hero-logo">
            <img src="/hero-logo.svg" alt="Futures Leaders Summit" />
          </div>
          <div className="dots">
            <Link href="/registration" >
              <a className="contact-button">
                <span>Get Tickets</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import heroimg from "../../public/hero.png";
export default function Intro() {
  return (
    <>
      <div className="team hero">
        <div className="hero-img blur">
          <Image
            src={heroimg}
            alt="Futures Leaders Summit"
            layout="fill"
            priority="true"
            placeholder="blur"
            quality={60}
            loading="eager"
          />
        </div>
        <div className="container">
          <div className="inner">
            <div className="title-line">
              <h2>Meet the team</h2>
              <div className="line-decor is-hidden-touch">
                <img src="/dots.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

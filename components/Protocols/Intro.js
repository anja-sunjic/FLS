import Image from "next/image";
import heroimg from "../../public/hero.webp";
export default function Intro() {
  return (
    <>
      <div className="intro hero protocols">
        <div className="hero-img blur">
          <Image
            src={heroimg}
            alt="Futures Leaders Summit"
            layout="fill"
            priority="true"
            placeholder="blur"
          />
        </div>
        <div className="container">
          <div className="inner">
            <div className="title-line">
              <h2>FLS&#39;21 Health and Safety protocols</h2>
              <div className="line-decor is-hidden-touch">
                <img src="/dots.svg" alt="Futures Leaders Summit" />
              </div>
            </div>
            <p>
              All safety measures are in accordance with the orders and
              instructions of the Federal and Cantonal Crisis Staff. The
              organizing team will put in place all measures needed to prevent
              the further spread of COVID-19 during event days. Your health and
              well-being is of the utmost importance for us, which is why the
              following guidelines for prevention of COVID-19 spread are
              imposed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import heroimg from "../../public/story.jpg";
export default function Story() {
  return (
    <>
      <div className="story hero">
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
              <h2>What is our story?</h2>
              <div className="line-decor is-hidden-touch">
                <img src="/dots.svg" alt="" />
              </div>
            </div>
            <p>
              Ever since its inception, Bosnia & Herzegovina Futures Foundation
              has a long term goal to grow to a community of 10,000 change
              makers by 2030 who strive for the advancement of quality of life
              in our country.
            </p>
            <p>
              We are driven with a vision to transform Bosnia & Herzegovina into
              a prosperous nation that can respond to the challenges of the 21st
              Century. Our mission brings us closer to reaching our vision - by
              empowering the youth through education, technology and leadership,
              we shape the next generation of change makers.
            </p>
            <p>
              Futures Leaders Summit is a breakthrough event that will provide
              future STEM leaders with the opportunity to expand their knowledge
              and become the change makers by doing what they are passionate
              about. With this event’s debut, we are fostering and engaging a
              community of future STEM leaders that are changing Bosnia and
              Herzegovina.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

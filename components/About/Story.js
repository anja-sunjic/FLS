import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import heroimg from "../../public/story.jpg";
export default function Story() {
  return (
    <>
      <div className="story hero">
        <div className="hero-img blur is-hidden-touch">
          <Image
            src={heroimg}
            alt="Futures Leaders Summit"
            layout="fill"
            priority="true"
            placeholder="blur"
          />
        </div>

        <div className="container">
          <div className="hex-decor-big is-hidden-desktop">
            <Image src="/hex.svg" alt="decor" layout="fill" />
          </div>
          <div className="inner">
            <div className="title-line">
              <h2>What is our story?</h2>
              <div className="line-decor is-hidden-touch">
                <img src="/dots.svg" alt="Futures Leaders Summit" />
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
            <p>
              Every student deserves a chance to attend world class events, to
              hear the stories of people that not long ago were as old as they
              are now, and to hear first-hand that everything is possible. We
              recognize the challenge of students to participate in top-class
              events because only by seeing how their future can be bright,
              students truly recognize their potential, and limitations fade on
              the path towards excellence. In order to provide young and
              prosperous STEM students in Bosnia and Herzegovina with the
              opportunity to gain global perspectives and to encourage them to
              create the change from local to country level, we will gather
              keynote speakers from all over the world, organize workshops that
              will improve their skill set, and enable them to visit and
              collaborate with companies related to their field of study.
            </p>
            <p>
              Our Foundation envisions Futures Leaders Summit as an event that
              will in years to come, with all the available global sources and
              partners, provide a chance for young leaders to transform Bosnia
              and Herzegovina and hence shape their and the future of our
              country.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

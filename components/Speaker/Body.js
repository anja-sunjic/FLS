import Link from "next/link";
import Image from "next/image";
import LinkedIn from "../partials/LinkedIn";
import { Parallax } from "react-scroll-parallax";

export default function Body(props) {
  return (
    <>
      <section className="section speaker-single">
        {/* <div className="hex-decor">
          <Image src="/hex.svg" alt="decor" layout="fill" />
        </div> */}
        <div className="container">
          <div className="speaker-inner">
            <div className="speaker-img image">
              <Image
                src={props.speaker.img}
                alt={props.speaker.name}
                layout="fill"
                className="grayscale"
                quality={50}
                priority={true}
              />
            </div>
            <div className="right">
              <div className="first-line">
                <a href={props.speaker.li} target="_blank" rel="noreferrer">
                  <img src="/linkedin.png" alt="" />
                </a>
                <p className="name">{props.speaker.name}</p>
              </div>

              <p className="role">{props.speaker.title}</p>
              <p className="bio">{props.speaker?.bio}</p>
            </div>
          </div>
        </div>
        <div className="hex-decor is-hidden-touch">
          <Parallax y={[-20, 25]} x={[0, 0]} tagOuter="figure">
            <Image src="/hex.svg" alt="decor" height={1000} width={1000} />
          </Parallax>
        </div>
        <div className="hex-decor is-hidden-desktop">
          <Parallax y={[-20, 100]} x={[0, 0]} tagOuter="figure">
            <Image src="/hex.svg" alt="decor" height={1000} width={1000} />
          </Parallax>
        </div>
      </section>
    </>
  );
}

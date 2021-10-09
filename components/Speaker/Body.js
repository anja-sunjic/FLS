import Link from "next/link";
import Image from "next/image";
import LinkedIn from "../partials/LinkedIn";
export default function Body(props) {
  return (
    <>
      <section className="section speaker-single">
        <div className="hex-decor">
          <Image src="/hex.svg" alt="decor" layout="fill" />
        </div>
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
                <LinkedIn url={props.li} />
                <p className="name">{props.speaker.name}</p>
              </div>

              <p className="role">{props.speaker.title}</p>
              <p className="bio">{props.speaker?.bio}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
export default function Speaker(props) {
  return (
    <>
      <div className="speaker-card">
        <a href={props.speaker.li} target="_blank" rel="noreferrer">
          <div className="member-img image is-1-by-1">
            <Image
              src={props.speaker.img}
              alt={props.speaker.name}
              layout="fill"
              className="grayscale"
              quality={50}
              priority={true}
            />
          </div>
        </a>
        <p className="name">{props.speaker.name}</p>
        <p className="role">{props.speaker.title}</p>
      </div>
    </>
  );
}

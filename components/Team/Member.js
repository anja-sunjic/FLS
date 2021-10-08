import Link from "next/link";
import Image from "next/image";
export default function Member(props) {
  return (
    <>
      <div className="member">
        <a href={props.li} target="_blank" rel="noreferrer">
          <div className="member-img image is-1-by-1">
            <Image
              src={props.image}
              alt={props.name}
              layout="fill"
              className="grayscale"
              priority={true}
            />
          </div>
        </a>
        <p className="name">{props.name}</p>
        <p className="role">{props.title}</p>
      </div>
    </>
  );
}

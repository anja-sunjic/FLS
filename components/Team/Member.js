import Image from "next/image";
import heroimg from "../../public/hero.png";
export default function Member(props) {
  return (
    <>
      <div className="team-member">
        <Link href={props.li}>
          <div className="speaker-img">
            <Image
              src={props.img}
              alt={props.name}
              height={230}
              width={200}
              className="grayscale"
              priority={true}
            />
          </div>
        </Link>
        <p className="name">{props.name}</p>
      </div>
    </>
  );
}

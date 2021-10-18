import { speakers } from "../../data/speakers";
import Speaker from "./Speaker";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
export default function Speakers() {
  return (
    <div className="section speakers-all">
      <div className="container">
        <div className="speakers-container">
          {speakers.map((speaker) => {
            return <Speaker speaker={speaker} key={speaker.id} />;
          })}
        </div>
      </div>
      <div className="hex-decor is-hidden-touch">
        <Parallax y={[-10, 35]} x={[0, 0]} tagOuter="figure">
          <Image src="/hex.svg" alt="decor" height={1000} width={1000} />
        </Parallax>
      </div>
      <div className="hex-decor-big is-hidden-desktop">
        <Image src="/hex.svg" alt="decor" layout="fill" />
      </div>
    </div>
  );
}

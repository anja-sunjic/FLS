import Link from "next/link";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { wed, thu, fri } from "../../data/program";
export default function Body(props) {
  const sessions = [...wed, ...thu, ...fri];
  const speakerSessions = [];
  const filtered = sessions.map((slot) => {
    return slot.events.map((ev) => {
      if (ev.speakerIds?.includes(props.speaker.id)) {
        speakerSessions.push(slot);
        return { slot: slot, ev: ev };
      }
    });
  });
  console.log(speakerSessions);
  return (
    <>
      <section className="section speaker-single">
        {/* <div className="hex-decor">
          <Image src="/hex.svg" alt="decor" layout="fill" />
        </div> */}
        <div className="container">
          <div className="speaker-inner">
            <div className="left">
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
              <div className="agenda-items">
                {speakerSessions.map((x) => {
                  return (
                    <div className="item" key={x.time}>
                      <div className="left">
                        <p className="time">{x.time}</p>
                        <p className="type">{x.type}</p>
                      </div>
                      <div className="_right">
                        {x.events?.map((ev) => {
                          if (ev.speakerIds.includes(props.speaker.id))
                            return (
                              <p className="title" key={ev.id}>
                                {ev.title}
                              </p>
                            );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="right">
              <div className="first-line">
                <a href={props.speaker.li} target="_blank" rel="noreferrer">
                  <img src="/linkedin.png" alt="" />
                </a>
                <p className="name">{props.speaker.name}</p>
              </div>

              <p className="role">{props.speaker.title}</p>
              <p
                className="bio"
                dangerouslySetInnerHTML={{ __html: props.speaker?.bio }}
              ></p>
            </div>
          </div>
          <div className="sessions">{console.log(props.speaker.id)}</div>
        </div>
        <div className="hex-decor is-hidden-touch">
          <Parallax y={[-20, 50]} x={[0, 0]} tagOuter="figure">
            <Image src="/hex.svg" alt="decor" height={1000} width={1000} />
          </Parallax>
        </div>
        <div className="hex-decor is-hidden-desktop">
          <Image src="/hex.svg" alt="decor" height={1000} width={1000} />
        </div>
      </section>
    </>
  );
}

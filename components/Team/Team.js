import Image from "next/image";
import Member from "./Member";
import LazyLoad from "react-lazyload";
export default function Team(props) {
  return (
    <>
      <div className={`team-single`}>
        <div className="title-line">
          <h2>{props.name}</h2>
          <div className="line-decor is-hidden-touch">
            <img src="/dots.svg" alt="Futures Leaders Summit" />
          </div>
        </div>
        <div className="members">
          {props.members.map((member) => {
            return (
              <Member
                image={member.img}
                name={member.name}
                key={member.name}
                li={member.li}
                title={member.title}
              ></Member>
            );
          })}
        </div>
      </div>
    </>
  );
}

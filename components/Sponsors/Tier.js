import Image from "next/image";
import Member from "./Partner";
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
                img={member.img}
                url={member.url}
                key={member.url}
              ></Member>
            );
          })}
        </div>
      </div>
    </>
  );
}

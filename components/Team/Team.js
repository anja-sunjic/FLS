import Image from "next/image";
import Member from "./Member";
export default function Team(props) {
  return (
    <>
      <div className={`team-single`}>
        <div className="title-line">
          <h2>{props.name}</h2>
          <div className="line-decor is-hidden-touch">
            <img src="/dots.svg" alt="" />
          </div>
        </div>
        <div className="members">
          {props.members.map((member) => {
            return (
              <Member
                image={member.img}
                name={member.name}
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

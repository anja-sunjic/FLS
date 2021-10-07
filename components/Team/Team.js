import Image from "next/image";
import Member from "./Member";
export default function Team(props) {
  console.log(props);
  return (
    <>
      <div className={`team-single ${props.bg}`}>
        <div className="title-line">
          <h2>{props.name}</h2>
          <div className="line-decor is-hidden-touch">
            <img src="/dots.svg" alt="" />
          </div>
          <div className="members">
            {props.members.map((member) => {
              <Member
                image={member.image}
                name={member.name}
                li={member.li}
              ></Member>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Team from "./Team";
import { teams } from "../../data/teams";
export default function Teams() {
  return (
    <div className="section teams">
      <div className="container">
        {teams.map((team) => {
          return (
            <Team name={team.name} members={team.members} key={team.name} />
          );
        })}
      </div>
    </div>
  );
}

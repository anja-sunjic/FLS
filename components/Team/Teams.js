import Image from "next/image";
import Team from "./Team";
import { teams } from "../../data/teams";
export default function Teams() {
  return (
    <div className="section teams">
      {teams.map((team) => {
        return (
          <div className="container">
            <Team name={team.name} members={team.members} />
          </div>
        );
      })}
    </div>
  );
}

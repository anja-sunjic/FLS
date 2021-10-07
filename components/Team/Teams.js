import Image from "next/image";
import Team from "./Team";
import { teams } from "../../data/teams";
export default function Teams() {
  return (
    <>
      {/* oc */}
      <Team bg="dark" name="Organizing Committee" members={teams} />
      <Team bg="light" name="Event Coordination" members={teams} />
    </>
  );
}

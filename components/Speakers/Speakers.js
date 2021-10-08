import { speakers } from "../../data/speakers";
import Speaker from "./Speaker";
export default function Speakers() {
  return (
    <div className="section">
      <div className="container">
        <div className="speakers-container">
          {speakers.map((speaker) => {
            return <Speaker speaker={speaker} key={speaker.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

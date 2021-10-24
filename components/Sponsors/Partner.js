import Link from "next/link";
import Image from "next/image";
import PartnerLogo from "../partials/PartnerLogo";
export default function Member(props) {
  console.log(props);
  return (
    <>
      <div className="member">
        <PartnerLogo url={props.url} img={props.img} />
      </div>
    </>
  );
}

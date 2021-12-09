import Image from "next/image";
import heroimg from "../../public/hero.webp";
export default function Ending() {
  return (
    <>
      <div className="intro bottom hero protocols">
        <div className="hero-img blur">
          <Image
            src={heroimg}
            alt="Futures Leaders Summit"
            layout="fill"
            priority="true"
            placeholder="blur"
          />
        </div>
        <div className="container">
          <div className="inner">
            <p>
              Individuals (staff, guests, and participants) are obliged to stay
              at their accommodation and alert FLS&apos;21 Organizing Team or
              FLS&apos;21 Health and Safety Advisor if experiencing any of the
              following symptoms:
            </p>
            <ul className="protocols-list">
              <li>fever;</li>
              <li>cough and/or sore throat;</li>
              <li>tiredness;</li>
              <li>loss of taste or smell;</li>
              <li>
                shortness of breath or experiencing any breathing difficulties;
              </li>
              <li>aches and pains e.g. muscle pain;</li>
              <li>headache;</li>
              <li>chills followed by repeated shaking;</li>
              <li>diarrhea.</li>
            </ul>
            <br />
            <p>
              We expect all FLS&apos;21 guests and participants to follow
              protection measures and guidelines against COVID-19 spread during
              their travel trip to Tuzla. Participants will receive more
              detailed instructions and information about the means of
              FLS&apos;21 Health and Safety Protocols&apos; implementation
              during the event via email before the start of the event.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

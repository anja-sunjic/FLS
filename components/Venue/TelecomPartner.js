import Image from "next/image";

const TelecomPartner = (props) => {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="inner">
          <a
            className="grayscale image-link"
            href="https://telemach.ba/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/partners/telemach.png"
              alt="eurofarm"
              width={483}
              height={150}
            />
          </a>
          <p className="title">{props.title}</p>
        </div>
      </div>
    </section>
  );
};

export default TelecomPartner;

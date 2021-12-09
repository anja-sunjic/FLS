import Image from "next/image";

const HealthPartners = (props) => {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="inner">
          <p className="title">{props.title}</p>
        </div>
        <div className="container-partners">
          <div className="partners-image">
            <a
              className="grayscale"
              href="https://poliklinika.eurofarmcentar.ba/kontakt/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/partners/eurofarm.png"
                alt="eurofarm"
                width={528}
                height={85}
              />
            </a>
          </div>

          <div className="partners-image">
            <a
              className="grayscale"
              href="https://ecotime.ba/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/partners/ecotime-logo.png"
                alt="ecotime"
                width={383}
                height={100}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthPartners;

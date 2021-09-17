import Link from "next/link";

export default function Partners() {
  return (
    <>
      <section className="section partners" id="partners" name="partners">
        <div className="container">
          <h2>Sponsors & Partners</h2>
          <div className="top-partners">
            <div className="partner">
              <span className="role">Organizer</span>
              <a
                href="https://www.bhfuturesfoundation.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/partners/BHFF.png" alt="" className="grayscale" />
              </a>
            </div>
            <div className="partner">
              <span className="role">Organizing Partner</span>
              <a href="https://bhing.ba/" target="_blank" rel="noreferrer">
                <img src="/partners/bhing.png" alt="" className="grayscale" />
              </a>
            </div>
          </div>
          <div className="dots is-hidden">
            <img src="/dots.svg" alt="" />
          </div>
          <div className="cta-sec">
            <h3>FLS&#39;21 IS LOOKING FOR SPONSORS!</h3>
            <Link href="/contact">
              <a className="contact-button _shine">
                <span>Become a Sponsor</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
export default function Ending() {
  return (
    <>
      <section className="intro bottom hero protocols">
        <div className="container">
          <div className="hero-img blur"></div>
          <div className="reg_ending_container">
            <div className="left">
              <h1 className="discountheader">You want a 100% discount?</h1>
              <Link href="/registration/travel-grant-application">
                <div className="contact-button">
                  <span>Get travel grant</span>
                </div>
              </Link>
            </div>
            <div className="right">
              <p>
                Together with our sponsors and partners, we are giving away
                Travel Grants for promising STEM students and recent graduates
                coming from any faculty from Bosnia and Herzegovina.
                <br /> <br /> The worth of a maximum Travel Grant is 250 BAM,
                and it covers your Summit ticket, accommodation (max. three
                nights) and travel expenses (to and from Tuzla from any town in
                Bosnia and Herzegovina).
                <br /> <br /> More details about the grant&#39;s scalability you
                can find on the Travel Grant Registration Page.
                <br /> <br />
                <div className="italic">
                  Note: Bosnia and Herzegovina Futures Foundation Senior
                  Scholars and selected volunteers automatically receive the
                  travel grant based on their scholarships and active engagement
                  as volunteers.
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
export default function Ending() {
  return (
    <>
      <section className="intro bottom hero protocols bg-decor">
        <div className="container">
          <div className="hero-img blur"></div>
          <div className="reg_ending_container">
            <div className="left">
              <h1 className="discountheader">You want a 100% discount?</h1>
              <Link href="/registration/travel-grant-application">
                <div className="contact-button mobile-margin">
                  <span>Get travel grant</span>
                </div>
              </Link>
              <div className="line-decor is-hidden-touch discount-line">
                <img src="/dots.svg" alt="Futures Leaders Summit" />
              </div>
            </div>
            <div className="right">
              <p>
                Together with our sponsors and partners, we are giving away
                Travel Grants for promising STEM students and recent graduates
                coming from any faculty from Bosnia and Herzegovina.
                <br /> <br /> The worth of a maximum Travel Grant is 200 BAM,
                and it covers your Summit ticket, accommodation (max. three
                nights) and travel expenses (to and from Tuzla from any town in
                Bosnia and Herzegovina).
                <br /> <br /> More details about the grant&#39;s scalability you
                can find on the <br /> 
                <Link href="/registration/travel-grant-application">
                  <a className="link-yellow-bold-underline">Travel Grant Registration Page.</a>
                </Link>
                <br /> <br />
                <span className="italic">
                  Note: Bosnia and Herzegovina Futures Foundation Senior
                  Scholars and selected volunteers automatically receive the
                  travel grant based on their scholarships and active engagement
                  as volunteers.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

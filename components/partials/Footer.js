import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              {/* <div className="logo"></div> */}
              <p>FLS&#39;21 HEALTH AND SAFETY PROTOCOLS</p> <br />
              <p className="sub">
                All safety measures will be in accordance with the instructions
                of the Cantonal Crisis Staff. The organizing team will put in
                place all measures needed to prevent the further spread of the
                COVID-19 virus during event days. More information will be
                published shortly.
              </p>
              <Link href="/contact">
                <a className="contact-button _shine">
                  <span>Contact Us</span>
                </a>
              </Link>
            </div>
            <div className="column is-4">
              <div className="sm">
                <p>Follow FLS</p>
                <br />
                <div className="is-flex is-flex-direction-row">
                  <a href="">
                    <img src="/facebook.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="/instagram.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="/linkedin.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="sub cc">
            © Bosnia & Herzegovina Futures Foundation • All rights reserved •
            2021
          </p>
        </div>
      </div>
    </>
  );
}

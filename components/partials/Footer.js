import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              {/* <div className="logo"></div> */}
              <p>Contact Us</p> <br />
              <p className="sub">
                As you are most likely aware of, the corona virus pandemic is
                currently affecting the globe. After a succesful first virtual
                conference in April, we’re once again making use of technology
                to deliver an awesome conference.
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

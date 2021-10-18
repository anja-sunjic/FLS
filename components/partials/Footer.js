import Link from "next/link";
import LinkedIn from "./LinkedIn";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              {/* <div className="logo"></div> */}
              <p>FLS&#39;21 HEALTH AND SAFETY PROTOCOLS</p>
              <p className="sub">
                All safety measures are in accordance with the orders and
                instructions of the Federal and Cantonal Crisis Staff. The
                organizing team will put in place all measures needed to prevent
                the further spread of COVID-19 during event days. Your health
                and well-being is of the utmost importance for us, which is why
                the
                <Link href="/protocols">
                  <a className="yellow"> following guidelines </a>
                </Link>
                for prevention of COVID-19 spread are imposed.
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
                <div className="is-flex is-flex-direction-row">
                  <a
                    href="https://www.facebook.com/Futures-Leaders-Summit-100876219014134"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.51562 24H11.3438V15.4688H8.53125V12.6562H11.3438V9.14062C11.3438 7.2 12.9187 5.625 14.8594 5.625H18.375V8.4375H15.5625C14.7891 8.4375 14.1562 9.07031 14.1562 9.84375V12.6562H18.2484L17.7797 15.4688H14.1562V24H20.4844C22.425 24 24 22.425 24 20.4844V3.51562C24 1.575 22.425 0 20.4844 0H3.51562C1.575 0 0 1.575 0 3.51562V20.4844C0 22.425 1.575 24 3.51562 24ZM1.40625 3.51562C1.40625 2.35313 2.35313 1.40625 3.51562 1.40625H20.4844C21.6469 1.40625 22.5938 2.35313 22.5938 3.51562V20.4844C22.5938 21.6469 21.6469 22.5938 20.4844 22.5938H15.5625V16.875H18.9703L19.9078 11.25H15.5625V9.84375H19.7812V4.21875H14.8594C12.1453 4.21875 9.9375 6.42656 9.9375 9.14062V11.25H7.125V16.875H9.9375V22.5938H3.51562C2.35313 22.5938 1.40625 21.6469 1.40625 20.4844V3.51562Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/futuresleaderssummit/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M12.0051 5.83594C8.60195 5.83594 5.8457 8.59219 5.8457 11.9953C5.8457 15.3984 8.60195 18.1547 12.0051 18.1547C15.4082 18.1547 18.1645 15.3984 18.1645 11.9953C18.1645 8.59219 15.4035 5.83594 12.0051 5.83594ZM12.0051 15.9937C9.79727 15.9937 8.00664 14.2031 8.00664 11.9953C8.00664 9.7875 9.79727 7.99688 12.0051 7.99688C14.2129 7.99688 16.0035 9.7875 16.0035 11.9953C16.0035 14.2031 14.2129 15.9937 12.0051 15.9937Z"
                          fill="white"
                        />
                        <path
                          d="M16.9482 0.0751079C14.7404 -0.0280171 9.27008 -0.0233296 7.06227 0.0751079C5.11696 0.168858 3.40602 0.637608 2.02321 2.01573C-0.283037 4.32667 0.0122757 7.43448 0.0122757 11.9954C0.0122757 16.6642 -0.245537 19.7017 2.02321 21.9751C4.33883 24.2907 7.49352 23.986 12.0029 23.986C16.6248 23.986 18.2232 23.9907 19.8591 23.3579C22.081 22.4954 23.7591 20.5079 23.9232 16.9407C24.0263 14.7329 24.0216 9.26261 23.9232 7.0548C23.7263 2.84073 21.4623 0.286045 16.9482 0.0751079ZM20.4404 20.447C18.9263 21.961 16.8263 21.8251 11.9701 21.8251C6.96852 21.8251 4.96696 21.9001 3.49977 20.4329C1.81696 18.7548 2.12165 16.0642 2.12165 11.9814C2.12165 6.4548 1.55446 2.47511 7.09977 2.19386C8.37477 2.14698 8.74977 2.13292 11.956 2.13292L12.0029 2.16105C17.3326 2.16105 21.5138 1.60323 21.7622 7.14855C21.8185 8.41417 21.8326 8.79386 21.8326 11.9954C21.8326 16.936 21.9263 18.9564 20.4404 20.447Z"
                          fill="white"
                        />
                        <path
                          d="M18.4078 7.03584C19.2026 7.03584 19.8469 6.39155 19.8469 5.59678C19.8469 4.80201 19.2026 4.15771 18.4078 4.15771C17.613 4.15771 16.9688 4.80201 16.9688 5.59678C16.9688 6.39155 17.613 7.03584 18.4078 7.03584Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <LinkedIn url="https://www.linkedin.com/company/futuresleaderssummit" />
                </div>
              </div>
              <a className="logo is-hidden-touch">
                <img src="logo.png" alt="" />
              </a>{" "}
              <a
                href="https://www.bhfuturesfoundation.org/"
                target="_blank"
                rel="noreferrer"
                className="bhff-logo"
              >
                <img
                  src="/partners/BHFFnegativ.png"
                  alt="BH Futures Foundation"
                />
              </a>
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

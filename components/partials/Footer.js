import Link from "next/link";

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
                <div className="is-flex is-flex-direction-row">
                  <a href="">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.95 0H1.05C0.45 0 0 0.45 0 1.05V23.1C0 23.55 0.45 24 1.05 24H12V16.5H9V12H12V9C12 5.85 13.8 4.5 16.5 4.5C17.85 4.5 19.2 4.5 19.5 4.5V9H18C17.1 9 16.5 9.6 16.5 10.5V12H20.4L19.5 16.5H16.5V24H22.95C23.55 24 24 23.55 24 22.95V1.05C24 0.45 23.55 0 22.95 0Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.2175 7.27795C19.0128 7.27795 19.6575 6.63324 19.6575 5.83795C19.6575 5.04266 19.0128 4.39795 18.2175 4.39795C17.4222 4.39795 16.7775 5.04266 16.7775 5.83795C16.7775 6.63324 17.4222 7.27795 18.2175 7.27795Z"
                        fill="white"
                      />
                      <path
                        d="M12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18ZM12 9C10.3455 9 9 10.3455 9 12C9 13.6545 10.3455 15 12 15C13.6545 15 15 13.6545 15 12C15 10.3455 13.6545 9 12 9Z"
                        fill="white"
                      />
                      <path
                        d="M18 24H6C2.916 24 0 21.084 0 18V6C0 2.916 2.916 0 6 0H18C21.084 0 24 2.916 24 6V18C24 21.084 21.084 24 18 24ZM6 3C4.5975 3 3 4.5975 3 6V18C3 19.4295 4.5705 21 6 21H18C19.4025 21 21 19.4025 21 18V6C21 4.5975 19.4025 3 18 3H6Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M22.95 0H1.05C0.45 0 0 0.45 0 1.05V23.1C0 23.55 0.45 24 1.05 24H23.1C23.7 24 24.15 23.55 24.15 22.95V1.05C24 0.45 23.55 0 22.95 0ZM7.05 20.4H3.6V9H7.2V20.4H7.05ZM5.4 7.5C4.2 7.5 3.3 6.45 3.3 5.4C3.3 4.2 4.2 3.3 5.4 3.3C6.6 3.3 7.5 4.2 7.5 5.4C7.35 6.45 6.45 7.5 5.4 7.5ZM20.4 20.4H16.8V14.85C16.8 13.5 16.8 11.85 15 11.85C13.2 11.85 12.9 13.35 12.9 14.85V20.55H9.3V9H12.75V10.5C13.2 9.6 14.4 8.7 16.05 8.7C19.65 8.7 20.25 11.1 20.25 14.1V20.4H20.4Z"
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
                </div>
              </div>
              <a className="logo">
                <img src="logo.svg" alt="" />
              </a>{" "}
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

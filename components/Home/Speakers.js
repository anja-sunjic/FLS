import Link from "next/link";
import Hexagon from "react-hexagon";

export default function Speakers() {
  return (
    <>
      <section className="section speakers" id="speakers" name="speakers">
        <div className="container">
          <div className="hex-decor">
            <img src="/hex2.svg" alt="" />
          </div>
          <h2>Speakers</h2>
          <div className="columns is-multiline">
            <div className="column is-6">
              <div className="inner">
                <div className="columns is-mobile is-vcentered">
                  <div className="column is-narrow">
                    <div href="" className="speaker-img">
                      <img src="./Admir.jpg" alt="" className="grayscale" />
                    </div>
                  </div>
                  <div className="column is-8">
                    <div className="speaker">
                      <p className="name">Admir Masic</p>
                      <p className="title">
                        Career Development Professor in the Department of Civil
                        and Environmental Engineering at MIT
                      </p>
                      <a
                        href="https://www.linkedin.com/in/admirmasic/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.95 0H1.05C0.45 0 0 0.45 0 1.05V23.1C0 23.55 0.45 24 1.05 24H23.1C23.7 24 24.15 23.55 24.15 22.95V1.05C24 0.45 23.55 0 22.95 0ZM7.05 20.4H3.6V9H7.2V20.4H7.05ZM5.4 7.5C4.2 7.5 3.3 6.45 3.3 5.4C3.3 4.2 4.2 3.3 5.4 3.3C6.6 3.3 7.5 4.2 7.5 5.4C7.35 6.45 6.45 7.5 5.4 7.5ZM20.4 20.4H16.8V14.85C16.8 13.5 16.8 11.85 15 11.85C13.2 11.85 12.9 13.35 12.9 14.85V20.55H9.3V9H12.75V10.5C13.2 9.6 14.4 8.7 16.05 8.7C19.65 8.7 20.25 11.1 20.25 14.1V20.4H20.4Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-6">
              <div className="inner">
                <div className="columns is-mobile is-vcentered">
                  <div className="column is-narrow">
                    <div href="" className="speaker-img">
                      <img src="./zinka.jpg" alt="" className="grayscale" />
                    </div>
                  </div>
                  <div className="column is-8">
                    <div className="speaker">
                      <p className="name">Zinka Bejtic</p>
                      <p className="title">
                        Professor, Head of Department of Art and Design at
                        American University of Sharjah
                      </p>
                      <a
                        href="https://www.linkedin.com/in/zinkabejtic/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.95 0H1.05C0.45 0 0 0.45 0 1.05V23.1C0 23.55 0.45 24 1.05 24H23.1C23.7 24 24.15 23.55 24.15 22.95V1.05C24 0.45 23.55 0 22.95 0ZM7.05 20.4H3.6V9H7.2V20.4H7.05ZM5.4 7.5C4.2 7.5 3.3 6.45 3.3 5.4C3.3 4.2 4.2 3.3 5.4 3.3C6.6 3.3 7.5 4.2 7.5 5.4C7.35 6.45 6.45 7.5 5.4 7.5ZM20.4 20.4H16.8V14.85C16.8 13.5 16.8 11.85 15 11.85C13.2 11.85 12.9 13.35 12.9 14.85V20.55H9.3V9H12.75V10.5C13.2 9.6 14.4 8.7 16.05 8.7C19.65 8.7 20.25 11.1 20.25 14.1V20.4H20.4Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="inner">
                <div className="columns is-mobile is-vcentered">
                  <div className="column is-narrow">
                    <div href="" className="speaker-img">
                      <img src="./Fele.jpg" alt="" className="grayscale" />
                    </div>
                  </div>
                  <div className="column is-8">
                    <div className="speaker">
                      <p className="name"> Fedja Delalic </p>
                      <p className="title">
                        Manager of Games Technology and Energy at International
                        Olympic Committee – IOC
                      </p>
                      <a
                        href="https://www.linkedin.com/in/fedjadelalic/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.95 0H1.05C0.45 0 0 0.45 0 1.05V23.1C0 23.55 0.45 24 1.05 24H23.1C23.7 24 24.15 23.55 24.15 22.95V1.05C24 0.45 23.55 0 22.95 0ZM7.05 20.4H3.6V9H7.2V20.4H7.05ZM5.4 7.5C4.2 7.5 3.3 6.45 3.3 5.4C3.3 4.2 4.2 3.3 5.4 3.3C6.6 3.3 7.5 4.2 7.5 5.4C7.35 6.45 6.45 7.5 5.4 7.5ZM20.4 20.4H16.8V14.85C16.8 13.5 16.8 11.85 15 11.85C13.2 11.85 12.9 13.35 12.9 14.85V20.55H9.3V9H12.75V10.5C13.2 9.6 14.4 8.7 16.05 8.7C19.65 8.7 20.25 11.1 20.25 14.1V20.4H20.4Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="inner">
                <div className="columns is-mobile is-vcentered">
                  <div className="column is-narrow">
                    <div href="" className="speaker-img">
                      <img
                        src="./MarioBarosevcic.jpg"
                        alt=""
                        className="grayscale"
                      />
                    </div>
                  </div>
                  <div className="column is-8">
                    <div className="speaker">
                      <p className="name">Mario Barosevcic</p>
                      <p className="title">Principal at Emerge Education</p>
                      <a
                        href="https://www.linkedin.com/in/mario-barosevcic/"
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
                            d="M22.95 0H1.05C0.45 0 0 0.45 0 1.05V23.1C0 23.55 0.45 24 1.05 24H23.1C23.7 24 24.15 23.55 24.15 22.95V1.05C24 0.45 23.55 0 22.95 0ZM7.05 20.4H3.6V9H7.2V20.4H7.05ZM5.4 7.5C4.2 7.5 3.3 6.45 3.3 5.4C3.3 4.2 4.2 3.3 5.4 3.3C6.6 3.3 7.5 4.2 7.5 5.4C7.35 6.45 6.45 7.5 5.4 7.5ZM20.4 20.4H16.8V14.85C16.8 13.5 16.8 11.85 15 11.85C13.2 11.85 12.9 13.35 12.9 14.85V20.55H9.3V9H12.75V10.5C13.2 9.6 14.4 8.7 16.05 8.7C19.65 8.7 20.25 11.1 20.25 14.1V20.4H20.4Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="inner">
                <div className="columns is-mobile is-vcentered">
                  <div className="column is-narrow">
                    <div href="" className="speaker-img">
                      <img
                        src="./MelitaKurtovic.jpg"
                        alt=""
                        className="grayscale"
                      />
                    </div>
                  </div>
                  <div className="column is-8">
                    <div className="speaker">
                      <p className="name">Melita Kurtovic</p>
                      <p className="title">
                        Talent Operations Analyst at Netflix
                      </p>
                      <a
                        href="https://www.linkedin.com/in/melita-kurtovic-5762b6ab/"
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
                            d="M22.95 0H1.05C0.45 0 0 0.45 0 1.05V23.1C0 23.55 0.45 24 1.05 24H23.1C23.7 24 24.15 23.55 24.15 22.95V1.05C24 0.45 23.55 0 22.95 0ZM7.05 20.4H3.6V9H7.2V20.4H7.05ZM5.4 7.5C4.2 7.5 3.3 6.45 3.3 5.4C3.3 4.2 4.2 3.3 5.4 3.3C6.6 3.3 7.5 4.2 7.5 5.4C7.35 6.45 6.45 7.5 5.4 7.5ZM20.4 20.4H16.8V14.85C16.8 13.5 16.8 11.85 15 11.85C13.2 11.85 12.9 13.35 12.9 14.85V20.55H9.3V9H12.75V10.5C13.2 9.6 14.4 8.7 16.05 8.7C19.65 8.7 20.25 11.1 20.25 14.1V20.4H20.4Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="inner">
                <div className="columns is-mobile is-vcentered">
                  <div className="column is-narrow">
                    <div href="" className="speaker-img">
                      <img
                        src="./Amra-square.jpg"
                        alt=""
                        className="grayscale"
                      />
                    </div>
                  </div>
                  <div className="column is-8">
                    <div className="speaker">
                      <p className="name">Amra Ibric</p>
                      <p className="title">
                        Market & Technology Analyst at Marinomed Biotech AG
                      </p>
                      <a
                        href="https://www.linkedin.com/in/amra-ibric-15a8a71b5/"
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
                            d="M22.95 0H1.05C0.45 0 0 0.45 0 1.05V23.1C0 23.55 0.45 24 1.05 24H23.1C23.7 24 24.15 23.55 24.15 22.95V1.05C24 0.45 23.55 0 22.95 0ZM7.05 20.4H3.6V9H7.2V20.4H7.05ZM5.4 7.5C4.2 7.5 3.3 6.45 3.3 5.4C3.3 4.2 4.2 3.3 5.4 3.3C6.6 3.3 7.5 4.2 7.5 5.4C7.35 6.45 6.45 7.5 5.4 7.5ZM20.4 20.4H16.8V14.85C16.8 13.5 16.8 11.85 15 11.85C13.2 11.85 12.9 13.35 12.9 14.85V20.55H9.3V9H12.75V10.5C13.2 9.6 14.4 8.7 16.05 8.7C19.65 8.7 20.25 11.1 20.25 14.1V20.4H20.4Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="inner">
                <div className="columns is-mobile is-vcentered">
                  <div className="column is-narrow">
                    <div href="" className="speaker-img">
                      <img
                        src="/vernisa.jpeg"
                        alt=""
                        className="grayscale anon"
                      />
                    </div>
                  </div>
                  <div className="column is-8">
                    <div className="speaker">
                      <p className="name anon">More Speakers coming soon...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

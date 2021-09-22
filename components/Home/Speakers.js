import LinkedIn from "../partials/LinkedIn";

export default function Speakers() {
  return (
    <>
      <section className="section speakers" id="speakers" name="speakers">
        <div className="container">
          <div className="hex-decor">
            <img src="/hex2.svg" alt="" />
          </div>
          <div className="hex-decor-2 is-hidden-desktop">
            <img src="/hex.svg" alt="" />
          </div>
          <div className="title-line">
            <h2>Speakers</h2>
            <div className="line-decor is-hidden-touch">
              <img src="/dots.svg" alt="" />
            </div>
          </div>
          <div className="columns is-multiline">
            {/* zinka */}
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
                      <LinkedIn url="https://www.linkedin.com/in/zinkabejtic/" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* admir */}
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
                        Associate Professor of Civil and Environmental
                        Engineering at MIT
                      </p>
                      <LinkedIn url="https://www.linkedin.com/in/admirmasic/" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* fele */}
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
                      <LinkedIn url="https://www.linkedin.com/in/fedjadelalic/" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* mario */}
            <div className="column is-6">
              <div className="inner">
                <div className="columns is-mobile is-vcentered">
                  <div className="column is-narrow">
                    <div href="" className="speaker-img">
                      <img src="./Mario.jpg" alt="" className="grayscale" />
                    </div>
                  </div>
                  <div className="column is-8">
                    <div className="speaker">
                      <p className="name">Mario Barosevcic</p>
                      <p className="title">Principal at Emerge Education</p>
                      <LinkedIn url="https://www.linkedin.com/in/mario-barosevcic/" />
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
                      <LinkedIn url="https://www.linkedin.com/in/melita-kurtovic-5762b6ab/" />
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
                      <LinkedIn url="https://www.linkedin.com/in/amra-ibric-15a8a71b5/" />
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

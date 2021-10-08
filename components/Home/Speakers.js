import LinkedIn from "../partials/LinkedIn";
import { speakers } from "../../data/speakers";

import Speaker from "./Speaker";
export default function Speakers() {
  console.log(speakers);
  return (
    <>
      <section className="section speakers" id="speakers" name="speakers">
        <div className="container">
          <div className="hex-decor">
            <img src="/hex2.svg" alt="" />
          </div>
          <div className="hex-decor-2 is-hidden-desktop figure is-1-by-1">
            <img src="/hex.svg" alt="" />
          </div>
          <div className="title-line">
            <h2>Speakers</h2>
            <div className="line-decor is-hidden-touch">
              <img src="/dots.svg" alt="" />
            </div>
          </div>
          <div className="columns is-multiline">
            <Speaker
              img="/zinka.jpg"
              name="Zinka Bejtic"
              title="Professor, Head of Department of Art and Design at American University of Sharjah"
              li="https://www.linkedin.com/in/zinkabejtic/"
            />
            <Speaker
              img="/Admir.jpg"
              name="Admir Masic"
              title="Associate Professor of Civil and Environmental Engineering at MIT"
              li="https://www.linkedin.com/in/admirmasic/"
            />
            <Speaker
              img="/Fele.jpg"
              name="Fedja Delalic"
              title="Manager of Games Technology and Energy at International Olympic Committee – IOC"
              li="https://www.linkedin.com/in/fedjadelalic/"
            />
            <Speaker
              img="/Mario.jpg"
              name="Mario Barosevcic"
              title="Principal at Emerge Education"
              li="https://www.linkedin.com/in/mario-barosevcic/"
            />
            <Speaker
              img="/MelitaKurtovic.jpg"
              name="Melita Kurtovic"
              title="Talent Operations Analyst at Netflix"
              li="https://www.linkedin.com/in/melita-kurtovic-5762b6ab/"
            />
            <Speaker
              img="/Amra-square.jpg"
              name="Amra Ibric"
              title=" Market & Technology Analyst at Marinomed Biotech AG"
              li="https://www.linkedin.com/in/amra-ibric-15a8a71b5/"
            />
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

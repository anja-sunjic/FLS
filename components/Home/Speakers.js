import LinkedIn from "../partials/LinkedIn";
import { speakers } from "../../data/speakers";
import Link from "next/link";

import Speaker from "./Speaker";
export default function Speakers() {
  return (
    <>
      <section className="section speakers" id="speakers" name="speakers">
        <div className="container">
          <div className="hex-decor">
            <img src="/hex2.svg" alt="Futures Leaders Summit" />
          </div>
          <div className="hex-decor-2 is-hidden-desktop figure is-1-by-1">
            <img src="/hex.svg" alt="Futures Leaders Summit" />
          </div>
          <div className="title-line">
            <h2>Speakers</h2>
            <div className="line-decor is-hidden-touch">
              <img src="/dots.svg" alt="Futures Leaders Summit" />
            </div>
          </div>
          <div className="columns is-multiline">
            <Speaker
              img="/speakers/Miralem.jpg"
              name="Miralem Salihovic"
              title="Head of Solutions and Technology at Apple"
              li="https://www.linkedin.com/in/miralemsalihovic/"
              slug="miralem-salihovic"
            />
            <Speaker
              img="/speakers/zinka.jpg"
              name="Zinka Bejtic"
              title="Professor, Head of Department of Art and Design at American University of Sharjah"
              li="https://www.linkedin.com/in/zinkabejtic/"
              slug="zinka-bejtic"
            />
            <Speaker
              img="/speakers/MirzaCifric.png"
              name="Mirza Cifric"
              title="CEO & Co-Founder at Veritas"
              li="https://www.linkedin.com/in/mcifric/"
              slug="mirza-cifric"
            />
            <Speaker
              img="/speakers/Admir.jpg"
              name="Admir Masic"
              title="Associate Professor of Civil and Environmental Engineering at MIT"
              li="https://www.linkedin.com/in/admirmasic/"
              slug="admir-masic"
            />
            <Speaker
              img="/speakers/Fele.jpg"
              name="Fedja Delalic"
              title="Manager of Games Technology and Energy at International Olympic Committee – IOC"
              li="https://www.linkedin.com/in/fedjadelalic/"
              slug="fedja-delalic"
            />
            <Speaker
              img="/speakers/Selma.jpg"
              name="Selma Zilic"
              title="R&D Cylindrical Production Manager at Northvolt"
              li="https://www.linkedin.com/in/selma-zilic-9a8b3a46/?originalSubdomain=se"
              slug="selma-zilic"
            />
            <Speaker
              img="/speakers/Mario.jpg"
              name="Mario Barosevcic"
              title="Principal at Emerge Education"
              li="https://www.linkedin.com/in/mario-barosevcic/"
              slug="mario-barosevcic"
            />
            <Speaker
              img="/speakers/MelitaKurtovic.jpg"
              name="Melita Kurtovic"
              title="Talent Operations Analyst at Netflix"
              li="https://www.linkedin.com/in/melita-kurtovic-5762b6ab/"
              slug="melita-kurtovic"
            />
            <div className="column btn">
              <Link href="speakers">
                <a className="contact-button">
                  <span>View All Speakers</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import MetaData from "../components/partials/seo-meta";
import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import Speakers from "../components/Home/Speakers";
import Partners from "../components/Home/Partners";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";
import Decor from "../components/partials/Decor";

export default function Home() {
  return (
    <>
      <MetaData
        path="/"
        title="Home"
        description="Futures Leaders Summit (FLS) gathers future STEM leaders from
                  Bosnia and Herzegovina. By establishing an event that will
                  annually gather prospective change makers in the field of
                  STEM, we aim to create a strong network that will change the
                  way we perceive the industry and the future of our
                  country's development."
        image="/share.png"
      />
      <div className="_main home">
        <h1 className="is-hidden">Futures Leaders Summit</h1>
        <Header />
        <Hero />
        <About />
        <Speakers />
        <Partners />
        <Decor />
      </div>
      <Footer />
    </>
  );
}

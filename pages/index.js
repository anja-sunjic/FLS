import MetaData from "../components/partials/seo-meta";
import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import Speakers from "../components/Home/Speakers";
import Partners from "../components/Home/Partners";
import Footer from "../components/Home/Footer";

export default function Home() {
  return (
    <>
      <MetaData
        path="/"
        title="Futures Leaders Summit"
        description=""
        image=""
      />
      <Hero />
      <About />
      <Speakers />
      <Partners />
      <Footer />
    </>
  );
}

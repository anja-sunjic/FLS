import MetaData from "../components/partials/seo-meta";
import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import Speakers from "../components/Home/Speakers";
import Partners from "../components/Home/Partners";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";
import Decor from "../components/Home/Decor";

export default function Home() {
  return (
    <>
      <MetaData
        path="/"
        title="Futures Leaders Summit"
        description=""
        image=""
      />
      <div className="_main">
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

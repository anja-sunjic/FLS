import MetaData from "../components/partials/seo-meta";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";
import Decor from "../components/partials/Decor";
import Intro from "../components/About/Intro";
import Purpose from "../components/About/Purpose";
import Story from "../components/About/Story";

export default function Home() {
  return (
    <>
      <MetaData path="/about" title="About" description="" image="/share.png" />
      <div className="_main">
        <Header />
        <Intro />
        <Purpose />
        <Story />
        <Decor />
      </div>
      <Footer />
    </>
  );
}

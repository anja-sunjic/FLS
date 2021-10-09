import MetaData from "../../components/partials/seo-meta";
import Footer from "../../components/partials/Footer";
import Header from "../../components/partials/Header";
import Decor from "../../components/partials/Decor";
import Intro from "../../components/Speakers/Intro";
import Speakers from "../../components/Speakers/Speakers";
export default function SpeakersAll() {
  return (
    <>
      <MetaData
        path="/speakers"
        title="Speakers"
        description=""
        image="/share.png"
      />
      <div className="_main speakers">
        <Header />
        <Intro />
        <Speakers />
        <Decor />
      </div>
      <Footer />
    </>
  );
}

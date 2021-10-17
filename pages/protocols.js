import MetaData from "../components/partials/seo-meta";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";
import Decor from "../components/partials/Decor";
import Intro from "../components/Protocols/Intro";
import Rules from "../components/Protocols/Rules";
import Ending from "../components/Protocols/Ending";
export default function Protocols() {
  return (
    <>
      <MetaData
        path="/protocols"
        title="Health and Safety Protocols"
        description=""
        image="/share.png"
      />
      <div className="_main">
        <Header />
        <Intro />
        <Rules />
        <Ending />
        <Decor />
      </div>
      <Footer />
    </>
  );
}

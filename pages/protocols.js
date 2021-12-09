import MetaData from "../components/partials/seo-meta";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";
import Decor from "../components/partials/Decor";
import Intro from "../components/Protocols/Intro";
import Rules from "../components/Protocols/Rules";
import Ending from "../components/Protocols/Ending";
import HealthPartners from "../components/Protocols/HealthPartners";
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
        <h1 className="is-hidden">FLS Health and Safety Protocols</h1>
        <Header />
        <Intro />
        <Rules />
        <Ending />

        <HealthPartners title="HEALTH AND SAFETY PROTOCOL PARTNERS" />
        <Decor />
      </div>
      <Footer />
    </>
  );
}

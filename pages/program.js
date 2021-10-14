import MetaData from "../components/partials/seo-meta";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";
import Decor from "../components/partials/Decor";
import Intro from "../components/Program/Intro";
import ProgramTabs from "../components/Program/ProgramTabs";

export default function Program() {
  return (
    <>
      <MetaData
        path="/program"
        title="Program"
        description=""
        image="/share.png"
      />
      <div className="_main program">
        <Header />
        <Intro />
        <ProgramTabs />
        <Decor />
      </div>
      <Footer />
    </>
  );
}

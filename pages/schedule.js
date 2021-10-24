import MetaData from "../components/partials/seo-meta";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";
import Decor from "../components/partials/Decor";
import Intro from "../components/Program/Intro";
import ProgramTabs from "../components/Program/ProgramTabs";

export default function Schedule() {
  return (
    <>
      <MetaData
        path="/schedule"
        title="Schedule"
        description=""
        image="/share.png"
      />
      <div className="_main program">
        <h1 className="is-hidden">FLS Schedule</h1>
        <Header />
        <Intro />
        <ProgramTabs />
        <Decor />
      </div>
      <Footer />
    </>
  );
}

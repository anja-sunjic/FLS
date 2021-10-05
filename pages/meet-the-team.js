import MetaData from "../components/partials/seo-meta";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";
import Decor from "../components/partials/Decor";
import Intro from "../components/Team/Intro";
export default function Team() {
  return (
    <>
      <MetaData
        path="/meet-the-team"
        title="Meet the team"
        description=""
        image="/share.png"
      />
      <div className="_main">
        <Header />
        <Intro />
        <Decor />
      </div>
      <Footer />
    </>
  );
}

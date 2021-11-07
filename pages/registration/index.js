import MetaData from "../../components/partials/seo-meta";
import Footer from "../../components/partials/Footer";
import Header from "../../components/partials/Header";
import Decor from "../../components/partials/Decor";
import Intro from "../../components/Registration/Intro";
import Purpose from "../../components/Registration/Purpose";
import Ending from "../../components/Registration/Ending";

export default function Registration() {
  return (
    <>
      <MetaData
        path="/registration"
        title="Registration"
        description=""
        image="/share.png"
      />
      <div className="_main">
        <h1 className="is-hidden"></h1>
        <Header />
        <Intro />
        <Purpose />
        <Ending />
        <Decor />
      </div>
      <Footer />
    </>
  );
}

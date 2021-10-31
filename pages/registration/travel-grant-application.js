import MetaData from "../../components/partials/seo-meta";
import Footer from "../../components/partials/Footer";
import Header from "../../components/partials/Header";
import Decor from "../../components/partials/Decor";
import FormContainer from "../../components/TravelGrant/FormContainer";

export default function TravelGrant() {
  return (
    <>
      <MetaData
        path="/registration/travel-grant-application"
        title="Travel Grant Application"
        description=""
        image="/share.png"
      />
      <div className="_main">
        <h1 className="is-hidden">Travel Grant</h1>
        <Header />
        <FormContainer />
        <Decor />
      </div>
      <Footer />
    </>
  );
}

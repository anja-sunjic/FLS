import MetaData from "../components/partials/seo-meta";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";
import Decor from "../components/partials/Decor";
import FormContainer from "../components/Contact/FormContainer";

export default function Home() {
  return (
    <>
      <MetaData
        path="/contact"
        title="Contact Us"
        description=""
        image="/share.png"
      />
      <div className="_main">
        <Header />
        <FormContainer />
        <Decor />
      </div>
      <Footer />
    </>
  );
}

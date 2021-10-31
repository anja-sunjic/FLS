import MetaData from "../../components/partials/seo-meta";
import Footer from "../../components/partials/Footer";
import Header from "../../components/partials/Header";
import Decor from "../../components/partials/Decor";
import FormContainer from "../../components/Register/FormContainer";

export default function Register() {
  return (
    <>
      <MetaData
        path="/registration/register"
        title="Registration Form"
        description=""
        image="/share.png"
      />
      <div className="_main">
        <h1 className="is-hidden">Registration Form FLS</h1>
        <Header />
        <FormContainer />
        <Decor />
      </div>
      <Footer />
    </>
  );
}

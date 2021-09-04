import MetaData from "../components/partials/seo-meta";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";
import FormContainer from "../components/Contact/FormContainer";

export default function Home() {
  return (
    <>
      <MetaData path="/contact" title="Contact" description="" image="" />
      <Header />
      <FormContainer />
      <Footer />
    </>
  );
}

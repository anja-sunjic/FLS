import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";
import Map from "../components/Venue/Map";
import Intro from "../components/Venue/Intro";
import Decor from "../components/partials/Decor";
import Locations from "../components/Venue/Locations";
import Parking from "../components/Venue/Parking";
import MetaData from "../components/partials/seo-meta";
import TelecomPartner from "../components/Venue/TelecomPartner";

export default function Venue() {
  return (
    <>
      <MetaData path="/venue" title="Venue" description="" image="/share.png" />
      <div className="_main">
        <h1 className="is-hidden">About Futures Leaders Summit</h1>
        <Header />
        <Map />
        <Intro />
        <Locations />
        <Parking />
        <TelecomPartner title="TELECOMMUNICATIONS PARTNER" />
        <Decor />
      </div>
      <Footer />
    </>
  );
}

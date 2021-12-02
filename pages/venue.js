import Footer from '../components/partials/Footer';
import Header from '../components/partials/Header';
import Map from '../components/Venue/Map';
import Decor from "../components/partials/Decor";
import Locations from "../components/Venue/Locations";
import Parking from "../components/Venue/Parking";

export default function Venue() {
    return (
        <>
            <div className='_main'>
                <h1 className='is-hidden'>About Futures Leaders Summit</h1>
                <Header />
                <Map />
                <Locations />
                <Parking />
                <Decor />
            </div>
            <Footer />
        </>
    );
}

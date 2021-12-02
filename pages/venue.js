import Footer from '../components/partials/Footer';
import Header from '../components/partials/Header';
import Map from '../components/Venue/Map';
import Decor from "../components/partials/Decor";

export default function Venue() {
    return (
        <>
            <div className='_main'>
                <h1 className='is-hidden'>About Futures Leaders Summit</h1>
                <Header />
                <Map />
                <Decor />
            </div>
            <Footer />
        </>
    );
}

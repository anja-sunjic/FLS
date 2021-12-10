import MetaData from '../components/partials/seo-meta';
import Footer from '../components/partials/Footer';
import Header from '../components/partials/Header';
import Decor from '../components/partials/Decor';
import Intro from '../components/Accommodation/Intro';
import RecommendedHotels from '../components/Accommodation/RecommendedHotels';
import RecommendedFood from "../components/Accommodation/RecommendedFood";
import RecommendedRefreshments from "../components/Accommodation/RecommendedRefreshments";

export default function Home() {
    return (
        <>
            <MetaData path='/accommodation-food-and-refreshments' title='Accommodation, Food & Refreshments' description='' image='/share.png' />
            <div className='_main speakers'>
                <h1 className='is-hidden'>Accommodation, Food & Refreshments Futures Leaders Summit</h1>
                <Header />
                <Intro />
                <RecommendedHotels />
                <RecommendedFood />
                <RecommendedRefreshments />
                <Decor />
            </div>
            <Footer />
        </>
    );
}

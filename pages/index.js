import MetaData from '../components/partials/seo-meta';
import About from '../components/Home/About';
import Hero from '../components/Home/Hero';
import Speakers from '../components/Home/Speakers';
import MoveablePartners from '../components/Home/MoveablePartners';
import Partners from '../components/Home/Partners';
import Footer from '../components/partials/Footer';
import Header from '../components/partials/Header';
import Decor from '../components/partials/Decor';
import CTAsection from '../components/partials/cta-section';
//fix
export default function Home() {
	return (
		<>
			<MetaData
				path='/'
				title='Home'
				description="Futures Leaders Summit (FLS) gathers future STEM leaders from
                  Bosnia and Herzegovina. We aim to create a strong network that will change the
                  way we perceive the industry and the future of our
                  country's development."
				image='/share.png'
			/>
			<div className='_main home'>
				<h1 className='is-hidden'>Futures Leaders Summit</h1>
				<Header />

				<Hero />
				<About />
				<CTAsection
					button='See Schedule'
					title='discover this year’s program'
					url='/schedule'
				/>
				<Speakers />
				{/*<MoveablePartners /> Uncomment this code & delete "<Partners />" if you want to have moveable track. */}
				<Partners />
				{/* <CTAsection
          button="Learn more"
          title="fls ‘21 health & safety protocols"
          url="/protocols"
        /> */}
				<CTAsection
					button='Get Tickets'
					title="Don't miss this opportunity!"
					url='/registration'
				/>
				<Decor />
			</div>
			<Footer />
		</>
	);
}

import MetaData from '../components/partials/seo-meta';
import Footer from '../components/partials/Footer';
import Header from '../components/partials/Header';
import Decor from '../components/partials/Decor';
import Intro from '../components/Sponsors/Intro';
import Partners from '../components/Sponsors/Partners';
export default function Sponsors() {
	return (
		<>
			<MetaData
				path='/sponsors-and-partners'
				title='Sponsors and Partners'
				description=''
				image='/share.png'
			/>
			<div className='_main'>
				<Header />
				<Intro />
				<Partners />
				<Decor />
			</div>
			<Footer />
		</>
	);
}

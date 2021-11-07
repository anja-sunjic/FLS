import MetaData from '../../components/partials/seo-meta';
import Footer from '../../components/partials/Footer';
import Header from '../../components/partials/Header';
import Decor from '../../components/partials/Decor';
import Intro from '../../components/Registration/Intro';
import Rules from '../../components/Protocols/Rules';
import Ending from '../../components/Registration/Ending';

export default function Registration() {
	return (
		<>
			<MetaData
				path='/registration'
				title='Join a community of future STEM leaders that are shaping their and the future Bosnia and Herzegovina!'
				description=''
				image='/share.png'
			/>
			<div className='_main'>
				<h1 className='is-hidden'></h1>
				<Header />
				<Intro />
				<Rules />
				<Ending />
				<Decor />
			</div>
			<Footer />
		</>
	);
}

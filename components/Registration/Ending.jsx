import Image from 'next/image';
import heroimg from '../../public/hero.webp';
export default function Ending() {
	return (
		<>
			<div className='intro bottom hero protocols'>
				<div className='hero-img blur'></div>
				<div className='reg_ending_container'>
					<div>
						<h1 className='discountheader'>You want a 100% discount?</h1>
						<button className='travelgrant'>Get travel grant</button>
					</div>
					<div>
						<p>
							Together with our sponsors and partners, we are giving away Travel
							Grants for promising STEM students and recent graduates coming
							from any faculty from Bosnia and Herzegovina. The worth of a
							maximum Travel Grant is 250 BAM, and it covers your Summit ticket,
							accommodation (max. three nights) and travel expenses (to and from
							Tuzla from any town in Bosnia and Herzegovina). More details about
							the grant's scalability you can find on the Travel Grant
							Registration Page. Note: Bosnia and Herzegovina Futures Foundation
							Senior Scholars and selected volunteers automatically receive the
							travel grant based on their scholarships and active engagement as
							volunteers.asdas
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

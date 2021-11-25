import Image from 'next/image';
import Team from './Tier';
import { sponsors } from '../../data/sponsors';
export default function Teams() {
	return (
		<div className='section teams'>
			<div className='container'>
				{sponsors.map((sponsor) => (
					<Team
						name={sponsor.name}
						members={sponsor.members}
						key={sponsor.name}
					/>
				))}
			</div>
		</div>
	);
}

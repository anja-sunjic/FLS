import Image from 'next/image';
import Team from './Tier';
import { sponsors } from '../../data/sponsors';
export default function Teams() {
	return (
		<div className='section teams'>
			<div className='container'>
				{sponsors.map((team) => {
					return (
						<Team name={team.name} members={team.members} key={team.name} />
					);
				})}
			</div>
		</div>
	);
}

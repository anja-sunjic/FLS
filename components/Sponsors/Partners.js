import Tier from './Tier';
import { sponsors } from '../../data/sponsors';
export default function Partners() {
	return (
		<div className='section teams'>
			<div className='container'>
				{sponsors.map(({ name, members }) => (
					<Tier name={name} members={members} key={name} />
				))}
			</div>
		</div>
	);
}

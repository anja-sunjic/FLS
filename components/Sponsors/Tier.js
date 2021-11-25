import Partner from './Partner';
export default function Tier({ members, name }) {
	return (
		<>
			<div className={`team-single`}>
				<div className='title-line'>
					<h2>{name}</h2>
					<div className='line-decor is-hidden-touch'>
						{/*eslint-disable-next-line */}
						<img src='/dots.svg' alt='Futures Leaders Summit' />
					</div>
				</div>
				<div className='members'>
					{members.map(({ img, url }) => (
						<Partner img={img} url={url} key={url} />
					))}
				</div>
			</div>
		</>
	);
}

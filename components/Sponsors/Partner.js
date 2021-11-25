import PartnerLogo from '../partials/PartnerLogo';
export default function Partner({ props, url, img }) {
	return (
		<>
			<div className='member'>
				<PartnerLogo url={url} img={img} />
			</div>
		</>
	);
}

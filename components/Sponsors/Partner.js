import PartnerLogo from '../partials/PartnerLogo';
export default function Partner({ url, img }) {
	return (
		<>
			<div>
				<PartnerLogo url={url} img={img} />
			</div>
		</>
	);
}

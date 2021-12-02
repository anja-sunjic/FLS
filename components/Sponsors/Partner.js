import PartnerLogo from '../partials/PartnerLogo';
export default function Partner({ url, img, name }) {
	return (
		<>
			<div>
				<PartnerLogo url={url} img={img} name={name} />
			</div>
		</>
	);
}

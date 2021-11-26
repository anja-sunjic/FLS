import PartnerLogo from '../partials/PartnerLogo';
export default function Partner({ url, img, name }) {
	return (
		<>
			<div style={{ margin: '1rem', verticalAlign: 'middle' }}>
				<PartnerLogo url={url} img={img} name={name} />
			</div>
		</>
	);
}

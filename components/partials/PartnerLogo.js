/* eslint-disable @next/next/no-img-element */
import { Image } from 'next/dist/client/image';
export default function PartnerLogo({ url, img, size, name }) {
	function SortOfDynamicStyling() {
		if (name === 'ieeebh') {
			return (
				<img
					src={img}
					alt='Futures Leaders Summit'
					style={{ height: '10rem', marginTop: '-3rem' }}
				/>
			);
		} else if (name === 'ZenDev') {
			return (
				<img
					src={img}
					alt='Futures Leaders Summit'
					style={{ height: '3rem', margin: '0' }}
				/>
			);
		} else if (name === 'Softhouse') {
			return (
				<img
					src={img}
					alt='Futures Leaders Summit'
					style={{ height: '3.5rem' }}
				/>
			);
		} else if (name === 'Tehnograd Company') {
			return (
				<img
					src={img}
					alt='Futures Leaders Summit'
					style={{ height: '10rem' }}
				/>
			);
		} else {
			return (
				<img
					src={img}
					alt='Futures Leaders Summit'
					style={size ? { height: `${size}` } : { height: `5rem` }}
				/>
			);
		}
	}

	return (
		<a href={url} target='_blank' rel='noreferrer' className='grayscale'>
			{<SortOfDynamicStyling />}
		</a>
	);
}

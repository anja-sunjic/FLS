import { Image } from 'next/dist/client/image';
export default function PartnerLogo({ url, img, size }) {
	return (
		<a
			href={url}
			target='_blank'
			rel='noreferrer'
			className='partner-logo grayscale'
		>
			{/* eslint-disable-next-line */}
			<img
				src={img}
				alt='Futures Leaders Summit'
				style={size ? { height: `${size}` } : { height: `4rem` }}
			/>
		</a>
	);
}

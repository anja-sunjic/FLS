/* eslint-disable @next/next/no-img-element */

export default function PartnerLogo({ url, img, size, name }) {
	console.log(name);
	function SortOfDynamicStyling() {
		switch (name) {
			case 'DKR':
				return <img src={img} alt='FLS' style={{ height: '4rem' }} />;
			case 'Porsche Bosnia and Herzegovina':
				return <img src={img} alt='FLS' style={{ height: '4rem' }} />;
			case 'EESTEC LC Tuzla':
				return (
					<img
						src={img}
						alt='FLS'
						style={{ height: '8rem', marginTop: '-2rem' }}
					/>
				);
			case 'ieeebh':
				return (
					<img
						src={img}
						alt='Futures Leaders Summit'
						style={{ height: '10rem', marginTop: '-3rem' }}
					/>
				);
			case 'ZenDev':
				return (
					<img
						src={img}
						alt='Futures Leaders Summit'
						style={{ height: '3rem', margin: '0' }}
					/>
				);
			case 'Softhouse':
				return (
					<img
						src={img}
						alt='Futures Leaders Summit'
						style={{ height: '3.5rem' }}
					/>
				);
			case 'Tehnograd Company':
				return (
					<img
						src={img}
						alt='Futures Leaders Summit'
						style={{ height: '10rem' }}
					/>
				);
			case 'MPTK':
				return (
					<img
						src={img}
						alt='Futures Leaders Summit'
						style={{ height: '7rem' }}
					/>
				);
			case 'Radio Kameleon':
				return (
					<img
						src={img}
						alt='Futures Leaders Summit'
						style={{ height: '4.5rem' }}
					/>
				);
			case 'Bingo D.O.O':
				return (
					<img
						src={img}
						alt='Futures Leaders Summit'
						style={{ height: '4.5rem', marginTop: '2rem' }}
					/>
				);
			case 'Bingo D.O.O':
				return (
					<img
						src={img}
						alt='Futures Leaders Summit'
						style={{ height: '4.5rem', marginTop: '2rem' }}
					/>
				);
			case 'Mistral':
				return (
					<img
						src={img}
						alt='Futures Leaders Summit'
						style={{ height: '12rem' }}
					/>
				);
			case 'City Gecko':
				return (
					<img
						src={img}
						alt='Futures Leaders Summit'
						style={{ height: '4rem' }}
					/>
				);

			default:
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

import React from 'react';
import HorizontalScroll from 'react-horizontal-scrolling';

const partnerImages = [
	{ url: '/partners/BHFF.png' },
	{ url: '/partners/htec.png' },
	{ url: '/partners/DKR.png' },
	{ url: '/partners/PorscheBHallwhite.png' },
	{ url: '/partners/Mistral.png' },
	{ url: '/partners/TehnogradCompany.png' },
	{ url: '/partners/bhing.png' },
	{ url: '/partners/BWBH.png' },
	{ url: '/partners/IEEE.png' },
	{ url: '/partners/IEEEBH.png' },
	{ url: '/partners/Softhouse.png' },
	{ url: '/partners/LiderLab.png' },
	{ url: '/partners/untz.png' },
];

export default function Partners() {
	return (
		<div>
			<HorizontalScroll>
				{partnerImages.map((item, index) => (
					<img
						style={{
							height: '15rem',
							verticalAlign: 'center',
							margin: '10rem',
						}}
						src={item.url}
						key={index}
						alt={item.url}
					/>
				))}
			</HorizontalScroll>
		</div>
	);
}

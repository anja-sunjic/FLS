import React from 'react';

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
	{ url: '/partners/IPIAkademija.png' },
];

export default function MoveablePartners() {
	return (
		<>
			<img
				className='sponsors_decor line-decor is-hidden-touch'
				src='/dots.svg'
				alt='decor_lines'
			/>
			<h3 className='sponsors_and_partners'>Our Sponsors & Partners</h3>

			<div className='slider_wrapper'>
				{partnerImages.map((item, index) => (
					<img
						className='slider_item slideranim'
						src={item.url}
						key={index}
						alt={item.url}
					/>
				))}
			</div>
			<img
				className='sponsors_decor line-decor is-hidden-touch'
				src='/dots.svg'
				alt='decor_lines'
			/>
		</>
	);
}

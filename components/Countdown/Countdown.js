import React from 'react';
import Countdown from 'react-countdown';

const CountdownComponent = () => {
	const Completionist = () => <div>We are online and ready to go!</div>;

	const now = new Date().getTime();
	const countDate = new Date('December 16, 2021 00:00:00').getTime();

	return (
		<div className='styledcountdowncontainer'>
			<h1 className='headingstyle'>FLS&#39;21 OPENING IN</h1>
			<div className='styledcountdown'>
				<Countdown date={countDate} />
			</div>
		</div>
	);
};

export default CountdownComponent;

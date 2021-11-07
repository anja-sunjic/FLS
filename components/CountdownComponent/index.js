import React from 'react';
import Countdown from 'react-countdown';

const CountdownComponent = () => {
	const Completionist = () => <div>We are online and ready to go!</div>;

	return (
		<div className='styledcountdowncontainer'>
			<h1 className='headingstyle'>Opening in</h1>
			<div className='styledcountdown'>
				<Countdown date={Date.now() + 1639522800} />
			</div>
			<h2 className='styleheader'>days hours mintues seconds</h2>
		</div>
	);
};

export default CountdownComponent;

import React from 'react';
import Countdown from 'react-countdown';
import {
	StyledCountDownContainer,
	StyledHeader,
	Heading,
	StyledCountDown,
	StyledComplete,
} from './CountdownStyle';

const CountdownComponent = () => {
	const Completionist = () => (
		<StyledComplete>We are online and ready to go!</StyledComplete>
	);

	return (
		<StyledCountDownContainer>
			<Heading>Opening in</Heading>
			<StyledCountDown>
				<Countdown date={Date.now() + 1639522800} />
			</StyledCountDown>
			<StyledHeader>days hours mintues seconds</StyledHeader>
		</StyledCountDownContainer>
	);
};

export default CountdownComponent;

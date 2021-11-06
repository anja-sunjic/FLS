import React from 'react';
import Countdown from 'react-countdown';
import {
	StyledCountDownContainer,
	StyledHeader,
	Heading,
	StyledCountDown,
} from './CountdownStyle';

const CountdownComponent = () => {
	return (
		<StyledCountDownContainer>
			<Heading>Opening in</Heading>
			<StyledCountDown>
				<Countdown date={Date.now() + 1000000} />
			</StyledCountDown>
			<StyledHeader>days hours mintues seconds</StyledHeader>
		</StyledCountDownContainer>
	);
};

export default CountdownComponent;

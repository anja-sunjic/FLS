import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
        * {
            
            font-family: Anton, montserratt !important;
            // CSS you want global. 
        }
    
`;

export const StyledCountDownContainer = styled.div`
	justify-content: center;
	text-align: center;
`;

export const StyledHeader = styled.h1`
	padding: 0;
	font-weight: bolder;
	font-size: 2rem;
	color: #efe200;
	text-align: center;
	justify-content: center;
	text-transform: uppercase;
	word-spacing: 5rem;
`;

export const Heading = styled.h1`
	margin: 5rem 0 0 0;
	font-weight: bold;
	font-size: 3rem;
	color: white;
	text-align: center;
	justify-content: center;
	text-transform: uppercase;
`;

export const StyledComplete = styled.h1`
	margin: 5rem;
	font-size: 5rem;
	color: white;
	text-align: center;
	justify-content: center;
	text-transform: uppercase;
`;

export const StyledCountDown = styled.h1`
	font-family: Anton;
	font-size: 12rem;

	color: white;
`;

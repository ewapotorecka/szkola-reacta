import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	border: 1px solid #3c40c6;
	border-radius: 4px;
	color: #3c40c6;
	background-color: white;
	padding: 20px;
	width: fit-content;
	height: fit-content;
	cursor: pointer;
	font-size: 1em;
	&:hover {
		background-color: #3c40c6;
		color: white;
	}
`;


function Button( props ) {
	return (
		<StyledButton onClick={ props.onClick }>{ props.children }</StyledButton>
	);
}

export default Button;
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	border: 1px solid #B53471;
	border-radius: 4px;
	color: #B53471;
	background-color: white;
	padding: 10px;
	width: fit-content;
	height: fit-content;
	cursor: pointer;
	font-size: 1em;
	&:hover {
		background-color: #B53471;
		color: white;
	}
`;


function Button( props ) {
	return (
		<StyledButton onClick={ props.onClick }>{ props.children }</StyledButton>
	);
}

export default Button;
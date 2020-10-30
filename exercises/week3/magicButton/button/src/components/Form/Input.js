import React from 'react';

import colorPalette from '../../colors';

function Input( props ) {
	const { color, bgColor, borderSize, borderRadius, borderColor } = props;
	const styles = {
		backgroundColor: `${colorPalette[`${bgColor}`]}`,
		color: `${colorPalette[`${color}`]}`,
		border: `${borderSize} solid ${colorPalette[`${borderColor}`]}`,
		borderRadius,
		margin: 20
	}

	return(
		<input style={styles}></input>
	)
}

Input.defaultProps = {
	color: 'spiroDiscoBall',
	bgColor: 'endingNavyBlue',
	borderSize: 1,
	borderRadius: 3,
	borderColor: 'honeyGlow'
}

export {Input};
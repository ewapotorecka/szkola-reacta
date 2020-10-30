import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBacterium, faBrain, faCarrot, faDog, faJedi } from '@fortawesome/free-solid-svg-icons'

import colorPalette from '../../colors';


library.add( faBacterium, faBrain, faCarrot, faDog, faJedi );

function Button( props ) {
	const { iconName, label, bgColor, color } = props;
	const styles = {
		backgroundColor: `${colorPalette[`${bgColor}`]}`,
		color: `${colorPalette[`${color}`]}`,
		margin: 20,
		fontSize: 30,
		borderRadius: 5,
		cursor: 'pointer'
	}
	const icon = <FontAwesomeIcon icon={iconName} />

	return(
		<button style={ styles }>{icon} { label }</button>
	);
}

Button.defaultProps = {
	iconName: 'jedi',
	label: 'Use the force Luke',
	color: 'spiroDiscoBall',
	bgColor: 'endingNavyBlue'
}

export {Button};
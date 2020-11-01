import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faBookmark } from '@fortawesome/free-solid-svg-icons';

import Button from '../../button';

function Header( props ) {
	const { title, date } = props;

	return(
		<div className="header">
			<div className="left-icon-header">
				<FontAwesomeIcon icon={ faBookmark } className="icon"/>
			</div>
			<div className="header-content">
				<p className="title">{ title }</p>
				<p className="date">{ date }</p>
			</div>
			<div className="right-icon-header">
				<Button>
					<FontAwesomeIcon icon= { faAlignJustify } className="icon"/>
				</Button>
			</div>
		</div>
	)
}

export  { Header };
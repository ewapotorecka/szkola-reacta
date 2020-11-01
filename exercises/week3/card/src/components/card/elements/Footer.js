import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLink, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import Button from '../../button';

function Footer( props ) {
	const { showMore, content } = props;
	const [ contentVisibility, changeContentVisibility ] = useState( showMore );
	const [ iconShowMore, changeIconShowMore ] = useState( faAngleDown );
	let moreContent;

	if ( contentVisibility ) {
		moreContent = (
			<div className="extended-content-container">
				<p>{ content }</p>
			</div>
		);
	}

	return(
		<div className="footer">
			<div className="icons-container-footer">
				<div className="left-icons-container-footer">
				<Button>
					<FontAwesomeIcon icon= { faHeart } className="icon" />
				</Button>
				<Button>
					<FontAwesomeIcon icon= { faLink } className="icon" />
				</Button>
				</div>
				<div className="right-icon-container-footer">
				<Button className="show-more-button" onClick={ () => {
					changeContentVisibility( !contentVisibility );
					if ( iconShowMore === faAngleDown ) {
						changeIconShowMore( faAngleUp );
					} else {
						changeIconShowMore( faAngleDown );
					}
					} }>
					<FontAwesomeIcon icon= { iconShowMore } className="icon" />
				</Button>
				</div>
			</div>
			<div className="extended-content-container">
				{ moreContent }
			</div>
		</div>
	)
}

export { Footer };
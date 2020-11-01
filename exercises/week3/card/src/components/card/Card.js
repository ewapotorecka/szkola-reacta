import React from 'react';

import { Header, Content, Footer } from './elements';



function Card( props ) {
	const { title, date, intro, showMore, img, extendedContent } = props;

	return(
		<div className="card">
			<Header title={ title } date={ date } />
			<Content intro={ intro } img={ img }/>
			<Footer showMore={ showMore } content={ extendedContent } />
		</div>
	)
}

export default Card;
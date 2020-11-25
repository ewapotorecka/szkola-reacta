import React from 'react';
import { NavLink } from 'react-router-dom';
import './navLink.css';

export default function NavLinkElement( props ) {
	return (
		<NavLink to={ props.to } className='nav-link'>{ props.children }</NavLink>
	);
}
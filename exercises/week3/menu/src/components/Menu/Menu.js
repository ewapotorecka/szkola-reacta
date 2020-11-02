import React from 'react';
import { MenuLink } from '../MenuLink/MenuLink';

export class Menu extends React.Component {
	render() {
		return (
		<div className="menu">
			<MenuLink to="/">Home</MenuLink>
			<MenuLink to="/about">About</MenuLink>
			<MenuLink to="/contact" isActive>Contact</MenuLink>
  			<MenuLink to="/posts">Posts</MenuLink>
		</div>
		);
		
	}
}
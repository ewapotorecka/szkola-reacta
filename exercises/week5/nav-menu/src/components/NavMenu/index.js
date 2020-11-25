import React, { useState } from 'react';
import NavLinkElement from '../NavLink';
import { ReactComponent as Menu } from '../../icons/svg/002-menu.svg';
import { ReactComponent as Close } from '../../icons/svg/001-cancel.svg';
import './navMenu.css';

export default function NavMenu() {
	const [ menuVisible, setMenuVisible ] = useState( false );

	let content;
	const handleClick = () => {
		menuVisible ? setMenuVisible( false ) : setMenuVisible( true );
	}

	if ( !menuVisible ) {
		content = <button onClick={ handleClick }><Menu width='30px' height='30px' fill='#3B3B98'/></button>;
	} else {
		content =
				<div className='menu-container'>
					<button onClick={ handleClick }><Menu width='30px' height='30px' fill='#3B3B98'/></button>
					<div className='menu'>
						<NavLinkElement to='/home'>Home</NavLinkElement>
						<NavLinkElement to='/about'>About</NavLinkElement>
						<NavLinkElement to='/contact'>Contact</NavLinkElement>
					</div>

				</div>
	}

	return (
		<div className='nav-menu'>
			{ content }
		</div>
		
	);
};
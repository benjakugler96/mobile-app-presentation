import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderStyledNav } from './HeaderNav.styled';

const HeaderNav = () => (
	<HeaderStyledNav>
		<ul>
			<li>
				<NavLink to='/' exact activeClassName='active-route'>
					Home
				</NavLink>
			</li>

			<li>
				<NavLink to='/contact/' exact activeClassName='active-route'>
					The App
				</NavLink>
			</li>

			<li>
				<NavLink to='/'>
					<div>Download</div>
				</NavLink>
			</li>
		</ul>
	</HeaderStyledNav>
);

export default HeaderNav;

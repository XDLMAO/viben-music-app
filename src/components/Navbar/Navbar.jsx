import React from 'react';
import { links } from '../../assets/constants';
import { NavLink } from 'react-router-dom';

const NavLinks = () => (
	<div>
		{links.map((item) => (
			<NavLink
				className='flex flex-row justify-between'
				key={item.name}
				to={item.to}
			>
				{item.icon}
				{item.name}
			</NavLink>
		))}
	</div>
);

const Navbar = () => {
	return (
		<nav>
			<div className='flex-col justify-between'>
				<div>
					<h3>vibenMusic</h3>
				</div>
				<NavLinks />
			</div>
		</nav>
	);
};

export default Navbar;

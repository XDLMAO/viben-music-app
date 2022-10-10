import React, { useState } from 'react';
import { links } from '../../assets/constants';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import { SiMusicbrainz } from 'react-icons/si';

const NavLinks = () => (
	<div className='flex flex-col md:flex-row gap-10'>
		{links.map((item) => (
			<NavLink className='font-bold' key={item.name} to={item.to}>
				{item.icon}
				{item.name}
			</NavLink>
		))}
	</div>
);

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<nav>
			<div className='hidden md:flex flex-col item-center justify-start md:justify-between md:flex-row'>
				<div className='flex items-center'>
					<SiMusicbrainz className='text-cyan-500 mr-1 ' />
					<h3 className='text-lg font-bold text-cyan-500'>
						vibenMusic
					</h3>
				</div>
				<NavLinks />
			</div>

			{/* Mobile */}
			<div className='absolute md:hidden block top-6 right-3'>
				{mobileMenuOpen ? (
					<RiCloseLine
						className='cursor-pointer w-6 h-6 mr-2'
						onClick={() => setMobileMenuOpen(false)}
					/>
				) : (
					<HiOutlineMenu
						className='cursor-pointer w-6 h-6  mr-2'
						onClick={() => setMobileMenuOpen(true)}
					/>
				)}
			</div>
			<div
				className={`absolute top-0 h-screen w-2/3 bg-black text-white backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
					mobileMenuOpen ? 'left-0' : '-left-full'
				}`}
			>
				<h3 className='mb-10 text-lg text-white font-bold'>
					vibenMusic
				</h3>
				<NavLinks handleClick={() => setMobileMenuOpen(false)} />
			</div>
		</nav>
	);
};

export default Navbar;

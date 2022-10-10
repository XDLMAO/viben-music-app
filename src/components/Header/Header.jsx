import React from 'react';
import './Header.css';

export const HeaderDiscover = () => (
	<div className='discover-header md:mt-4 bg-blue-300 text-white flex items-center justify-center h-[300px] '>
		<h2 className='text-4xl font-bold'>Discover Trending Music</h2>
	</div>
);

export const HeaderAroundYou = () => (
	<div className='discover-header md:mt-4 bg-red-300 text-white flex items-center justify-center h-[300px] '>
		<h2 className='text-4xl font-bold'>
			Discover Popular Music Around You!
		</h2>
	</div>
);

export const HeaderTopArtists = () => (
	<div className='discover-header md:mt-4 bg-orange-300 text-white flex items-center justify-center h-[300px] '>
		<h2 className='text-4xl font-bold'>Discover Popular Artists</h2>
	</div>
);

export const HeaderTopCharts = () => (
	<div className='discover-header md:mt-4 bg-cyan-300 text-white flex items-center justify-center h-[300px] '>
		<h2 className='text-4xl font-bold'>
			Discover Top Hits of the week!
		</h2>
	</div>
);

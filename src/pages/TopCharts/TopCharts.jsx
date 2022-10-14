import React from 'react';
import { HeaderTopCharts } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

import axios from 'axios';
import { useSelector } from 'react-redux';

import { useGetTopChartsQuery } from '../../redux/services/shazamCore';

import { Error, Loader, SongCard, TopPlay } from '../../components';

const TopCharts = () => {
	const { activeSong, isPlaying } = useSelector(
		(state) => state.player
	);
	const { data, isFetching, error } = useGetTopChartsQuery();

	if (isFetching) return <Loader title='' />;

	return (
		<section className='flex flex-col'>
			<Navbar />
			<HeaderTopCharts />
			<div>
				<h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
					Discover Top Charts
				</h2>
				<div className='flex xl:flex-row flex-col-reverse'>
					<div className='max-w-[800px] flex flex-wrap sm:justify-start justify-center gap-4'>
						{data?.map((song, index) => (
							<SongCard
								key={song.key}
								song={song}
								isPlaying={isPlaying}
								activeSong={activeSong}
								data={DataView}
								index={index}
							/>
						))}
					</div>
					<div className='xl:sticky relative top-0 h-fit'>
						<TopPlay />
					</div>
				</div>
			</div>
		</section>
	);
};

export default TopCharts;

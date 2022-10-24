import React from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useGetSongsBySearchQuery } from '../../redux/services/shazamCore';
import { Error, Loader, SongCard, TopPlay } from '../../components';
import Navbar from '../../components/Navbar/Navbar';
import { HeaderDiscover } from '../../components/Header/Header';
import { useFetchSearch } from '../../hooks/useFetch';

const Search = () => {
	const {
		isFetching,
		error,
		songs,
		searchTerm,
		activeSong,
		isPlaying,
	} = useFetchSearch();

	if (isFetching) return <Loader title='Searching for songs' />;

	if (error) return <Error />;

	return (
		<section>
			<Navbar />
			<HeaderDiscover />
			<div>
				<h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
					Showing results for{' '}
					<span className='text-red-300'>{searchTerm} </span>
				</h2>

				<div className='flex xl:flex-row flex-col-reverse'>
					<div className='max-w-[800px] flex flex-wrap sm:justify-start justify-center gap-4'>
						{songs?.map((song, index) => (
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

export default Search;
[];

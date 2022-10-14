import React from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useGetSongsBySearchQuery } from '../../redux/services/shazamCore';
import { Error, Loader, SongCard } from '../../components';
import Navbar from '../../components/Navbar/Navbar';
import { HeaderDiscover } from '../../components/Header/Header';

const Search = () => {
	const { searchTerm } = useParams();
	const { activeSong, isPlaying } = useSelector(
		(state) => state.player
	);

	const { data, isFetching, error } =
		useGetSongsBySearchQuery(searchTerm);

	const songs = data?.tracks?.hits?.map((song) => song.track);

	if (isFetching) return <Loader title='Searching for songs' />;

	if (error) return <Error />;

	return (
		<section>
			<Navbar />
			<HeaderDiscover />
			<div>
				<h2>Showing results for {searchTerm}</h2>

				<div>
					<div>
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
				</div>
			</div>
		</section>
	);
};

export default Search;
[];

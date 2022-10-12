import React from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, DetailsHeader } from '../../components';
import {
	setActiveSong,
	playPause,
} from '../../redux/features/playerSlice';
import { useGetSongsDetailsQuery } from '../../redux/services/shazamCore';
import Navbar from '../../components/Navbar/Navbar';
import { HeaderSongDetails } from '../../components/Header/Header';
import TopPlay from '../../components/TopPlay/TopPlay';

const SongDetails = () => {
	const dispatch = useDispatch();
	const { songid } = useParams();
	const { activeSong, isPlaying } = useSelector(
		(state) => state.player
	);

	const {
		data: songData,
		isFetching: isFetchingSongDetails,
		error,
	} = useGetSongsDetailsQuery({ songid });

	const handlePauseClick = () => {
		dispatch(playPause(false));
	};

	const handlePlayClick = (song, index) => {
		dispatch(setActiveSong({ song, data, index }));
		dispatch(playPause(true));
	};

	if (isFetchingSongDetails)
		return <Loader title='Loading song details' />;

	if (error) return <Error />;

	return (
		<section>
			<Navbar />
			<HeaderSongDetails />
			<div className='flex xl:flex-row flex-col-reverse justify-between mt-4'>
				<div className='flex flex-col '>
					<DetailsHeader artistId='' songData={songData} />
					<div className='mt-10 mb-10'>
						<h2 className='text-white text-3xl font-bold mb-2'>
							Lyrics:
						</h2>
						<div>
							{songData?.sections[1].type === 'LYRICS' ? (
								songData?.sections[1].text.map((line, index) => (
									<p className='text-gray-400 text-base my-1'>
										{line}
									</p>
								))
							) : (
								<p className='text-gray-400 text-base my-1'>
									Sorry, no lyrics found!
								</p>
							)}
						</div>
					</div>
				</div>
				<div className='xl:sticky relative top-0 h-fit'>
					<TopPlay />
				</div>
			</div>
		</section>
	);
};

export default SongDetails;

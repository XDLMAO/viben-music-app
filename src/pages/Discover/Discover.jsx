import React from 'react';
import { HeaderDiscover } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

import { useDispatch, useSelector } from 'react-redux';
import { useGetTopChartsQuery } from '../../redux/services/shazamCore';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loader/Loader';
import SongCard from '../../components/SongCard/SongCard';
import TopPlay from '../../components/TopPlay/TopPlay';

const Discover = () => {
	const dispatch = useDispatch();
	const { activeSong, isPlaying } = useSelector(
		(state) => state.player
	);
	const { data, isFetching, error } = useGetTopChartsQuery();

	const genreTitle = 'Pop';

	if (isFetching) return <Loader title='Loading songs...' />;

	if (error) return <Error />;

	console.log(data);

	return (
		<section>
			<Navbar />
			<HeaderDiscover />

			<div className='flex flex-col '>
				<div>
					<div>
						<h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
							Discover {genreTitle}
						</h2>
						{/* <select>
							{genres.map((genre) => (
								<option
									key={genre.value}
									value={genre.value}
								></option>
							))}
						</select> */}
					</div>
					<div className='flex xl:flex-row flex-col-reverse'>
						<div className='max-w-[800px] flex flex-wrap sm:justify-start justify-center gap-4'>
							{data?.map((song, index) => (
								<SongCard
									key={song.key}
									song={song}
									index={index}
									isPlaying={isPlaying}
									activeSong={activeSong}
									data={data}
								/>
							))}
						</div>
						<div className='xl:sticky relative top-0 h-fit'>
							<TopPlay />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Discover;

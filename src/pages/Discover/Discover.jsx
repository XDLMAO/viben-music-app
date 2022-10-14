import React from 'react';
import { HeaderDiscover } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

import { useDispatch, useSelector } from 'react-redux';
import { useGetSongsByGenreQuery } from '../../redux/services/shazamCore';
import { selectGenreListId } from '../../redux/features/playerSlice';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loader/Loader';
import SongCard from '../../components/SongCard/SongCard';
import TopPlay from '../../components/TopPlay/TopPlay';
import Searchbar from '../../components/Searchbar/Searchbar';
import { genres } from '../../assets/constants';

const Discover = () => {
	const dispatch = useDispatch();
	const { activeSong, isPlaying, genreListId } = useSelector(
		(state) => state.player
	);
	const { data, isFetching, error } = useGetSongsByGenreQuery(
		genreListId || 'POP'
	);

	if (isFetching) return <Loader title='Loading songs...' />;

	if (error) return <Error />;

	const genreTitle = genres.find(
		({ value }) => value === genreListId
	)?.title;

	// console.log(data);

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
						<div className='flex '>
							<Searchbar />

							<select
								onChange={(e) =>
									dispatch(selectGenreListId(e.target.value))
								}
								value={genreListId || 'pop'}
								className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'
							>
								{genres.map((genre) => (
									<option key={genre.value} value={genre.value}>
										{genre.title}
									</option>
								))}
							</select>
						</div>
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

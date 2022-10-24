import React from 'react';
import { HeaderDiscover } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

import { selectGenreListId } from '../../redux/features/playerSlice';

import { Error, Loader } from '../../components';

import SongCard from '../../components/SongCard/SongCard';
import TopPlay from '../../components/TopPlay/TopPlay';
import Searchbar from '../../components/Searchbar/Searchbar';
import { useFetchDiscover } from '../../hooks/useFetch';

const Discover = () => {
	const {
		activeSong,
		isPlaying,
		data,
		genreTitle,
		genreListId,
		genres,
		error,
		isFetching,
		dispatch,
	} = useFetchDiscover();

	if (isFetching) return <Loader title='Loading songs...' />;

	if (error) return <Error />;

	return (
		<section>
			<Navbar />
			<HeaderDiscover />
			<div className='flex flex-col '>
				<div>
					<div className='mb-10'>
						<h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
							Discover {genreTitle}
						</h2>
						<div className='flex items-center'>
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

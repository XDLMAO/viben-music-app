import React, { useState, useEffect } from 'react';
import { HeaderAroundYou } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard, TopPlay } from '../../components';

import { useGetSongsByCountryQuery } from '../../redux/services/shazamCore';

const AroundYou = () => {
	const [country, setCountry] = useState('');
	const [loading, setLoading] = useState(true);
	const { activeSong, isPlaying } = useSelector(
		(state) => state.player
	);

	const { data, isFetching, error } =
		useGetSongsByCountryQuery(country);

	console.log(country);

	useEffect(() => {
		axios
			.get(
				`https://geo.ipify.org/api/v2/country?apiKey=at_2DeZalMP8NGip7AYXeSk08hUkhdIo`
			)
			.then((res) => setCountry(res?.data?.location?.country))
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	});

	if (isFetching && loading)
		return <Loader title='Loading songs around you' />;

	if (error && country) return <Error />;

	return (
		<div>
			<Navbar />
			<HeaderAroundYou />
			<div>
				<h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
					Popular picks Around You in{' '}
					<span className='text-red-300'>{country}</span>
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
		</div>
	);
};

export default AroundYou;

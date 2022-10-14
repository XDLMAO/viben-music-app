import React from 'react';
import { HeaderTopArtists } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

import { ArtistCard, Error, Loader, TopPlay } from '../../components';
import { useGetTopChartsQuery } from '../../redux/services/shazamCore';

const TopArtists = () => {
	const { data, isFetching, error } = useGetTopChartsQuery();

	if (isFetching) return <Loader title='Loading top Charts' />;

	if (error) return <Error />;

	return (
		<section>
			<Navbar />
			<HeaderTopArtists />
			<div>
				<h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
					Discover Top Artists
				</h2>
				<div className='flex xl:flex-row flex-col-reverse'>
					<div className='max-w-[800px] flex flex-wrap sm:justify-start justify-center gap-4'>
						{data?.map((track) => (
							<ArtistCard key={track.key} track={track} />
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

export default TopArtists;

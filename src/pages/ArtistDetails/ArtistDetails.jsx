import React from 'react';

import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import {
	DetailsHeader,
	Error,
	Loader,
	RelatedSongs,
} from '../../components';

import { useGetArtistDetailsQuery } from '../../redux/services/shazamCore';
import Navbar from '../../components/Navbar/Navbar';
import { HeaderArtistDetails } from '../../components/Header/Header';
import TopPlay from '../../components/TopPlay/TopPlay';

const ArtistDetails = () => {
	const { id: artistId } = useParams();
	const { activeSong, isPlaying } = useSelector(
		(state) => state.player
	);

	const {
		data: artistData,
		isFetching: isFetchingArtistDetails,
		error,
	} = useGetArtistDetailsQuery(artistId);

	if (isFetchingArtistDetails)
		return <Loader title='Loading artist details...' />;

	if (error) return <Error />;

	return (
		<section>
			<Navbar />
			<HeaderArtistDetails />

			<div className='flex xl:flex-row flex-col-reverse justify-between mt-4'>
				<div className='flex flex-col'>
					<DetailsHeader
						artistId={artistId}
						artistData={artistData}
					/>

					<RelatedSongs
						data={Object.values(artistData?.songs)}
						artistId={artistId}
						isPlaying={isPlaying}
						activeSong={activeSong}
					/>
				</div>
				<div className='xl:sticky relative top-0 h-fit'>
					<TopPlay />
				</div>
			</div>
		</section>
	);
};

export default ArtistDetails;

import React from 'react';
import { HeaderDiscover } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';

import { useGetTopChartsQuery } from '../../redux/services/shazamCore';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loader/Loader';

const Discover = () => {
	const dispatch = useDispatch();
	const { data, isFetching, error } = useGetTopChartsQuery();
	const genreTitle = 'Pop';

	if (isFetching) return <Loader title='Loading songs...' />;

	if (error) return <Error />;

	console.log(data);

	return (
		<section>
			<Navbar />
			<HeaderDiscover />

			<div></div>
		</section>
	);
};

export default Discover;

import React from 'react';
import { HeaderDiscover } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';

import { useGetTopChartsQuery } from '../../redux/services/shazamCore';

const Discover = () => {
	const dispatch = useDispatch();
	const { data, isFetching, error } = useGetTopChartsQuery();
	const genreTitle = 'Pop';

	if (isFetching) return <p>Loading...</p>;

	if (error) return <p>Error...</p>;

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

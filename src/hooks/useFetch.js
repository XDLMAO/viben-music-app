import { useDispatch, useSelector } from 'react-redux';
import {
	useGetSongsByGenreQuery,
	useGetSongsBySearchQuery,
} from '../redux/services/shazamCore';
import { genres } from '../assets/constants';

import { useParams } from 'react-router-dom';

export const useFetchDiscover = () => {
	const dispatch = useDispatch();
	const { activeSong, isPlaying, genreListId } = useSelector(
		(state) => state.player
	);
	const { data, isFetching, error } = useGetSongsByGenreQuery(
		genreListId || 'POP'
	);

	const genreTitle = genres.find(
		({ value }) => value === genreListId
	)?.title;

	// console.log(data);

	return {
		activeSong,
		isPlaying,
		dispatch,
		data,
		genreTitle,
		genres,
		genreListId,
		isFetching,
		error,
	};
};

export const useFetchSearch = () => {
	const { searchTerm } = useParams();
	const { activeSong, isPlaying } = useSelector(
		(state) => state.player
	);

	const { data, isFetching, error } =
		useGetSongsBySearchQuery(searchTerm);

	const songs = data?.tracks?.hits?.map((song) => song.track);

	return {
		searchTerm,
		activeSong,
		isPlaying,
		songs,
		isFetching,
		error,
	};
};

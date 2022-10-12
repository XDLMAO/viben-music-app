import {
	createApi,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
	reducerPath: 'shazamCoreApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
		prepareHeaders: (headers) => {
			headers.set(
				'X-RapidAPI-Key',
				'2071f5a293mshea46c357d639934p16b477jsn0e150c9c7155'
			);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopCharts: builder.query({ query: () => '/charts/world' }),
		getSongsDetails: builder.query({
			query: ({ songid }) => `/tracks/details?track_id=${songid}`,
		}),
		getSongRelated: builder.query({
			query: ({ songid }) => `/tracks/related?track_id=${songid}`,
		}),
	}),
});

export const {
	useGetTopChartsQuery,
	useGetSongsDetailsQuery,
	useGetSongRelatedQuery,
} = shazamCoreApi;

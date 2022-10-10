import { configureStore } from '@reduxjs/toolkit';

import { shazamCoreApi } from './services/shazamCore';

export const store = configureStore({
	reducer: {
		[shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
	},
	middleware: (getDefaultmiddleware) =>
		getDefaultmiddleware().concat(shazamCoreApi.middleware),
});

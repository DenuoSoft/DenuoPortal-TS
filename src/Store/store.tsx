import {configureStore} from '@reduxjs/toolkit';
import themeReducer from '../feature/themeList';
import {loadFromLocalStorage, saveToLocalStorage} from '../helpers/storage';
import {apiSlice} from '../Api/apiSlice';
import authReducer from '../components/auth/authSlice';

export const store = configureStore({
	reducer: {
		themeList: themeReducer,
		auth: authReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	preloadedState: loadFromLocalStorage() || undefined,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

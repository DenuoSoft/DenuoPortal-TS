import {Theme, Themes} from '../models/theme';

const light: Theme = {
	name: 'light',
	colors: {
		backgroundPrimary: '#fff',
		backgroundSecondary: '#edf0f1',
		textColor: '#28282D',
		headerText: '#28282D',
		activeColor: '#555a69',
		primaryColor: '#c8d2e6',
		accentColor: '#D7FF23',
		borderColor: 'rgb(85, 90, 105, 0.5)',
	},
};

const dark: Theme = {
	name: 'dark',
	colors: {
		backgroundPrimary: '#555a69',
		backgroundSecondary: 'gray',
		textColor: '#28282D',
		headerText: '#c8c8c8',
		activeColor: '#f5f0d2',
		primaryColor: '#ffffff33',
		accentColor: '#876464',
		borderColor: '#c8c8c8',
	},
};

export const themes: Themes = {light, dark};

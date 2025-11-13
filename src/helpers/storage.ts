// storage.ts
import {RootState} from '../Store/store';

export const saveToLocalStorage = (state: RootState) => {
	try {
		// Сохраняем только нужные части состояния, исключая API
		const stateToSave = {
			themeList: state.themeList,
			auth: state.auth,
			// НЕ сохраняем state.api
		};
		const appState = JSON.stringify(stateToSave);
		localStorage.setItem('appState', appState);
	} catch (e) {
		console.warn(e);
	}
};

export const loadFromLocalStorage = () => {
	try {
		const appState = localStorage.getItem('appState');
		if (!appState) return undefined;
		
		const parsedState = JSON.parse(appState);
		
		// Возвращаем только разрешенные части состояния
		return {
			themeList: parsedState.themeList,
			auth: parsedState.auth,
			// НЕ восстанавливаем api - RTK Query сам управляет своим состоянием
		};
	} catch (e) {
		console.warn(e);
		return undefined;
	}
};

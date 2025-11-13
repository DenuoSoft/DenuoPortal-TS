import ReactDOM from 'react-dom/client';
import {StrictMode} from 'react';
import {RouterProvider} from 'react-router-dom';
import {router} from './router/router';
import {Provider} from 'react-redux';
import {store} from './Store/store';
import AuthComponent from './components/auth/authComponent';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<StrictMode>
		<Provider store={store}>
			<AuthComponent>
				<RouterProvider router={router} />
			</AuthComponent>
		</Provider>
	</StrictMode>
);

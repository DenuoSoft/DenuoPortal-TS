import {createBrowserRouter} from 'react-router-dom';
import {Home} from '../pages/Home';
import {Hr} from '../pages/Hr';
import {It} from '../pages/It';
import {Marketing} from '../pages/Marketing';
import {Layout} from '../Layout/Layout';
import { People } from '../pages/People';
import { Forms } from '../components/Forms/Forms';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/hr',
				element: <Hr />,
			},
			{
				path: '/it',
				element: <It />,
			},
			{
				path: '/marketing',
				element: <Marketing />,
			},
			{
				path: '/forms',
				element: <Forms />,
			},
			{
				path: '/people',
				element: <People />
			}
		],
	},
]);

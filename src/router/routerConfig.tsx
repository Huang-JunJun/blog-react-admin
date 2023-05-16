import Home from '../pages';
import { routerType } from './routerType';

export const routerConfig: Array<routerType> = [
	{
		name: 'home',
		path: '/home',
		component: Home,
	},
];

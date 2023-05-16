import { ComponentType } from 'react';

export interface routerType {
	name: string;
	// 函数式组件返回的是一个JSX对象
	component?: ComponentType<any>;
	render?: Function;
	children?: Function;
	path: string;
	exact?: boolean;
	strict?: boolean;
	location?: object;
	sensitive?: boolean;
}

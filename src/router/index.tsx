import React, { Component } from 'react';
// 导入所需组件
// 导入路由依赖
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { routerConfig } from './routerConfig';

export default class index extends Component {
	render() {
		return (
			// 使用BrowserRouter包裹，配置路由
			<BrowserRouter>
				{/* 使用/配置路由默认页；exact严格匹配 */}
				<Routes>
					{routerConfig.map((item) => (
						<Route
							key={item.name}
							Component={item.component}
							path={item.path}
						></Route>
					))}
				</Routes>
			</BrowserRouter>
		);
	}
}

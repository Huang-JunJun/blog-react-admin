import Aside from './Aside';
import Header from './Header';
import Main from './Main';
import './style.less';

export default function Layout(props: any) {
	return (
		<div className='container'>
			<Header></Header>
			<Aside></Aside>
			<Main></Main>
		</div>
	);
}

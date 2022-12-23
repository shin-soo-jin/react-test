import { Route, Switch } from 'react-router-dom';
// Route (루트-경로) 페이지를 묶어주는 용도로 사용
// 모든페이지에 들어있는 Header, Footer는 Route로 묶지 않음

// common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// main
import Content from './components/main/Content';
import Visual from './components/main/Visual';

// sub
import Community from './components/sub/Community';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Location from './components/sub/Location';
import Members from './components/sub/Members';
import Youtube from './components/sub/Youtube';

import './scss/style.scss';

function App() {
	return (
		// path='/' f12 어플리케이션 쿠키에 있는 path. 주소창뒤에 슬래시만 있으면 main페이지. exact로 정확하게 슬래시만 있을때만 보여라
		<>
			{/* Switch는 더 자세하게 작성된 내용을 먼저 적용한다 */}
			<Switch>
				<Route exact path='/'>
					{/* main에만 적용되는 header */}
					<Header type={'main'} />
					<Visual />
					<Content />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/department' component={Department} />

			<Route path='/youtube' component={Youtube} />

			<Route path='/gallery' component={Gallery} />

			<Route path='/community' component={Community} />

			<Route path='/location' component={Location} />

			<Route path='/members' component={Members} />

			<Footer />
		</>
	);
}

export default App;

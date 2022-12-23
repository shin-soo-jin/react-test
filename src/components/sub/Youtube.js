import Layout from '../common/Layout';

function Youtube() {
	return (
		<Layout name={'Youtube'}>
			{/* 부모에서 자식으로 props로 넘길 속성과 같은 값을 지정한것 name={'Youtube'} 이것 자체가 props 인것 */}
			<p>Youtube content</p>
		</Layout>
	);
}

export default Youtube;

// Layout 태그 안쪽의 모든 내용을 전달함

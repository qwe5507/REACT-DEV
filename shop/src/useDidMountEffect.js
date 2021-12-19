import { useEffect, useRef } from 'react';

// useRef 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않습니다. 
// 리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회 할 수 있는 반면,
// useRef 로 관리하고 있는 변수는 설정 후 바로 조회 할 수 있습니다.

const useDidMountEffect = (func, deps) => {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) func();
		else didMount.current = true;
	}, deps);
};

export default useDidMountEffect;

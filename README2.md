< 데일리 스크럼 >

1. 오늘 과제를 풀기위해서 공부한 내용 정리

react hooks에서 useContext(context API), useReducer로 상태관리 하기

react는 state를 상위 컴포넌트에서 관리하고 해당 state를 하위 컴포넌트 props로 내려주는데 하위 컴포넌트가 많아질 수록 props를 계속 전달하기 때문에 불편해 질 수 있다.

context API를 사용하면 이 문제를 해결할 수 있다. context API를 사용하면 모든 컴포넌트가 context에 있는 state를 받을 수 있게 된다.

이번 포스트에서는 useContext와 useReducer를 사용한 예제를 통해 context API 사용 방법을 익혀보자. 개인적으로 이렇게 context와 component는 폴더로 구분해서 사용하는 것을 좋아한다.

├─components
| └─Component.jsx
├─context
| └─ContextProvider.jsx
└─app.js

context/ContextProvider.js
먼저 context provider를 설정해보자. context provider는 context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할을 한다. 구독중인 컴포넌트는 value props가 변경될 때 리렌더링 된다.

import React, { useReducer } from "react";

// context를 생성한 후 export 한다
export const Context = React.createContext();

// state의 초기 값을 설정한다
const initialState = {
count: 0;
};

// reducer는 action에서 받은 type에 따라서 state를 변경한다.
const reducer = (state, action) => {
switch (action.type) {
case "INCREASE" :
return {
...state, //현재 state가 하나뿐이라 생략해도 된다. 두개 이상일 경우 변경하지 않은 state를 유지하기 위해 사용한다
count: action.value, // action.value에서 value는 추후 component에서 dispatch 할 때 payload로 보내주는 값의 이름이다.
};

    default:
      throw new Error();

}
};

const ContextProvider = ({ children }) => {
// useReducer를 사용해서 state와 dispatch를 생성한다.
const [state, contextDispatch] = useReducer(reducer, initialState);

return (
<Context.Provider
//provider에 value props로 state와 dispatch를 내려준다.
value={{ count: state.count, contextDispatch }} >
{children}
</Context.Provider>
);
};

export default ContextProvider;

app.js
생성한 provider를 app.js 또는 index.js에 import 하여 모든 하위 컴포넌트가 포함되도록 감싼다.

import React from "react";
import Component from "./component/Component";
import ContextProvider from "./context/ContextProvider";

import "./App.css";

const App = () => {
return (
<ContextProvider>
<Component />
</ContextProvider>
);
};

export default App;

component/Component.js
import React, { useContext } from "react";
// ContextProvider를 가지고 오는 것이 아닌 생성한 Context를 가지고 온다.
import { Context } from "../context/ContextProvider";

const Component = () => {
// useContext를 이용하여 import한 Context안의 provider value를 가지고 온다.
const { count, contextDispatch } = useContext(Context);

return (
<div>
<p> count: {count} </p>
<button
// dispatch의 파라미터는 action에 담겨서 provider의 reducer로 전달되면서,
// provider에서 정의한 reducer에서 action.type과 action.value로 읽을 수 있다.
onClick={() => contextDispatch({ type: "INCREASE", value: count + 1 }) >
증가
</button>
</div>
);
};

export default Component;
적용되어 있는 코드가 궁금하다면 아래 repo 확인

- basic branch : react hooks만 사용

- contextAPI branch : basic 코드를 context API로 구현

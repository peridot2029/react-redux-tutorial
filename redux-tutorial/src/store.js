import { createStore } from 'redux';

// NOTE (3) initial state value
const initState = {
  todos: [],
  posts: [],
};
// NOTE (2) create redux reducer
// - 변화를 일으키는 순수 함수로 state,action 두 개의 매개변수를 받음.
// -  현재 상태와, 전달 받은 액션을 참조해서 "새로운 상태"를 만들어서 반환함.
function myreducer(state = initState, action) {
  console.log(action);
}

// NOTE (1) create redux store
// - reudx는 한 애플리케이션 단 하나의 스토어를 생성
// - store 안에는 현재 앱의 상태와 리듀서가 들어가 있음.
// - stoe API(subscribe, dispatch, getState)
const store = createStore(myreducer);

// NOTE (4) creat action
// - 상태를 변화를 줄 때, 액션을 발생 시킴.
// - 하나의 객체로 표현되므로 "type"은 필수적으로 가지고 있어야 한다.
const todoAction = { type: 'ADD_TODO', text: 'todo add items' };

// NOTE (4-1) dispatch(action)
// - 상태 변경 일으키기 위해서는 액션을 내보냄.
store.dispatch(todoAction);

export default store;

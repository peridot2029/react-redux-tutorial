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
  if (action.type === 'ADD_TODO') {
    return {
      // NOTE (5) state.todos add item
      ...state,
      todos: [...state.todos, action.text],
    };
  }
  if (action.type === 'ADD_POST') {
    return {
      // NOTE (5) state.posts add item
      ...state,
      posts: [...state.posts, action.post],
    };
  }
}

// NOTE (1) create redux store
// - reudx는 한 애플리케이션 단 하나의 스토어를 생성
// - store 안에는 현재 앱의 상태와 리듀서가 들어가 있음.
// - stoe API(subscribe, dispatch, getState)
const store = createStore(myreducer);

// NOTE (6) Subscribe
// - store api 중 하나로, 함수 형태로 값을 받아옴.
// - subscribe 안에 특정 함수를 전달하면, 액션이 디스패치 될 때 마다 전달해준 함수를 호출함.
store.subscribe(() => {
  console.log('state todos update');
  console.log(store.getState());
});

// NOTE (4) dispath(action)
store.dispatch({ type: 'ADD_TODO', text: 'todo add items' });
store.dispatch({ type: 'ADD_POST', post: 'todo item posts' });

export default store;

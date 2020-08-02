// NOTE (2) initial state value
const initState = {
  posts: [],
};

// NOTE (1) Root Reducer
// - 리덕스를 사용할 때, 여러 개의 리듀서를 만들고 이를 합쳐서 "Root Reducer"를 만듬

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;

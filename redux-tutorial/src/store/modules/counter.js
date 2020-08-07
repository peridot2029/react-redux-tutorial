// action type
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// action creator function
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// initialState
const initialState = {
  number: 0,
};

// reducer
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;

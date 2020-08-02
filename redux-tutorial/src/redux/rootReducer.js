// NOTE (2) initial state value
const initState = {
  posts: [
    {
      id: 1,
      title: 'Espresso Frappuccino',
      url: 'https://i.postimg.cc/8c9Fyjp6/espresso-frappuccino.jpg',
      content:
        'A frappuccino that enjoys the intensity of espresso and a bit of sweetness coolly.Choose the syrup for light frappuccino-Low Sugar is 25% less on the size of the Tall.',
    },
    {
      id: 2,
      title: 'Dolce Latte',
      url: 'https://i.postimg.cc/d3Lkm8YF/dolce-latte.jpg',
      content: 'A sweet drink with deep espresso and neat fat-free milk. ',
    },
    {
      id: 3,
      title: 'Caffe Mocha',
      url: 'https://i.postimg.cc/wxGsxbXj/caffe-mocha.jpg',
      content: 'Espresso with whipped cream on mocha syrup and steam milk.',
    },
  ],
};

// NOTE (1) Root Reducer
// - 리덕스를 사용할 때, 여러 개의 리듀서를 만들고 이를 합쳐서 "Root Reducer"를 만듬
const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;

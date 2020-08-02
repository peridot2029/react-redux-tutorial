import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../Post/Post';
import './Home.scss';

// NOTE  connect
// - connect 함수는 컨테이너를 컴포넌트를 만드는 또 다른 방법.
// - connect 함수는 리덕스 스토어 안에 있는 상태를 props로 넣어줄 수 있고
// - 액션을 디스패치하는 함수를 props로 넣어줄 수도 있음
// - 리액트에서는 함수형 컴포넌트를 만드는 걸 우선시 해야함.
// - 클래스형 컴포넌트에서 Hooks를 사용하지 못하지 때문에 "connect" 함수를 사용함.
// - connect는 "HOC(Higher-Oreder-Componet)"를 의미함

// NOTE  HOC
// - HOC은 리액트 컴포넌트를 개발 하나의 패턴으로써, 컴포넌트 로직을 재활용 할 때 유용한 패턴
// - 예를 들면 특정 함수 또는 값을 props로 받아와서 사용하고 싶은 경우에 사용하는 패턴
// - 리액트에서 Hook이 도입 되기 전에는 HOC 패턴이 자주 사용되었으나, HOC 도입 이후에는
//   HOC 만들 이유가 대부분 사라졌음

class Home extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className='home__wrapper'>
        <h1 className='home-title'>HOME</h1>
        <ul>
          {posts.map(post => {
            return <Post key={post.id} post={post} />;
          })}
        </ul>
      </div>
    );
  }
}

// NOTE (1) mapStateToProps function
// - 리덕스 스토어의 상태를 조회해서 어떤 것을 props로 넣어줄지 정의
// - 현재 리덕스 상태를 파라미터로 받아옴
const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

// NOTE (2) connect function
// - connect 함수에 mapStateToProps를 인자로 전달
export default connect(mapStateToProps)(Home);

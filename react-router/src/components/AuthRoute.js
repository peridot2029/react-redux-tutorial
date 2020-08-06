import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// NOTE 인증이 필요한 컴포넌트를 위한 라우트
// - <Route/> component는 보통 component prop이나 또는 render prop를 통해 렌더링할 컴포넌트를 받음.
// - 인증이 된 경우(authenticated === true)는 받은 component prop이나, render prop를 그대로 이용해서 렌더링함.
// - 인증이 안 된 경우(authenticated === false) <Redirect/> component를 이용해서 로그인 경로 리다이렉트 해줌.

function AuthRoute({ authenticated, component: Component, render, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          render ? (
            render(props)
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default AuthRoute;

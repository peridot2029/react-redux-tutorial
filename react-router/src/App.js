import React, { useState } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { signIn } from './components/auth';
import AuthRoute from './components/AuthRoute';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import LoginForm from './components/LoginForm';
import LogoutButton from './components/LogoutButton';

function App() {
  // NOTE user
  // - 로그인 된 사용자는 user 로 관리
  const [user, setUser] = useState(null);
  // NOTE authenticated
  // - 로그인한 사용자가 존재하는지, 즉 인증 여부 저장
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  return (
    <Router>
      <header>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/about'>
          <button>About</button>
        </Link>
        <Link to='/profile'>
          <button>Profile</button>
        </Link>
        {authenticated ? (
          <LogoutButton logout={logout} />
        ) : (
          <Link to='/login'>
            <button>Login</button>
          </Link>
        )}
      </header>
      <hr />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route
            path='/login'
            render={props => (
              <LoginForm
                authenticated={authenticated}
                login={login}
                {...props}
              />
            )}
          />
          <AuthRoute
            authenticated={authenticated}
            path='/profile'
            render={props => <Profile user={user} {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;

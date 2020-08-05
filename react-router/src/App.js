import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

// NOTE React Router (Link, Route, Router)

// NOTE 1. Link Component
// - HTML <a> tag와 유사, 이동할 경로를 href 대신 to prop를 통해 이동할 경로 지정.

// NOTE 2. Route Component
// - 현재 주소창의 경로와 매치될 경우 보여줄 컴포넌트를 지정하는데 사용.
// - path prop를 통해서 경로 지정하고 component prop를 통해서 매치되었을 때 보여줄 컴포넌트를 할당.

// NOTE 3. Router Component
// - <Router/> 컴포넌트는 위에 나온 <Route>와 <Link> 컴포넌트가 함께 유기적으로 동작하도록 묶어주는데 사용.
// - 즉, <Route>와 <Link> 컴포넌트는 DOM 트리 상에서 항상 <Router>를 공통 상위 컴포넌트로 가져야한다.
// - Router에는 여러 종류가 있는데 일반적인 라우팅을 위해서 <BrowserRouter/>f
function App() {
  return (
    <Router>
      <header>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/about'>
          <button>About</button>
        </Link>
        <Link to='/users'>
          <button>Users</button>
        </Link>
      </header>
      <hr />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;

import React from 'react';
import store from './store';
import './App.css';

function App() {
  console.log(store.getState());
  return (
    <div className='App'>
      <h1>Redux Basics</h1>
    </div>
  );
}

export default App;

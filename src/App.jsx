import React from 'react';

import { Home, List, Login, Single, New } from './pages/index';
import './App.css';



const App = () => {
  return (
    <div className='app'>
      <h1>Dashboard</h1>
      <Home />
      <List />
      <Login />
      <Single />
      <New />
    </div>
  );
};

export default App;
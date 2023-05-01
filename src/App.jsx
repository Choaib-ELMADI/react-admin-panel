import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, List, Login, Single, New } from './pages/index';
import { Navbar, Sidebar } from './components/index';
import './App.css';



const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/'>

            <Route index  element={ <Home /> } />

            <Route path='login'  element={ <Login /> } />

            <Route path='users'>
              <Route index element={ <List /> } />
              <Route path=':userId' element={ <Single /> } />
              <Route path='new'    element={ <New /> } />
            </Route>

            <Route path='products'>
              <Route index element={ <List /> } />
              <Route path=':productId' element={ <Single /> } />
              <Route path='new'    element={ <New /> } />
            </Route>

          </Route>

          <Route path='*' element={ <Login /> } />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
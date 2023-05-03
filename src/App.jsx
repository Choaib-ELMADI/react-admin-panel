import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DarkModeContext } from './context/DarkModeContext';
import { userIputs, productIputs } from './formData';
import { Home, List, Login, Single, New } from './pages/index';
import './App.css';
import './styles/dark.scss';



const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={ darkMode ? 'app dark' : 'app' }>
      <BrowserRouter>
        <Routes>
          <Route path='/'>

            <Route index  element={ <Home /> } />

            <Route path='login'  element={ <Login /> } />

            <Route path='users'>
              <Route index element={ <List /> } />
              <Route path=':userId' element={ <Single /> } />
              <Route path='new'    element={ <New inputs={ userIputs } title='User' type='Profile' /> } />
            </Route>

            <Route path='products'>
              <Route index element={ <List /> } />
              <Route path=':productId' element={ <Single /> } />
              <Route path='new'    element={ <New inputs={ productIputs } title='Product' type='Image' /> } />
            </Route>

          </Route>

          <Route path='*' element={ <Login /> } />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
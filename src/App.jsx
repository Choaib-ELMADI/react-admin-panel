import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { DarkModeContext } from './context/DarkModeContext';
import { AuthContext } from './context/AuthContext';
import { userIputs, productIputs } from './formData';
import { Home, List, Login, Single, New } from './pages/index';
import './App.css';
import './styles/dark.scss';
import { userColumns, productColumns } from './data';



const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />;
  };

  return (
    <div className={ darkMode ? 'app dark' : 'app' }>
      <BrowserRouter>
        <Routes>
          <Route path='/'>

            <Route path='login'  element={ <Login /> } />

            <Route index  element={ <RequireAuth><Home /></RequireAuth> } />

            <Route path='users'>
              <Route index element={ <RequireAuth><List addingType="User" columnsData={ userColumns } /></RequireAuth> } />
              <Route path=':userId' element={ <RequireAuth><Single /></RequireAuth> } />
              <Route path='new'    element={ <RequireAuth><New inputs={ userIputs } title='User' type='Profile' /></RequireAuth> } />
            </Route>

            <Route path='products'>
              <Route index element={ <RequireAuth><List addingType="Product" columnsData={ productColumns } /></RequireAuth> } />
              <Route path=':productId' element={ <RequireAuth><Single /></RequireAuth> } />
              <Route path='new'    element={ <RequireAuth><New inputs={ productIputs } title='Product' type='Image' /></RequireAuth> } />
            </Route>

          </Route>

          <Route path='*' element={ <Login /> } />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
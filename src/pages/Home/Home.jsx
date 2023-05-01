import React from 'react';

import { Sidebar } from '../../components/index';
import './Home.scss';



const Home = () => {
  return (
    <div className='app__home'>
      <Sidebar />
      <div className='home-container'>
        <h1>Home Container</h1>
      </div>
    </div>
  );
};

export default Home;
import React from 'react';

import { Sidebar, Navbar, Widget, Chart, Featured, Table } from '../../components/index';
import './Home.scss';



const Home = () => {
  return (
    <div className='app__home'>
      <Sidebar />
      <div className='home-container'>
        <Navbar />

        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earnings' />
          <Widget type='product' />
        </div>
        
        <div className="charts">
          <Featured />
          <Chart flex={ 2.5 } title="Last Year (Revenue)" />
        </div>

        <div className="list-container">
          <h3 className="list-title">Latest transactions</h3>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
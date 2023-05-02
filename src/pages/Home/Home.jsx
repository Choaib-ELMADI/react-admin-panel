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
          <Widget type='user'     amount={ 995 }  diff={ 34 } />
          <Widget type='order'    amount={ 450 }  diff={ 55 } />
          <Widget type='earnings' amount={ 4621 } diff={ 62 } />
          <Widget type='balance'  amount={ 1548 } diff={ 15 } />
        </div>
        
        <div className="charts">
          <Featured />
          <Chart />
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
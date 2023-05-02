import React from 'react';

import images from '../../constants/images';
import { Sidebar, Navbar, Chart, Table } from '../../components/index';
import './Single.scss';



const Single = () => {
  return (
    <div className='app__single'>
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="single">
          <div className='top'>
            <div className='left'>
              <span className='edit'>Edit</span>
              <h3>Information</h3>
              <div className='user-information'>
                <div className="user-profile">
                  <img src={ images.profile } alt="user" draggable={ false } />
                  <h2>Choaib ELMADI</h2>
                </div>

                <div className='user-info'>
                  <p>
                    <span>Email: </span>
                    <span>choaib3elmadi@gmail.com</span>
                  </p>
                  <p>
                    <span>Phone: </span>
                    <span>+212 643241400</span>
                  </p>
                  <p>
                    <span>Address: </span>
                    <span>40000, Gueliz - Marrakech</span>
                  </p>
                  <p>
                    <span>Country: </span>
                    <span>Morocco</span>
                  </p>
                </div>
            </div>
            </div>

            <Chart flex={ 2.1 } title="User Spending (Last Year)" />
          </div>
          <div className='bottom'>
            <h3>Last transactions</h3>
            <Table />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Single;
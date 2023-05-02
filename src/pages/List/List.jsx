import React from 'react';

import { Sidebar, Navbar, DataTable } from '../../components';
import './List.scss';



const List = () => {
  return (
    <div className='app__list'>
      <Sidebar />
      <div className="list-container">
        <Navbar />

        <div className='data-table-container'>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default List;
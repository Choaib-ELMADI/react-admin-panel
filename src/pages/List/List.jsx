import React from 'react';

import { Sidebar, Navbar, DataTable } from '../../components';
import './List.scss';



const List = ({ addingType, columnsData }) => {
  return (
    <div className='app__list'>
      <Sidebar />
      <div className="list-container">
        <Navbar />

        <div className='data-table-container'>
          <DataTable addingType={ addingType } columnsData={ columnsData } />
        </div>
      </div>
    </div>
  );
};

export default List;
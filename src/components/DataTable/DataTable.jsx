import React from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

import { rows, columns } from '../../data';
import './DataTable.scss';



const DataTable = () => {
  const cellAction = [{ field: 'action', headerName: 'Action', width: 145,
    renderCell: (params) => {
      return (
        <div className="cell-action">
          <Link to={ `/users/${ params.row.id }` } style={{ textDecoration: 'none' }}>
            <span className='action view'>View</span>
          </Link>
          <Link to={ `/users/${ params.row.id }` } style={{ textDecoration: 'none' }}>
            <span className='action delete'>Delete</span>  
          </Link>
        </div>
      );
    }
  }];

  return (
    <div style={{ width: '100%' }} className='data-table'>
      <div className="data-table-title">
        <h2>Add New User</h2>
        <button>
          <Link to='/users/new' style={{ textDecoration: 'none' }}>Add</Link>
        </button>
      </div>
      <DataGrid
        className='data-table-grid'
        rows={ rows }
        columns={ columns.concat(cellAction) }
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
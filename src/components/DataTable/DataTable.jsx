import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { rows, columns } from '../../data';
import './DataTable.scss';



const DataTable = () => {
  const cellAction = [{ field: 'action', headerName: 'Action', width: 145,
    renderCell: () => {
      return (
        <div className="cell-action">
          <span className='action view'>View</span>  
          <span className='action delete'>Delete</span>  
        </div>
      );
    }
  }];

  return (
    <div style={{ width: '100%' }} className='data-table'>
      <DataGrid
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
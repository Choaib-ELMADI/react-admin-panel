import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

import { db } from '../../config/firebase';
import { columns } from '../../data';
import './DataTable.scss';



const DataTable = () => {
  const [users, setUsers] = useState([]);

  const handleDeleteUser = async (id) => {
    try {
      deleteDoc(doc(db, 'Users', id));
      fetchData();
    }
    catch(err) {
      console.log(err);
    };
  };

  const fetchData = async () => {
    let list = [];

    try {
      const querySnapshot = await getDocs(collection(db, "Users"));
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setUsers(list);
    }
    catch(err) {
      console.error(err);
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  const cellAction = [{ field: 'action', headerName: 'Action', width: 145,
    renderCell: (params) => {
      return (
        <div className="cell-action">
          <Link to={ `/users/${ params.row.id }` } style={{ textDecoration: 'none' }}>
            <span className='action view'>View</span>
          </Link>
          <span 
            className='action delete'
            onClick={ () => handleDeleteUser(params.row.id) }
          >Delete</span>
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
      {
        users.length < 1 ?
        <h1 style={{ color: 'gray' }}>No users right now</h1> :
        <DataGrid
          className='data-table-grid'
          rows={ users }
          columns={ columns.concat(cellAction) }
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          checkboxSelection
        />
      }
    </div>
  );
};

export default DataTable;
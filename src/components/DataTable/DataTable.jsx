import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { deleteUser } from 'firebase/auth';

import { db, auth } from '../../config/firebase';
import './DataTable.scss';



const DataTable = ({ addingType, columnsData }) => {
  const [data, setData] = useState([]);

  const handleDeleteUser = async (id) => {
    try {      
      deleteDoc(doc(db, `${ addingType }s`, id));

      if (addingType.toLowerCase() === 'user') {
        const user = auth.currentUser;
        deleteUser(user)
          .then(() => {
            console.log('User deleted');
          })
          .catch((error) => {
            console.log(error);
          });
      }

      fetchData();
    }
    catch(err) {
      console.log(err);
    };
  };

  const fetchData = async () => {
    let list = [];

    try {
      const querySnapshot = await getDocs(collection(db, `${ addingType }s`));
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list);
    }
    catch(err) {
      console.error(err);
    };
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  const cellAction = [{ field: 'action', headerName: 'Action', width: 145,
    renderCell: (params) => {
      return (
        <div className="cell-action">
          <Link 
            to={ `/${ addingType.toLowerCase() }s/${ params.row.id }` } 
            style={{ textDecoration: 'none' }}
          >
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
        <h2>Add New { addingType }</h2>
        <button>
          <Link to={ `/${ addingType.toLowerCase() }s/new` } style={{ textDecoration: 'none' }}>Add</Link>
        </button>
      </div>
      {
        data.length < 1 ?
        <h1 style={{ color: 'gray' }}>{ `No ${ addingType }s Right Now` }</h1> :
        <DataGrid
          className='data-table-grid'
          rows={ data }
          columns={ columnsData.concat(cellAction) }
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
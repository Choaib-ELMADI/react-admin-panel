import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { tableRows } from '../../data';
import './Table.scss';



const MyTable = () => {
    return (
        <TableContainer component={ Paper } className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='table__cell'>User Id</TableCell>
                        <TableCell className='table__cell'>Product</TableCell>
                        <TableCell className='table__cell'>Customer</TableCell>
                        <TableCell className='table__cell'>Date</TableCell>
                        <TableCell className='table__cell'>Amount</TableCell>
                        <TableCell className='table__cell'>Method</TableCell>
                        <TableCell className='table__cell'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableRows.map((row) => (
                            <TableRow key={ `row-${ row.id }` }>
                                <TableCell className='table__cell'>{ row.userId }</TableCell>
                                <TableCell className='table__cell'>
                                    <div className='product-wrapper-info'>
                                        <img src={ row.img } alt={ row.productName } draggable={ false } />
                                        { row.productName }
                                    </div>
                                </TableCell>
                                <TableCell className='table__cell'>{ row.userName }</TableCell>
                                <TableCell className='table__cell'>{ row.date }</TableCell>
                                <TableCell className='table__cell'>{ row.amount }</TableCell>
                                <TableCell className='table__cell'>{ row.method }</TableCell>
                                <TableCell className='table__cell status'>
                                    <span 
                                        style={{ 
                                            color: row.status === 'approved' ? 'rgb(0, 128, 0)' : 'rgb(255, 0, 0)',
                                            background: row.status === 'approved' ? 'rgba(0, 255, 0, .1)' : 'rgba(255, 0, 0, .1)',
                                        }}
                                    >
                                        { row.status }
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MyTable;
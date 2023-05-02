import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Table.scss';



const MyTable = () => {
    const rows = [
        {
          userId: 1,
          productName: 'iPhone 13',
          img: 'https://assets.stickpng.com/images/61d2f85b92b57c0004c64745.png',
          userName: 'John Doe',
          date: '2023-05-01',
          amount: 999,
          method: 'online payment',
          status: 'approved'
        },
        {
          userId: 2,
          productName: 'Samsung Galaxy S22',
          img: 'https://prod2-media.electroplanet.ma/media/wysiwyg/samsung/images/gallery-base-pink-gold/front.png',
          userName: 'Jane Smith',
          date: '2023-04-30',
          amount: 899,
          method: 'cash on delivery',
          status: 'pending'
        },
        {
          userId: 3,
          productName: 'Macbook Pro M2',
          img: 'https://www.apple.com/v/macbook-pro-13/o/images/specs/mbp_shop__fn4wvksqg5aq_large_2x.png',
          userName: 'Mike Johnson',
          date: '2023-04-29',
          amount: 1499,
          method: 'online payment',
          status: 'approved'
        },
        {
          userId: 4,
          productName: 'Dell XPS 13',
          img: 'https://i.dell.com/das/xa.ashx/global-site-design%20WEB/03979f95-a74d-68d5-7f41-f93476f923f1/1/OriginalPng?id=Dell/Product_Images/Dell_Client_Products/Notebooks/XPS_Notebooks/XPS_13_9350_Non_Touch/global_spi/laptop-xps-13-9350-ubuntu-non-touch-right-hero-504x350.psd',
          userName: 'Sarah Lee',
          date: '2023-04-28',
          amount: 1099,
          method: 'cash on delivery',
          status: 'approved'
        },
        {
          userId: 5,
          productName: 'iPad Pro 12.9',
          img: 'https://fscl01.fonpit.de/devices/98/2298-w320h320.png',
          userName: 'David Kim',
          date: '2023-04-27',
          amount: 799,
          method: 'online payment',
          status: 'approved'
        },
        {
          userId: 6,
          productName: 'Google Pixel 6',
          img: 'https://storage.googleapis.com/alpine-inkwell-325917.appspot.com/devices/pixel-6-header.png',
          userName: 'Emily Chen',
          date: '2023-04-26',
          amount: 699,
          method: 'cash on delivery',
          status: 'approved'
        },
        {
          userId: 7,
          productName: 'Microsoft Surface Laptop 4',
          img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OXzi?ver=3a58',
          userName: 'Tom Lee',
          date: '2023-04-25',
          amount: 1299,
          method: 'online payment',
          status: 'pending'
        },
        {
          userId: 8,
          productName: 'Sony PlayStation 5',
          img: 'https://key.ma/wp-content/uploads/2020/11/Playstation-5-maroc.png',
          userName: 'Kelly Wong',
          date: '2023-04-24',
          amount: 499,
          method: 'cash on delivery',
          status: 'approved'
        },
        {
          userId: 9,
          productName: 'Nintendo Switch OLED',
          img: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_500/ncom/en_US/switch/site-design-update/photo01',
          userName: 'Timothy Ng',
          date: '2023-04-24',
          amount: 499,
          method: 'cash on delivery',
          status: 'approved'
        },
        {
            userId: 10,
            productName: 'Microsoft Surface Laptop 4',
            img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OXzi?ver=3a58',
            userName: 'Tom Lee',
            date: '2023-04-25',
            amount: 1299,
            method: 'online payment',
            status: 'pending'
        },
    ];  

    return (
        <TableContainer component={ Paper } className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>User Id</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>User</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Method</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row) => (
                            <TableRow key={ row.id }>
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
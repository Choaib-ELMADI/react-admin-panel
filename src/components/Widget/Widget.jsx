import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { FaUserAlt, FaShopify, FaBalanceScaleLeft } from 'react-icons/fa';
import { BiMoney } from 'react-icons/bi';
import { query, collection, where, getDocs } from 'firebase/firestore';

import { db } from '../../config/firebase';
import './Widget.scss';



const Widget = ({ type }) => {
  const [amount, setAmount] = useState(0);
  const [diff, setDiff] = useState(0);

  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        query: 'Users',
        isMoney: false,
        link: "See All Users",
        icon: (
          <FaUserAlt className='icon' size={ 30 } style={{ color: '#8739f9', background: '#5c39f933' }} />
        ),
      };
      break;

    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View All Orders",
        icon: (
          <FaShopify className='icon' size={ 30 } style={{ color: '#c651cd', background: '#c751cd33' }} />
        ),
      };
      break;

    case "earnings":
      data = {
        title: "ERNINGS",
        isMoney: true,
        link: "View All Earnings",
        icon: (
          <BiMoney className='icon' size={ 30 } style={{ color: 'rgb(235, 116, 73)', background: 'rgba(235, 116, 73, 0.2)' }} />
        ),
      };
      break;

    case "product":
      data = {
        title: "PRODUCTS",
        query: 'Products',
        isMoney: false,
        link: "View Details",
        icon: (
          <FaBalanceScaleLeft className='icon' size={ 30 } style={{ color: 'rgb(100, 100, 100)', background: 'rgba(201, 201, 201, 0.2)' }} />
        ),
      };
      break;

    default:
      break;
  };

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(db, data.query), 
        where("timeStamp", "<=", today), 
        where("timeStamp", ">", lastMonth)
      );

      const prevMonthQuery = query(
        collection(db, data.query), 
        where("timeStamp", "<=", lastMonth), 
        where("timeStamp", ">", prevMonth)
      );

      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);

      setAmount(lastMonthData.docs.length);
      setDiff((lastMonthData.docs.length - prevMonthData.docs.length) / (prevMonthData.docs.length * 100))
    };

    fetchData();
  }, []);
  

  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{ data.title }</span>
        <span className="counter">{ data.isMoney && '$' }{ amount }</span>
        <Link className='link'>{ data.link }</Link>
      </div>
      <div className="right">
        <span className={ ` ${ diff > 0 ? 'percentage positive' : 'percentage negative' } ` }>
          { diff > 0 && <BsChevronUp className='icon' size={ 21 } /> }
          { diff <= 0 && <BsChevronDown className='icon' size={ 21 } /> }
          <span>{ diff ? diff : 0 }%</span>
        </span>
        { data.icon }
      </div>
    </div>
  );
};

export default Widget;
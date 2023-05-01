import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { FaUserAlt, FaShopify, FaBalanceScaleLeft } from 'react-icons/fa';
import { BiMoney } from 'react-icons/bi';

import './Widget.scss';



const Widget = ({ type, amount, diff }) => {
  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
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

    case "balance":
      data = {
        title: "BALANCE",
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

  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{ data.title }</span>
        <span className="counter">{ data.isMoney && '$' }{ amount }</span>
        <Link className='link'>{ data.link }</Link>
      </div>
      <div className="right">
        <span className={ ` ${ diff >= 35 ? 'percentage positive' : 'percentage negative' } ` }>
          { diff >= 35 && <BsChevronUp className='icon' size={ 21 } /> }
          { diff < 35 && <BsChevronDown className='icon' size={ 21 } /> }
          <span>{ diff }%</span>
        </span>
        { data.icon }
      </div>
    </div>
  );
};

export default Widget;
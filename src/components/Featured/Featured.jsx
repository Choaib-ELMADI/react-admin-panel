import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './Featured.scss';



const Featured = () => {
  const percentage = 72;
  const positive = false;

  return (
    <div className='featured-chart'>
      <div className="header">
        <span>Total Revenue</span>
        <BsThreeDots className='icon' size={ 20 } />
      </div>
      <div className="body">
        <div className="progress-container">
          <CircularProgressbar 
            value={ percentage } 
            text={ `${ percentage }%` } 
            strokeWidth={ 6 }
          />
        </div>
        <div className='sales'>
          <span>Total sales made today</span>
          <h1>$420</h1>
        </div>
        <div className="previous-actions">
          <span>Previous transactions processing. Last payments may not be included.</span>
          <div className="transactions">
            <div className="transaction">
              <span>Target</span>
              <span style={{ color: positive ? 'green' : 'red' }}><BsChevronDown size={ 16 } /> $12.4k</span>
            </div>
            <div className="transaction">
              <span>Last week</span>
              <span style={{ color: !positive ? 'green' : 'red' }}><BsChevronUp size={ 16 } /> $12.4k</span>
            </div>
            <div className="transaction">
              <span>Last month</span>
              <span style={{ color: positive ? 'green' : 'red' }}><BsChevronDown size={ 16 } /> $12.4k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
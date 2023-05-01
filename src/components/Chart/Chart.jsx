import React from 'react';
import { ResponsiveContainer, AreaChart, XAxis, CartesianGrid, Tooltip, Area } from 'recharts';

const data = [
  { name: 'Janu',  total: 1200 },
  { name: 'Febry', total: 1600 },
  { name: 'March', total: 1800 },
  { name: 'April', total: 1400 },
  { name: 'May',   total: 1200 },
  { name: 'June',  total: 1700 },
  { name: 'July',  total: 2000 },
  { name: 'Augu',  total: 1600 },
  { name: 'Sept',  total: 1400 },
  { name: 'Octo',  total: 1800 },
  { name: 'Nove',  total: 2100 },
  { name: 'Dece',  total: 1500 },
];

import './Chart.scss';



const Chart = () => {
  return (
    <div className='normal-chart'>
      <h3 className='chart-title' style={{ marginLeft: '.5rem' }}>Last Year (Revenue)</h3>
      <ResponsiveContainer width='100%' height={ 300 }>
        <AreaChart 
          width={ 730 } height={ 250 } 
          data={ data }
          margin={{ 
            top: 10, 
            right: 10, 
            left: 10,
            bottom: 10 
          }}
        >
          <defs>
            <linearGradient 
              id='total' 
              x1='0' 
              y1='0' 
              x2='0' 
              y2='1'
            >
              <stop offset='5%'  stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0}   />
            </linearGradient>
          </defs>

          <XAxis dataKey='name' stroke='gray' />
          <CartesianGrid strokeDasharray='3 3' className='chartgrid' />
          <Tooltip />
          <Area 
            type='monotone' 
            dataKey='total' 
            stroke='#8739f9' 
            fillOpacity={ 1 } 
            fill='url(#total)' 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
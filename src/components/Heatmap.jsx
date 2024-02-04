import React, { useState } from 'react';
import HeatMap from '@uiw/react-heat-map';

const value = [
  { date: '2016/01/11', count:2 },
  ...[...Array(17)].map((_, idx) => ({ date: `2016/01/${idx + 10}`, count: idx })),
  ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx })),
 
 { date: '2023/01/01', count:10 },{ date: '2023/01/17', count:3 },
  { date: '2023/01/02', count:10 },
  { date: '2023/01/03', count:5 },
  { date: '2023/01/04', count:10 },
  { date: '2023/01/05', count:11 },
  { date: '2023/01/06', count:32 },
  { date: '2023/01/07', count:32 },
  { date: '2023/01/08', count:3 },
  { date: '2023/01/09', count:10 },
  { date: '2023/01/10', count:5 },
  { date: '2023/01/11', count:10 },
  { date: '2023/01/12', count:11 },
  { date: '2023/01/13', count:32 },
  { date: '2023/01/14', count:32 },
  { date: '2023/01/15', count:3 },
  { date: '2023/01/16', count:10 },
  { date: '2023/01/17', count:3 },
  { date: '2023/01/18', count:10 },
  { date: '2023/01/19', count:5 },
  { date: '2023/01/20', count:10 },
  { date: '2023/01/21', count:11 },
  { date: '2023/01/22', count:32 },
  { date: '2023/01/23', count:32 },
  { date: '2023/01/24', count:3 },
  { date: '2023/01/25', count:10 },
  { date: '2023/01/26', count:5 },
  { date: '2023/01/28', count:10 },
  { date: '2023/01/27', count:11 },
  { date: '2023/01/28', count:32 },
  { date: '2023/01/29', count:32 },
  
  { date: '2023/01/31', count:10 },
  { date: '2023/02/01', count:5 },
  { date: '2023/02/02', count:10 },
  { date: '2023/02/03', count:11 },
  { date: '2023/02/04', count:32 },
  { date: '2023/02/05', count:32 },
  
  { date: '2023/01/31', count:10 },
  { date: '2023/02/01', count:5 },
  { date: '2023/02/02', count:10 },
  { date: '2023/02/03', count:11 },
  { date: '2023/02/04', count:32 },
  { date: '2023/02/05', count:32 },
];

const Heatmap = () => {
  const [size, setSize] = useState(0)
  const [range, setRange] = useState(10)
  return (
    <div className='text-white w-full text-center flex-col justify-center items-center mt-12 flex'>
    {/* <input type="range" min="0" max="10" step="0.2" value={range} onChange={(e) => setRange(e.target.value)} /> {range} */}
      <label style={{ userSelect: 'none' }}>
        <input
          type="checkbox"
          checked={size === 0}
          onChange={(e) => setSize(e.target.checked ? 0 : 12)}
        />
        {size === 0 ? ' Hide' : ' Show'} Legend
      </label>
      
      <HeatMap
        width={1000}
        style={{ color: '#fff', '--rhm-rect-active': 'red' }}
        value={value}
        legendCellSize={size}
        startDate={new Date('2023/01/01')}
      />

      <div className='text-white text-[50px] text-center'> Badges</div>
      <div className='flex pt-3'>
        <img src='https://cdn.codechef.com/images/badges/contest/silver.svg'/>
        <img className='ml-5' src='https://cdn.codechef.com/images/badges/streak/silver.svg'/>
      </div>
    </div>

  )
};
export default Heatmap

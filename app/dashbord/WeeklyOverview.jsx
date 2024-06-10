import React, { useState } from 'react';
import GlobalChart from './Chart/GlobalChart';
import { Button } from 'antd';
import GlobalAreaChart from './Chart/GlobalAreaChart';


const data = [
    { name: 'Monday', uv: 300, pv: 400, amt: 100 },
    { name: 'Tuesday', uv: 200, pv: 300, amt: 200 },
    { name: 'Wednesday', uv: 278, pv: 250, amt: 150 },
    { name: 'Thursday', uv: 189, pv: 200, amt: 250 },
    { name: 'Friday', uv: 239, pv: 278, amt: 300 },
    { name: 'Saturday', uv: 349, pv: 350, amt: 400 },
    { name: 'Sunday', uv: 400, pv: 450, amt: 500 },
];
const data1 = [
    { name: 'Monday', uv: 200, pv: 500, amt: 400 },
    { name: 'Tuesday', uv: 300, pv: 200, amt: 400 },
    { name: 'Wednesday', uv: 178, pv: 450, amt: 150 },
    { name: 'Thursday', uv: 389, pv: 100, amt: 150 },
    { name: 'Friday', uv: 439, pv: 478, amt: 200 },
    { name: 'Saturday', uv: 249, pv: 150, amt: 300 },
    { name: 'Sunday', uv: 500, pv: 250, amt: 100 },
];

function WeeklyOverview() {
    const [showRevenue, setShowRevenue] = useState(true);

    return (
        <div>
            <h3 className='text-2xl p-2 text-[#008080] font-bold'>
                Weekly Overview
            </h3>
            <p className=' p-2 text-gray-300'>Mar 14 - Mar 21</p>
            <div className='flex p-2 gap-4'>
                <Button onClick={() => setShowRevenue(true)} type='dashed'>Revenue</Button>
                <Button onClick={() => setShowRevenue(false)} type='dashed'>Appointments</Button>
            </div>
            <div className='grid grid-rows-1 md:grid-cols-12 md:grid-rows-none'>
                <div className='md:col-span-7'>
                    {showRevenue ? (
                        <GlobalChart data={data} />
                    ) : (
                        <GlobalChart data={data1} />
                    )}
                </div>
                <div className='md:col-span-5'>
                   <GlobalAreaChart/>
                </div>
            </div>
        </div>
    );
}

export default WeeklyOverview;

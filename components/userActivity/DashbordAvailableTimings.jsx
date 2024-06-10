"use client"

import { useState } from "react";
import { scheduleDateAndTIme } from "../DataPage/DataPage";
import { Button } from "antd";

function DashbordAvailableTimings() {
    const [selectedDay, setSelectedDay] = useState('Monday');
    const handleDayClick = (day) => {
        setSelectedDay(day);
      };
  return (
    <>
        <div style={{display:'flex',flexWrap:'wrap',gap:'10px',margin:'10px',justifyContent:'space-between'}}>
        {scheduleDateAndTIme.map((item) => (
          <div key={item.day}>
            <Button
              type='dashed'
              onClick={() => handleDayClick(item.day)}
              className={selectedDay === item.day ? 'bg-blue-200 font-bold' : 'font-bold'}
            >
              {item.day}
            </Button>
          </div>
        ))}
      </div>
      <div className='mt-4'>
        <div style={{display:'flex',flexWrap:'wrap'}}>
        {scheduleDateAndTIme.find((item) => item.day === selectedDay)?.slots.map((slot,index) => <div key={index} style={{display:'flex',flexWrap:'wrap'}}>
            <Button  className='bg-[#008080] font-bold text-white m-3 '><i class="text-white mx-2 fa-solid fa-clock"></i>{slot}</Button>
          </div>)}
        </div>
      </div>
    </>
  )
}

export default DashbordAvailableTimings
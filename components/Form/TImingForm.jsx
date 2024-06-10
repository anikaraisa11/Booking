"use client"
import React, { useState } from 'react';
import { Select, TimePicker } from 'antd';
import dayjs from 'dayjs';
import GlobalButton from '../Global/GlobalButton';
import { TimingOptions } from '../GlobalOptions/GlobalOptions';

function TimingForm() {
  const [time, setTime] = useState(dayjs('00:00:00', 'HH:mm:ss'));

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Time:', time.format('HH:mm:ss'));
  };

  const onChange = (time) => {
    setTime(time);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <p className='text-center font-bold text-[#008080] my-5'>Add New Timing</p>
      <form onSubmit={onSubmit}>
        <div className='grid md:grid-cols-2 gap-5'>
          <div>
            <label>Start Time</label>
            <TimePicker
              className='w-full'
              value={time}
              size='small'
              onChange={onChange}
              defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
            />
          </div>
          <div>
            <label>End Time</label>
            <TimePicker
              className='w-full'
              value={time}
              size='small'
              onChange={onChange}
              defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
            />
          </div>
          <div>
            <label>Appointment Intervals</label>
            <Select
            className='w-full'
              defaultValue="10 Minute"
              
              onChange={handleChange}
              options={TimingOptions}
            />
          </div>
          <div>
            <label>Appointment Durations</label>
            <Select
            className='w-full'
              defaultValue="10 Minute"
              
              onChange={handleChange}
              options={TimingOptions}
            />
          </div>
        </div>
        <br />
        <div className='text-center'><GlobalButton text="Add New Time" /></div>
      </form>
    </>
  );
}

export default TimingForm;

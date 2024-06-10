import { Modal } from 'antd'
import React from 'react'

function DoctorModel({ isModalOpen, setIsModalOpen, businessHours }) {
    const showModal = () => { setIsModalOpen(true); };
    const handleOk = () => { setIsModalOpen(false); };
    const handleCancel = () => { setIsModalOpen(false); };
    

    return (

        <Modal title="patient Scheduler" className='text-text-[#008080]' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

            <div className='border flex justify-between p-5'>
                <b className='text-[#008080]'>Friday </b>  <b className='text-gray-500'>{businessHours.Friday}</b>
            </div>

            <div className='border flex justify-between p-5'>
                <b className='text-[#008080]'>Monday </b>  <b className='text-gray-500'>{businessHours.Monday}</b>
            </div>

            <div className='border flex justify-between p-5'>
                <b className='text-[#008080]'>Saturday </b>  <b className='text-gray-500'>{businessHours.Saturday}</b>
            </div>

            <div className='border flex justify-between p-5'>
                <b className='text-[#008080]'>Thursday </b>  <b className='text-gray-500'>{businessHours.Thursday}</b>
            </div>

            <div className='border flex justify-between p-5'>
                <b className='text-[#008080]'>Tuesday </b>  <b className='text-gray-500'>{businessHours.Tuesday}</b>
            </div>

            <div className='border flex justify-between p-5'>
                <b className='text-[#008080]'>Wednesday </b>  <b className='text-gray-500'>{businessHours.Wednesday}</b>
            </div>

        </Modal>

    )
}

export default DoctorModel
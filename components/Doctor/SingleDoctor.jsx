import Image from 'next/image';
import { useState } from 'react';
import DoctorModel from './DoctorModel';
import './Doctor.css'
import Link from 'next/link';

function SingleDoctor({ item }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => { setIsModalOpen(true); };
    const handleOk = () => { setIsModalOpen(false); };
    const handleCancel = () => { setIsModalOpen(false); };

    const { id } = item;
   
    return (
        <div className='mt-10 '>
            <div className='m-5 relative'>
            <Link href={`/doctor/${id}`}>
                    <Image src={item?.img} className='rounded-lg' width={500} height={500} alt="image" />
                </Link>
                <h4 className='text-bold absolute top-2 right-2  bg-white px-2 py-1 rounded'>{item?.amount}</h4>
                <div className='bg-white py-4'>
                    <div className='flex justify-between items-center rounded-lg px-2  gap-1'>
                        <div className='flex'>
                            <i className="fa-solid mt-1 fa-star text-yellow-400"></i>
                            <p className='px-2 text-gray text-gray-500'>{item?.rating}</p>
                        </div>
                        

                        <div className='flex items-center gap-3 relative '>
                            <i className="fa-solid mt-1 fa-circle-info text-[#2CB1EC]" onClick={showModal}></i>
                            <i className="fa-regular fa-heart text-[#2CB1EC]"></i>
                            <span className=' activeDoctor'>.</span>
                        </div>

                        <DoctorModel isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} businessHours={item.businessHours} />
                    </div>
                    <h3 className='text-xl px-2 text-bold'>{item?.specialist?.slice(0, 15)}</h3>

                    <p className='text-gray px-2'>{item.occupation}</p>
                    <div className='text-[12px] text-gray-500 p-2'>{item?.overview.slice(0,80)}</div>
                    <div className='p-2 flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p>{item?.country} {item?.city}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleDoctor
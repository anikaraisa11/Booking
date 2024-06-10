import Image from 'next/image';
import React from 'react';
import Rating from 'react-rating';
import './DoctorComponents.css';
import Link from 'next/link';
import GlobalButton from '../Global/GlobalButton';


function SingleDoctorInfo({ item,viewMode }) {
    const { name, id, title, position, ratings, location, image, personalImage, like, comments, amount, aboutMe, reviews, businessHours } = item;
   


    return <>
        <div className='grid md:grid-cols-3 grid-cols-1 border p-5 mt-5 rounded-lg mb-5 items-center gap-4'>
            <Image src={personalImage} width={500} height={500} alt="image" />
            <div>
                <h4 className='text-2xl'>{name}</h4>
                <small className='text-gray-600 font-medium'>{title}</small>
                <p className='text-[#2CB8F1] font-bold'>{position}</p>
                <p>
                    <Rating
                        placeholderRating={3.5}
                        emptySymbol={<i className="text-[#F7C000]  fa-regular fa-star"></i>}
                        placeholderSymbol={<i className="text-[#F7C000] fa-solid fa-star"></i>}
                        fullSymbol={<i className="text-[#F7C000] fa-solid fa-star"></i>}
                    />
                    ({ratings})
                </p>
                <p className='text-gray-500 py-2'>
                    <i className="mr-1 fa-solid fa-location-dot"></i>{location}
                </p>
                <div className='flex mt-2 gap-2'>
                    <button className='border m-2 p-2 rounded-md mb-8'>Dental</button>
                    <button className='border m-2 p-2 rounded-md mb-8'>Whitening</button>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div><i className="text-gray-500 m-2 fa-solid fa-thumbs-up"></i>{like}</div>
                <div><i className="text-gray-500 m-2 fa-regular fa-comment"></i>{comments} Feedback</div>
                <div><i className="text-gray-500 m-2 fa-solid fa-location-dot"></i>{location} Feedback</div>
                <div><i className="text-gray-500 m-2  fa-solid fa-dollar-sign"></i>{amount} Feedback</div>
                {viewMode === 'list' ? (
                    <div className='flex flex-col gap-2 mt-2'>
                        <Link href={`/doctor/${id}`}>
                            <button className='border m-2 p-2 rounded-md bg-[#006666] text-white hover:bg-white hover:text-[#2CB8F1] hover:border-[#006666]'>View Profile</button>
                        </Link>
                        <Link href={`/booking/${id}`}>
                            <button className='border m-2 p-2 rounded-md bg-[#006666] text-white hover:bg-white hover:text-[#2CB8F1] hover:border-[#006666]'>Book Now</button>
                        </Link>
                    </div>
                ) : (
                   <div className='flex mt-2 gap-2 '>
                    <Link href={`/doctor/${id}`}>
                        <button className=' border m-2 p-2 relative right-40 rounded-md mt-36 bg-[#006666] text-white hover:bg-white hover:text-[#006666] hover:border-[#66b2b2]  h-10 w-28'> View Profile </button>
                    </Link>
                    <Link href={`/booking/${id}`}>
                        <button className=' border m-2 p-2 relative right-36 rounded-md mt-36  bg-[#006666] text-white hover:bg-white hover:text-[#006666] hover:border-[#66b2b2]  h-10 w-24'>Book Now </button>
                    </Link>
                </div>
                )}
            </div>
        </div>

    </>;
}

export default SingleDoctorInfo;

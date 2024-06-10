"use client"
import Image from 'next/image';
import svg from '../../src/assets/img/a.svg';
import bannerImg from '../../src/assets/img/nurse-doctor.png';
import meetDoctor from '../../src/assets/img/more doctor.png';
import sideDoctor from '../../src/assets/img/rendomDoctor.jpg (1).png';
import './Banner.css';
import BannerForm from './BannerForm';
import GlobalButton from '../Global/GlobalButton';




function Banner() { 
    return (
        <div className='banner'>
            <div className='customContainer mx-auto'>
                <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center '>
                    <div className='py-10 relative'>
                        <div className='flex justify-end'><Image src={svg} alt="Banner Icon" height={70} width={70} /></div>
                        <div>
                            <h3 className=' font-bold text-[48px] '>Consult <span className='text-[#008080]'>Best Doctors</span> <br /> Your Nearby Location.</h3>
                            <h4 className='mt-5 mb-5' style={{ fontSize: '20px', color: '#7B818D' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h4>
                            <GlobalButton text="Start a Consult" />
                        </div>
                        <div className='relative mt-5'>
                            <BannerForm/>
                        </div>
                    </div>
                    <div className='mx-auto bannerContainer'>
                        <div className='leftBannerAnimation animationdoctor' >
                            <div className='flex items-center gap-3'>
                                <i className="fa-solid fa-square-check" style={{color:'#008080',fontSize:'22px'}} ></i>
                                <p>Regular Checkup</p>
                            </div>
                        </div>
                        <Image src={bannerImg} width={450} height={450} style={{zIndex:'10'}} alt="image" />
                        <div className='rightBannerAnimation animationbooking'>
                            <div className="card p-3 text-center bg-white rounded-lg">
                                <div>
                                    <Image src={sideDoctor} height={60} width={60} style={{ borderRadius: '50%',textAlign:'center',margin:"0 auto" }} alt="image" />
                                </div>
                                <h3 className='text-center'>Jhon Doe</h3>
                                <p className='text-gray-500 text-center'>MBBS Cardiologist</p>
                                <GlobalButton text="Book Now" modifyclassName="w-[120px] text-[18px] p-3 mt-4"/>
                            </div>
                        </div>
                        <div className='p-5 meetDoctor animationbooking'>
                            <Image src={meetDoctor} height={270} width={280} style={{textAlign:'end' }} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;

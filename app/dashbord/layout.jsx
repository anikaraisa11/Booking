"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import './dashboard.css'
import Header from "@/components/Header/Header";
import dashbrodDoctorImage from '../../src/assets/img/dashbrod-doctor-image.jpg'
import badge from '../../src/assets/img/badge-check.svg'
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation'
import { DoctorDashboardMenuData, UserDashboardMenuData } from "@/components/MenuData/MenuData";

function Layout({ children }) {
  const { user, token } = useSelector(state => state?.auth);
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (!user?.user_type) {
      router.push('/');
    }
  }, [user, router]);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-3 border-r">
              <div className="h-[120px] relative dashbrodBackground">
                <div className="mx-auto text-center">
                  <Image
                    className="dashbrodImg"
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                    width={120}
                    src={dashbrodDoctorImage}
                    height={120}
                    alt="Doctor"
                  />
                </div>
              </div>
              <div className='mt-14 mx-4'>
                {/* profile Info */}
                <div className="text-center">
                  <div className="flex gap-2 justify-center items-center">
                    <h3 className="text-2xl font-bold">{user?.name}</h3>
                    <Image width={15} src={badge} height={15} alt="Badge" />
                  </div>
                  <p className="text-gray-500">BDS, MDS - Oral & Maxillofacial Surgery</p>
                </div>
                {/* profile Info */}
                {user?.user_type === 'adviser' && (
                  <ul>
                    {DoctorDashboardMenuData.map((item, index) => (
                      <li className='py-3 px-4 menuLi text-[#666666] flex gap-4 items-center' key={index}>
                        <i className={item?.icon} style={{ fontSize: '18px', color: '#008080' }}></i>
                        <Link href={`${item?.link}`}>
                           <small className='font-medium'>{item.name}</small> 
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {user?.user_type === 'client' && (
                  <ul>
                    {UserDashboardMenuData.map((item, index) => (
                      <li className='py-3 px-4 menuLi text-[#666666] flex gap-4 items-center' key={index}>
                        <i className={item?.icon} style={{ fontSize: '18px', color: '#008080' }}></i>
                        <Link href={`${item?.link}`}>
                          <small className='font-medium'>{item.name}</small>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;

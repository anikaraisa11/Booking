import { navs } from '@/config/navConfig';
import Link from 'next/link';
import React, { useState } from 'react';

function DesktopMenu() {
  const [activeMeghaMenu, setActiveMeghaMenu] = useState(null);
  
  return (
    <div>
      <ul className='flex gap-5'>
        {navs.map((item) => (
          <li key={item.id}>
            <Link href={item.links}  className='text-[20px] text-gray-600 font-medium hover:text-[#008080]'
            >
              {item.title}
              {item.child_navs && ( 
                <div className='extraMenu'>
                  <div className='grid grid-cols-1 gap-2'>
                    {item.child_navs.map((childNavItem) => (
                      <div className='mt-2 flex singleLi items-center gap-3 p-4' key={childNavItem.id}>
                        <i className={`${childNavItem.icon} text-[18px] text-[#008080]`}></i>
                        <p className='text-[#008080] text-[18px]'>{childNavItem.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DesktopMenu;

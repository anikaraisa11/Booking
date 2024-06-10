import { UserAddOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';
import { Dropdown, Space } from 'antd';

function UserPersonalInfo() {
    const items = [
        {
          label: <Link href='/login'>Login</Link>,
          key: '0',
        },
        {
          label: <Link href='/register'>Registration</Link>,
          key: '1',
        },
        {
          label: <Link href='/changepassword'>Change Password</Link>,
          key: '2',
        },
        {
          label: <Link href='/forgotpassword'>Forget Password</Link>,
          key: '3',
        },

    
        
      ];
  return (
   
<Dropdown
    className='text-[#008080]'
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <UserOutlined className="text-[#008080] text-[26px] cursor-pointer" />
      </Space>
    </a>
  </Dropdown>
  )
}

export default UserPersonalInfo
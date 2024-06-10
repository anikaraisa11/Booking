import { UserOutlined, DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "@/lib/redux/features/auth/AuthSlice";

function UserPersonalInfo() {
  const { user, token } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  
  const menuItems = [
    token
      ? {
          label: <a onClick={handleLogout}>Logout</a>,
          key: '01',
        }
      : {
          label: <Link href='/login'>Login</Link>,
          key: '02',
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
    {
      label: <Link href={`/dashbord/${user?.user_type}`}>My Profile</Link>,
      key: '4',
    },
  ];

  const menu = (
    <Menu>
      {menuItems.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <UserOutlined className="text-[#008080] text-[26px] cursor-pointer" />
          {/* <DownOutlined /> */}
        </Space>
      </a>
    </Dropdown>
  );
}

export default UserPersonalInfo;

import { UserAddOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';
import { Dropdown, Space } from 'antd';
import { ShoppingFilled  } from '@ant-design/icons';

function Cart() {
    const items = [
        
    
        
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
      <ShoppingFilled  className="text-[#008080] text-[26px] cursor-pointer" />
      </Space>
    </a>
  </Dropdown>
  )
}

export default Cart
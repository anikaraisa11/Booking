
import React from 'react';
import {  Badge, Dropdown,Avatar, Space, List } from 'antd';
import { ShoppingFilled  } from '@ant-design/icons';
import Link from 'next/link';
import { CloseCircleFilled } from '@ant-design/icons';

function Cart() {
  const cartCount = 6;
    const carts = [
        
      {
        id: 1,
        avatar: 'https://picsum.photos/200', 
        name: 'PainRelief 500mg Tablets',
        price: '$350',
        quantity: '4',
        
    },  
    {
      id: 2,
      avatar: 'https://picsum.photos/200', 
      name: 'PainRelief 500mg Tablets',
      price: 'PainRelief Tablets',
      quantity: '3',
      
  },  

    // Add more notifications as needed
];
const renderItem = (item) => (
  <List.Item className="hover:bg-gray-100 w-80 p-4 border-b border-gray-200 relative">
    <List.Item.Meta
      avatar={<Avatar src={item.avatar} />}
      description={
        <div className="flex justify-between items-center">
          <div>
            <Link href={`/user/${item.id}`} passHref>
              <div className="font-bold text-gray-500">{item.name}</div>
            </Link>
            <div className="text-blue-500">Price: {item.price} Quantity: {item.quantity}</div>
          </div>
          <CloseCircleFilled className="text-red-500 absolute top-1/2 transform -translate-y-1/2 right-4" />
        </div>
      }
    />
  </List.Item>
);
return (
  <Dropdown
    overlay={
      <div className="bg-zinc-50 p-5 py-3 mt-6 max-h-[350px]  relative;">
        <div className="font-semibold m-3">
        <h5>Your Cart Detail</h5>
          </div>
        <List
          itemLayout="horizontal"
          dataSource={carts}
          renderItem={renderItem}
        />
      </div>
    }
    trigger={['click']}
  >
    <div className="cursor-pointer">
      <Space>
        <Badge count={cartCount} overflowCount={99}>
          <ShoppingFilled className="text-[#008080] text-2xl" />
        </Badge>
      </Space>
    </div>
  </Dropdown>
);
}

export default Cart
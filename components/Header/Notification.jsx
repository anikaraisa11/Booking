
import Link from 'next/link';
import React from 'react';
import { Badge, Dropdown, Space, Avatar, List } from 'antd';
import { BellFilled } from '@ant-design/icons';


function Notification() {
  const notificationCount = 5;
    const notifications = [
        
      {
        id: 1,
        avatar: 'https://picsum.photos/200',
        details: 'Notification details 1',
        time: '5 minutes ago',
    },
    {
        id: 2,
        avatar: 'https://picsum.photos/200',
        details: 'Notification details 2',
        time: '10 minutes ago',
    },
    {
      id: 3,
      avatar: 'https://picsum.photos/200',
      details: 'Notification details 2',
      time: '10 minutes ago',
  },
      {
        id: 4,
        avatar: 'https://picsum.photos/200',
        details: 'Notification details 2',
        time: '10 minutes ago',
    },
      {
        id: 5,
        avatar: 'https://picsum.photos/200',
        details: 'Notification details 2',
        time: '10 minutes ago',
      },

    // Add more notifications as needed
];
const renderItem = (item) => (
  <List.Item className="hover:bg-gray-100 w-80 p-4 border-b border-gray-200">
    <List.Item.Meta
      avatar={<Avatar src={item.avatar} className="w-30 h-30 rounded-full"  />}
      title={<Link href={`/user/${item.id}`} passHref><div className="text-blue-500">{item.details}</div></Link>}
      description={<div className="text-gray-500">{item.time}</div>}
    />
  </List.Item>
);

return (
  <Dropdown
    overlay={
      <div className="bg-zinc-50 p-5 py-3 mt-6 max-h-[250px] overflow-y-auto relative;">
        <div className="font-semibold m-3">
        <h5>Notification</h5>
          </div>
        <List
          itemLayout="horizontal"
          dataSource={notifications}
          renderItem={renderItem}
        />
      </div>
    }
    trigger={['click']}
  >
    <div className="cursor-pointer">
      <Space>
        <Badge count={notificationCount} overflowCount={99}>
          <BellFilled className="text-[#008080] text-2xl" />
        </Badge>
      </Space>
    </div>
  </Dropdown>
);
}

export default Notification;
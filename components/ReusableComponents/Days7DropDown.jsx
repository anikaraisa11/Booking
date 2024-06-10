"use client";

import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Menu } from 'antd';
import React from 'react';

function Days7DropDown() {
    const items = [
        {
            label: 'Last 2 Weeks',
            key: '0',
        },
        {
            label: 'Last 3 Weeks',
            key: '1',
        },
        {
            label: 'Last Month',
            key: '2',
        },
    ];

    const handleItemClick = (e) => {
        e.preventDefault();
        // Add your logic here for handling the click event
        console.log('Dropdown item clicked');
    };

    const menu = (
        <Menu>
            {items.map(item => (
                <Menu.Item key={item.key} onClick={handleItemClick}>
                    {item.label}
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a href="/#" onClick={(e) => e.preventDefault()}>
                <Space className="border p-2 rounded-lg">
                    Last 7 Days <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    );
}

export default Days7DropDown;

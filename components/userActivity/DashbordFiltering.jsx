"use client"
import { Button, Dropdown, Input, Radio, Space } from "antd";

const items = [
    {
        label: (
            <div className='flex gap-2 items-center'>
                <p>Name</p>
                <Input placeholder='Search' />
            </div>
        ),
        key: '0',
    },
    {
        label: (
            <>
                <p>Appointments Type</p>
                <Radio defaultChecked>All Type</Radio> <br />
                <Radio>Video Call</Radio> <br />
                <Radio>Audio Call</Radio> <br />
                <Radio>Chat</Radio> <br />
            </>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <>
                <p>Appointments Type</p>
                <Radio defaultChecked>All Visit</Radio> <br />
                <Radio>General </Radio> <br />
                <Radio>Consultation</Radio> <br />
                <Radio>Follow-up</Radio> <br />
                <Radio>Direct Visit</Radio>
            </>
        ),
        key: '3',
    },
];
function DashbordFiltering() {
    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <Button type="dashed">Filter</Button>
                    </Space>
                </a>
            </Dropdown>
        </>
    )
}

export default DashbordFiltering
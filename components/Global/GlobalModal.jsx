"use client";
import { Button, Modal } from 'antd';
import React, { useState } from 'react';

function GlobalModal({ children }) {
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    return (
        <>
            <Button type="primary" className='bg-[#008080] ' onClick={showModal}>
                Add New Time Slots
            </Button>
            <Modal
                open={open}
                footer={null}
                onCancel={handleCancel}
            >
                {children}
            </Modal>
        </>
    );
}

export default GlobalModal;

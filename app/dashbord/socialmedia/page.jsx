import { Button, Input } from 'antd'
import React from 'react'

function SocialMedia() {
  return (
    <div className='md:w-[60%] sm:w-[70%] w-[90%] mx-auto'>
        <div className='flex mt-5 gap-3'>
            <Input placeholder='Facebook Profile Link'/>
            <Button type='dashed'>Update Facebook</Button>
        </div>
        <div className='flex mt-5 gap-3'>
            <Input placeholder='Instagram Profile Link'/>
            <Button type='dashed'>Update Instagram</Button>
        </div>
        <div className='flex mt-5 gap-3'>
            <Input placeholder='Linkedin Profile Link'/>
            <Button type='dashed'>Update Linkedin</Button>
        </div>
        <div className='flex mt-5 gap-3'>
            <Input placeholder='Twitter Profile Link'/>
            <Button type='dashed'>Update Twitter</Button>
        </div>
    </div>
  )
}

export default SocialMedia
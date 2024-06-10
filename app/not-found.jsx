import React from 'react'

function NotFound() {
  return (
    <div className='customContainer'>
      <div className='flex flex-col justify-center items-center w-full h-[80vh] '>
        <h1 className='text-2xl text-red-500'>
          The requested resource was not found. <br />
        </h1> <br />
        <h1 className='text-4xl text-red-600'>
          NOT FOUND 404
        </h1>
      </div>
    </div>
  )
}

export default NotFound
'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

function SearchDoctor({item}) {
   console.log(item)
  return (
    <div className='my-10'>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
          <div className='border p-2 m-2'>
              <div>rubel</div>
          </div>
        </div>
    </div>
  )
}

export default SearchDoctor
import React from 'react'

function Error({ErrorMessage}) {
  return (
    <div className='font-bold text-red-500'>{ErrorMessage}</div>
  )
}

export default Error
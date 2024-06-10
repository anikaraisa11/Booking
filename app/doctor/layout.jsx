// import CustomHeader from '@/components/CustomNavigation/CustomHeader'
import Header from '@/components/Header/Header'
import React from 'react'

function layout({children}) {
  return (
    <>
        {/* <CustomHeader/> */}
        <Header/>
        {children}
    </>
  )
}

export default layout
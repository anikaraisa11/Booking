"use client"
import Header from '@/components/Header/Header'
import { useGetSearchDoctorQuery } from '@/lib/redux/features/searchDoctors/searchDoctors';
import SearchDoctor from '@/components/SearchDoctor/SearchDoctor'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Loading from '@/components/Loading/Loading';
import Error from '@/components/Error/Error';


function page() {
  const searchParams = useSearchParams()
  const query = searchParams.get('search')
  const {isLoading,isError, data } = useGetSearchDoctorQuery(query);
  
  let content ;

  if(isLoading){
    content = <Loading/>
  }
  if(!isLoading && isError){
    content = <Error ErrorMessage="somthing went wrong" />
  }
  if(!isLoading && !isError && data?.length === 0){
    content = <Error ErrorMessage="no data found" />
  }
  console.log(data)
  if(!isLoading && !isError && data?.data?.length > 0){
    content = data?.data?.map((item)=> <SearchDoctor item={item} />)
  }

  return (
    <div>
        <Header/>
        <div className='container mx-auto'>
            {content}
        </div>
    </div>
  )
}


export default page
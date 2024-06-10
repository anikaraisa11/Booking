"use client"
import Error from '@/components/Error/Error'
import GlobalButton from '@/components/Global/GlobalButton'
import GlobalForm from '@/components/Global/GlobalForm'
import GlobalSelect from '@/components/Global/GlobalSelect'
import Loading from '@/components/Loading/Loading'
import { useCategoryQuery } from '@/lib/redux/features/category/CategoryApi'
import { useServiceDataQuery } from '@/lib/redux/features/service/serviceApi'
import { useSpecialtiesDataQuery } from '@/lib/redux/features/specialties/specialtiesApi'
import React from 'react'

function page() {
    const {isLoading:serviceLoading,isError:serviceError,data:serviceData} = useServiceDataQuery()
    const {isLoading:specialistLoading,isError:specialistError,data:specialData} = useSpecialtiesDataQuery(serviceData ? {} : { skip: true })
    const {isLoading:categoryLoading,isError:categoryError,data:categoryData} = useCategoryQuery(specialData ? {} : { skip: true })
    let serviceOptions 
    let specialitisOptions 
    let categoryOptions 

    const onSubmit = async(data)=>{
        console.log(data)
    }

    // service 
    if(serviceLoading){
        serviceOptions = <Loading/>
    }
    if(!serviceLoading && serviceError){
        serviceOptions = <Error ErrorMessage="somthing went wrong"/>
    }
    if(!serviceLoading && !serviceError && serviceData?.data?.length === 0){
        serviceOptions = <Error ErrorMessage="No Data Found"/>
    }
    if(!serviceLoading && !serviceError && serviceData?.data.length > 0){
        serviceOptions =  serviceData?.data?.map((item)=>({value: item?.name,label: item?.name}))
    }

    // specialities 
    if(specialistLoading){
        serviceOptions = <Loading/>
    }
    if(!serviceLoading && specialistError){
        specialitisOptions = <Error ErrorMessage="somthing went wrong"/>
    }
    if(!serviceLoading && !specialistError && specialData?.data?.length === 0){
        specialitisOptions = <Error ErrorMessage="No Data Found"/>
    }
    if(!serviceLoading && !serviceError && specialData?.data?.length > 0){
        specialitisOptions =  specialData?.data?.map((item)=>({value: item?.name,label: item?.name}))
    }


    // Category 
    if(categoryLoading){
        categoryOptions = <Loading/>
    }
    if(!categoryLoading && categoryError){
        categoryOptions = <Error ErrorMessage="somthing went wrong"/>
    }
    if(!categoryLoading && !categoryError && categoryData?.data?.length === 0){
        categoryOptions = <Error ErrorMessage="No Data Found"/>
    }
    if(!categoryLoading && !categoryError && categoryData?.data?.length > 0){
        categoryOptions =  categoryData?.data?.map((item)=>({value: item?.name,label: item?.name}))
    }

    const GenderOptions = [
        {
          value: 'male',
          label: 'Male',
        },
        {
          value: 'female',
          label: 'Female',
        },
        {
          value: 'others',
          label: 'Others',
        },
      ];
      

  

   
  return (
    <div className='container'>
        <h3 className='text-center text-2xl font-bold'>Community Care</h3> <hr/>
                <div className='w-[80%] mx-auto'>
                <GlobalForm onSubmit={onSubmit}>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <GlobalSelect defaultValue="Select Service" name="service" options={serviceOptions} label="Select Service" />
                    <GlobalSelect defaultValue="Select Specialities" name="specialites" options={specialitisOptions} label="Select Service" />
                    <GlobalSelect defaultValue="Select Category" name="category" options={categoryOptions} label="Select Service" />
                    <GlobalSelect defaultValue="" name="category" options={categoryOptions} label="Select Service" />
                    <GlobalSelect defaultValue="" name="category" options={categoryOptions} label="Select Service" />
                    <GlobalSelect defaultValue="Others" name="gender" options={GenderOptions} label="Gender" />

                    </div>

                    <div className='mt-5 text-center mx-auto'>
                        <GlobalButton type="submit" text="Submit" />
                    </div>
                </GlobalForm>
                </div>
    </div>
  )
} 

export default page
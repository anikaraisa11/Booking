"use client"
import PageTitle from '@/components/PageTitle/PageTitle'
import { useParams } from 'next/navigation'
import DoctorPersonalInformation from '@/components/DoctorComponents/DoctorPersonalInformation'
import './../../../components/DoctorComponents/DoctorComponents.css'
import DoctorNavTabs from '@/components/DoctorComponents/DoctorNavTabs/DoctorNavTabs'
import { doctorInformationData } from '@/components/DoctorComponents/doctorData'

function page() {
    const { id } = useParams()
    const singleDataForDoctor = doctorInformationData?.filter((item, index) => Number(item.id) === Number(id))
    const data = singleDataForDoctor[0]
    return (
        <>
            <PageTitle headline="Doctor Profile" hrefLink={`/doctor/id`} title="Doctor Profile" />
            <div className='customContainer py-10'>
                <div className='border'>
                    <DoctorPersonalInformation data={data} />
                </div>
                 <DoctorNavTabs data={data} /> 
            </div>
        </>
    )
}

export default page
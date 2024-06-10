import { Button,DatePicker} from 'antd';
import DashbordAppointmentSearch from '@/components/userActivity/DashbordAppointmentSearch';
import DashbordFiltering from '@/components/userActivity/DashbordFiltering';
import GlobalTable from '@/components/Global/GlobalTable';
import { AppointmentColumns } from '@/components/ColumnsPage/ColumnsPage';
import { appointmentdata } from '@/components/DataPage/DataPage';





function Appointments() {
    const { RangePicker } = DatePicker;
    return (
        <div className='w-full'>
            <div className='flex flex-col md:flex-row px-5 py-4 justify-between items-center '>
                <h4 className='font-medium mb-4 md:mb-0'>Appointments</h4>

                <div className='relative w-full md:w-auto'>
                    <DashbordAppointmentSearch/>
                </div>
            </div> 
            <hr />
            <div className='grid mx-3 md:grid-cols-2 gap-4 my-4 justify-center'>
                <div className='flex flex-wrap gap-4'>
                    <Button type="dashed">Upcoming <span className='bg-[#008080] w-[22px] h-[22px] mx-2 text-white' style={{ borderRadius: '50%' }}>23</span></Button>
                    <Button type="dashed">Cancelled <span className='bg-red-500 w-[22px] h-[22px] mx-2 text-white' style={{ borderRadius: '50%' }}>28</span></Button>
                    <Button type="dashed">Completed <span className='bg-green-600 w-[22px] h-[22px] mx-2 text-white' style={{ borderRadius: '50%' }}>15</span></Button>
                </div>
                <div className='flex gap-3'>
                    <DashbordFiltering/>
                    {/* <RangePicker style={{ height: '30px', padding: '8px' }} /> */}
                </div>
            </div>
            <GlobalTable scroll={{ x: 'max-content' }} columns={AppointmentColumns} dataSource={appointmentdata} />
        </div>
    )
}

export default Appointments;

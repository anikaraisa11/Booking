"use client"
import { RequestPagecolumns } from '@/components/ColumnsPage/ColumnsPage';
import { requestPageData } from '@/components/DataPage/DataPage';
import GlobalTable from '@/components/Global/GlobalTable';
import Days7DropDown from '../../../components/ReusableComponents/Days7DropDown';


function DoctorRequest() {
    return (
        <>
            <div className='flex my-5 justify-between items-center'>
                <h4 className='mx-2 font-medium'>Requests</h4>
                <Days7DropDown />
            </div>
            <GlobalTable columns={RequestPagecolumns} dataSource={requestPageData} />
        </>
    );
}

export default DoctorRequest;

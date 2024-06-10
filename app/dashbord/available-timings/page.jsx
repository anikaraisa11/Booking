import { Button } from 'antd';
import DashbordAvailableTimings from '@/components/userActivity/DashbordAvailableTimings';
import GlobalModal from '@/components/Global/GlobalModal';
import TimingForm from '@/components/Form/TImingForm';
 

function AvailableTimings() {
  return (
    <div className='m-5 p-5 border rounded-xl'>
      <div className='flex justify-between'>
        <GlobalModal>
          <TimingForm />
        </GlobalModal>
        <Button className='bg-red-500 text-white font-bold'>Delete Time Slots</Button>
      </div>
      <br />
      <DashbordAvailableTimings />
    </div>
  );
}

export default AvailableTimings;

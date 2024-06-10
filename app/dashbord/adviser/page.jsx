"use client"
import GlobalTable from "@/components/Global/GlobalTable";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import WeeklyOverview from "../WeeklyOverview";
import Days7DropDown from "@/components/ReusableComponents/Days7DropDown";
import { democolumns } from "@/components/ColumnsPage/ColumnsPage";
import { demodata } from "@/components/DataPage/DataPage";

function page() {
    const extraData = [
        {
          value: 978,
          icon: "fas fa-users",
          description: "Total Patients",
          persent: "15%",
          change: "From Last Week",
          change_icon: "fa-regular fa-user"
        },
        {
          value: 80,
          icon: "fas fa-user-md",
          description: "Patients Today",
          change: "From Yesterday",
          persent: "18%",
          change_icon: "fa-solid fa-bed-pulse"
        },
        {
          value: 50,
          icon: "fas fa-calendar-check",
          description: "Appointments Today",
          change: "From Yesterday",
          persent: "20%",
          change_icon: "fa-solid fa-hospital-user"
        }
      ];
     
    
  return (
    <div>
    <div className="w-[98%] mx-auto">
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-4">
        {extraData.map((item, index) => (
          <div className="border m-4 p-5 rounded-lg" key={index}>
            <h3 className="text-[#008080] font-bold">{item.description}</h3>
            <div className="flex justify-between">
              <p className="font-bold text-gray-600">{item.persent}</p>
              <i className={`${item.change_icon}  text-[#008080] text-2xl`}></i>
            </div>
            <small className="text-red-500">{item?.change} <i class="fa-solid fa-arrow-up"></i></small>
          </div>
        ))}
      </div>
      <div className="col-span-8 border p-2 mt-5 rounded-lg">
        <div className="flex justify-between p-4">
          <p className="font-bold text-[#008080]">Appointment</p>
          <Days7DropDown/>
        </div>
        <GlobalTable columns={democolumns} dataSource={demodata} />
      </div>
    </div>
  </div>

  {/* Weekly Overview */}
  <WeeklyOverview/>
  </div>
  )
}

export default page
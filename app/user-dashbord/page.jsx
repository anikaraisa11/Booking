import GlobalButton from "@/components/Global/GlobalButton";
import Header from "@/components/Header/Header";
import React from "react";

function UserDashbord() {
  return (
    <>
      <Header />
      <div className="customContainer ">
        <div className="grid grid-cols-12 gap-5 my-10 rounded-lg items-center">
          <div className="col-span-5 border p-5">
            <div className="py-2 px-10 border text-2xl font-medium">Account</div>
            <div className="grid grid-cols-2">
              <div className="mt-5 px-5">
                <h4 className="font-bold text-gray-500">Patient Name</h4>
                <p className="text-gray-500">Saad</p>
              </div>
              <div className="mt-5 px-5">
                <h4 className="font-bold text-gray-500">Patient Number</h4>
                <p className="text-gray-500">01907626245</p>
              </div>
              <div className="mt-5 px-5">
                <h4 className="font-bold text-gray-500">Phone Email</h4>
                <p className="text-gray-500">Saad | abc@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-span-7 rounded-lg border p-5">
            <div className="grid grid-cols-2 gap-5">
                <div className="bg-[#E2F6ED] text-center p-5 rounded-lg">
                    <h3 className="text-2xl text-green-600 font-medium">$ 90.48</h3> <br />
                     <p className="text-green-600 font-medium">Received</p>
                </div>
                <div className="bg-[#FFF2E1] text-center p-5 rounded-lg">
                    <h3 className="text-2xl text-[#e69d3e] font-medium">$ 90.48</h3> <br />
                     <p className="text-[#e69d3e] font-medium">Received</p>
                </div>
                <div className="bg-[#F8F0FF] text-center p-5 rounded-lg">
                    <h3 className="text-2xl text-[#d2a4fa] font-medium">$ 90.48</h3> <br />
                     <p className="text-[#d2a4fa] font-medium">Received</p>
                </div>
            </div>
            <div className="flex justify-evenly my-8">
            <GlobalButton modifyclassName="w-[200px]"  text="Refund Request" />
            <GlobalButton modifyclassName="w-[200px]"  text="Add Ballence" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashbord;

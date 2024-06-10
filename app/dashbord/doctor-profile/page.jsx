"use client";
import GlobalButton from "@/components/Global/GlobalButton";
import GlobalForm from "@/components/Global/GlobalForm";
import GlobalInput from "@/components/Global/GlobalInput";
import { gender } from "@/components/Global/GlobalOptions";
import GlobalSelect from "@/components/Global/GlobalSelect";
import { useUpdateDoctorProfileMutation } from "@/lib/redux/features/doctor/doctorApi";
import React from "react";

function DoctorProfile() {
  const [updateData,{data:datainfo}] = useUpdateDoctorProfileMutation();

  const onSubmit = async (data) => {
    const id = 18;
    const information = {
      data,
      id,
    };
    try {
      const res = await updateData(information);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

console.log(datainfo)
  return (
    <div>
      <h2 className="text-2xl text-center py-4 font-bold text-[#008080] ">Update Doctor Profile</h2>
      <GlobalForm onSubmit={onSubmit}>
        <div className="grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-5 justify-between item-center p-5">
          {/* Information  */}
          <div>
            <GlobalInput
              name="name"
              label="Name"
              placeholder="Input Your Name"
              required={true}
              type="text"
            />
          </div>

          <div>
            <GlobalInput
              name="email"
              label="Email"
              placeholder="Input Your Email"
              required={true}
              type="email"
            />
          </div>

          <div>
            <GlobalInput
              name="phone"
              label="Phone Number"
              placeholder="Input Your Last Phone Number"
              required={true}
              type="number"
            />
          </div>

          <div>
            <GlobalInput
              name="date_of_birth"
              label="Date Of Birth"
              required={true}
              type="date"
            />
          </div>

          <div>
            <GlobalInput
              name="address_line_1"
              label="Address"
              placeholder="Input Your Last Address"
              required={true}
              type="text"
            />
          </div>

          <div>
            <GlobalInput
              name="postal_code"
              label="Postal Code"
              placeholder="Input Your Postal Code"
              required={true}
              type="text"
            />
          </div>

          <div>
            <GlobalSelect
            label="Gender"
              options={gender}
              name="gender"
              defaultValue="Others"
            />
          </div>
        </div>
        <div className="text-center">
          <GlobalButton type="submit" text="Submit" />
        </div>
      </GlobalForm>
    </div>
  );
}

export default DoctorProfile;

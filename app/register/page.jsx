"use client";
import Link from "next/link";
import "./../login/login.css";
import GlobalButton from "@/components/Global/GlobalButton";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import SwitchToMobile from "./SwitchToMobile";
import VerifyOTP from "./VerifyOTP";
import { toast, Toaster } from "sonner";
import { SendOtp } from "@/actions/sendotpfunc";
import { useRegisterMutation } from "@/lib/redux/features/authintication/authinticationApi";
import { useRouter } from 'next/navigation'
import SwitchToUserType from "./SwitchToUserType";
import { Checkbox } from "antd";
import { Radio } from 'antd'




function Register() {
  const [
    registerData,
    { isError, isLoading,error, data: registerDataInfo, isSuccess },
  ] = useRegisterMutation();
  const { register, handleSubmit } = useForm();
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter()
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const [user_type, setUser_type] = useState('client');

  const onChange = ({ target: { value } }) => {
    setUser_type(value);
  };

  const options = [
    {
      label: 'Client',
      value: 'client',
    },
    {
      label: 'Adviser',
      value: 'adviser',
    },
  ];
  const onSubmit = async (data) => {
     
    try{
      const registerDatainfo = {
        name: data.name, 
        email: data.email, 
        password: data.password,
        user_type:user_type
      }
      console.log(registerDatainfo)
      const res =  await registerData(registerDatainfo)
        if(res?.data){
          toast.success(res?.data?.message) 
          setTimeout(() => {
            router.push('/login', { scroll: false });
          }, 2000);
        }
    } catch (errors) {
      console.log('Error:', errors);
  }



    // register data temporary 
    // firstly you need to set country code here in front end has no country code so
    // for bangladesh i have set the code 88 further when the country code come just remove 88!!
    // const number = `88${data.phone}`;
    // if (data.password !== data.repassword) {
    //   alert("password did not matched!");
    //   return;
    // }
    

    // try {
      
    //   // here assume that the result is fullfill
    //   const result = {
    //     ok: true,
    //   };
    //   // now we check the response is ok or not
    //   if (result.ok === true) {
    //     // when we get the result ok from the user
    //     // then we send the otp code to the user

    //     const GET_Receipent_ID = await SendOtp(`/api/sms`, number);

    //     // if i get the receipent id then i will save it in local storage the number and receipent id
    //     // so that in otp we will check the receipent given verify number or not;

    //     if (GET_Receipent_ID) {
    //       localStorage.setItem("client_number", number);
    //       localStorage.setItem("client_Id", GET_Receipent_ID);

    //       toast.success("check your mobile device");

    //       // open the modal so that the user can give otp code
    //       showModal();
    //     }
    //   } else {
    //     toast.warning(
    //       "Something went wrong in registration please try again or later"
    //     );
    //   }
    // } catch (error) {
    //   console.log(error, "if registration database error occured");
    // }
    
  };

  // IMPORTANT  DUPLICATE EMAIL AND USER NAME ISSUE AND ERROR HANDELER ISSHUE
  // if(error){
  //   console.log(error?.data?.errors) 
  // }

  return (
    <div className="login">
      <div className="container mx-auto">
        <div className="flex h-[100vh] items-center justify-center">
          <div className=" bg-white rounded-lg p-5 lg:w-[40%] md:w-[50%] sm:w-[90%] w-[95%]">
            <form
              className="bg-transparent relative px-10"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="text-4xl py-5 font-bold animation">
                Registration
              </h3>
              <div className="z-10" style={{position:'absolute',top:'25%',left:'70%', transform: 'translate(50%, 90%)' }}>
                <SwitchToMobile
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                />
              </div>
              {!isChecked ? (
                <div>
                  
                  <div className="input-with-placeholder mt-5">
                    <input
                      id="name"
                      type="name"
                      {...register("name", { required: true, maxLength: 20 })}
                      required={true}
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="input-with-placeholder mt-5">
                    <input
                      id="email"
                      type="email"
                      {...register("email", { required: true, maxLength: 20 })}
                      required={true}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
              ) : (
                <>
                  <div className="input-with-placeholder mt-5">
                    <input
                      id="name"
                      type="name"
                      {...register("name", { required: true, maxLength: 20 })}
                      required={true}
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="input-with-placeholder mt-5">
                    <input
                      id="phone"
                      // type="text"
                      {...register("phone", {
                        required: true,
                        maxLength: 20,
                      })}
                      required={true}
                    />
                    <label htmlFor="phone">Mobile Number</label>
                  </div>
                </>
              )}
              <div className="input-with-placeholder mt-5">
                <input
                  id="password"
                  type="password"
                  {...register("password", { required: true, maxLength: 20 })}
                  required={true}
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="input-with-placeholder mt-5">
                <input
                  id="p-password"
                  type="password"
                  {...register("repassword", {
                    required: true,
                    maxLength: 20,
                  })} 
                  required={true}
                />
                <label htmlFor="p-password">Confirm Password</label>
              </div>
              <div>
              
              <Radio.Group options={options} onChange={onChange} value={user_type} />
              </div>
              <div className="py-5 text-center">
                {/* {!isChecked ? (
                  <GlobalButton type="submit" text="Registration" />
                ) : (
                  <div
                    onClick={showModal}
                    setIsModalOpen={setIsModalOpen}
                    isModalOpen={isModalOpen}>
                    <GlobalButton text="Next" />
                  </div>
                )} */}
                <GlobalButton type="submit" text="Registration" />
              </div>
              <small className="text-end mt-3 mb-3">
                If you have a already Account Please{" "}
                <b className="blue">
                  <Link href="/login">Login</Link>
                </b>
              </small>
              <ul className="flex mt-2 justify-center gap-5">
                <li className="iconLI">
                  <Link className="socialIcon" href="">
                    <i
                      style={{ fontSize: "22px", color: "#008080" }}
                      className="fa-brands fa-google"
                    ></i>
                  </Link>
                </li>
                <li className="iconLI">
                  <Link className="socialIcon" href="">
                    <i
                      style={{ fontSize: "22px", color: "#008080" }}
                      className="fa-brands fa-facebook"
                    ></i>
                  </Link>
                </li>
                <li className="iconLI">
                  <Link className="socialIcon" href="">
                    <i
                      style={{ fontSize: "22px", color: "#008080" }}
                      className="fa-brands fa-twitter"
                    ></i>
                  </Link>
                </li>
                <li className="iconLI">
                  <Link className="socialIcon" href="">
                    <i
                      style={{ fontSize: "22px", color: "#008080" }}
                      className="fa-brands fa-linkedin"
                    ></i>
                  </Link>
                </li>
              </ul>
              <VerifyOTP
                showModal={showModal}
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
              />
              {/* isModalOpen={isModalOpen} */}
            </form>
          </div>
        </div>
      </div>
      {/* <Toaster richColors /> */}
    </div>
  );
}

export default Register;

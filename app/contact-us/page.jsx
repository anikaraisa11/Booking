import GlobalButton from "@/components/Global/GlobalButton";
import Header from "@/components/Header/Header";
import PageTitle from "@/components/PageTitle/PageTitle";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Header />
      {/* bread crumb */}
      <PageTitle
        headline="Contact Us"
        title="Contact Us"
        hrefLink="contactus"
      />
      {/* bread crumb */}

      {/* contact us */}
      <div className="m-0 pt-5 pb-5  lg:pt-20 px-0 lg:pb-20">
        <div className="customContainer  mx-auto">
          <div className="block md:block lg:flex">
            <div className="w-full md:w-full lg:w-5/12">
              <div className="mb-3 lg:mb-10">
                <h6 className="font-medium text-base text-[#0e82fd] mb-4">
                  Get In Touch
                </h6>
                <h2 className="font-semibold text-2xl  md:text-4xl mb-0">
                  Have Any Question?
                </h2>
              </div>
              {/* card content */}
              <div className="mb-5 md:mb-8 border-2 border-[#e9eaf6] w-full lg:w-11/12">
                <div className="p-8 flex">
                  <div className="mr-5">
                    <i className="fa-solid fa-location-dot text-5xl  text-[#0e82fd]"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-[#0A0B0D]">
                      Address
                    </h4>
                    <p className="text-sm mb-0">
                      8432 Mante Highway , Aminaport , USA
                    </p>
                  </div>
                </div>
              </div>
              {/* card content */}
              {/* card content */}
              <div className="mb-5 md:mb-8 border-2 border-[#e9eaf6] w-full lg:w-11/12">
                <div className="p-8 flex">
                  <div className="mr-5">
                    <i className="fa-solid fa-phone text-5xl  text-[#0e82fd] "></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-[#0A0B0D]">
                      Phone Number
                    </h4>
                    <p className="text-sm mb-0">+1 345 689 39393</p>
                  </div>
                </div>
              </div>
              {/* card content */}
              {/* card content */}
              <div className="mb-5 md:mb-8 border-2 border-[#e9eaf6] w-full lg:w-11/12">
                <div className="p-8 flex">
                  <div className="mr-5">
                    <i className="fa-regular fa-envelope text-5xl  text-[#0e82fd] "></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-[#0A0B0D]">
                      Email Address
                    </h4>
                    <p className="text-sm mb-0">doccure@gmail.com</p>
                  </div>
                </div>
              </div>
              {/* card content */}
            </div>
            <div className="w-full md:w-full lg:w-7/12 bg-[#f8fbff] rounded-md">
              <div className="mb-5 md:mb-8 rounded-lg border-0 w-full">
                <div className="m-0 p-4 md:p-5">
                  <form>
                    <div className="block md:block lg:flex justify-between">
                      <div className="w-full md:w-full lg:w-1/2">
                        <div className="mb-4 ">
                          <label className="mb-2 block">Name</label>
                          <input
                            type="text"
                            className="w-full md:w-full lg:w-11/12 border-[#dcdcdc] text-[#333333] text-xl min-h-12 px-3 py-4 focus:border-[#bbb] shadow  outline-none placeholder:text-[#858585] placeholder:text-sm"
                            placeholder="Enter Your Name"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-full lg:w-1/2">
                        <div className="mb-4 ">
                          <label className="mb-2 block">Email Address</label>
                          <input
                            type="text"
                            className="w-full md:w-full lg:w-11/12 border-[#dcdcdc] text-[#333333] text-xl min-h-12 px-3 py-4 focus:border-[#bbb] shadow  outline-none placeholder:text-[#858585] placeholder:text-sm"
                            placeholder="Enter Email Address"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="block md:block lg:flex justify-between">
                      <div className="w-full md:w-full lg:w-1/2">
                        <div className="mb-4 ">
                          <label className="mb-2 block">Phone Number</label>
                          <input
                            type="text"
                            className="w-full md:w-full lg:w-11/12 border-[#dcdcdc] text-[#333333] text-xl min-h-12 px-3 py-4 focus:border-[#bbb] shadow  outline-none placeholder:text-[#858585] placeholder:text-sm"
                            placeholder="Enter Phone Number"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-full lg:w-1/2">
                        <div className="mb-4 ">
                          <label className="mb-2 block">Service</label>
                          <input
                            type="text"
                            className="w-full md:w-full lg:w-11/12 border-[#dcdcdc] text-[#333333] text-xl min-h-12 px-3 py-4 focus:border-[#bbb] shadow  outline-none placeholder:text-[#858585] placeholder:text-sm"
                            placeholder="Enter Service"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="mb-2 block">Message</label>
                      <textarea
                        placeholder="Enter Your Comments"
                        className="w-full lg:w-[96%]  resize-y rounded-md border-[#dcdcdc] text-[#333333] text-xl min-h-12 px-3 py-4 focus:border-[#bbb] shadow  outline-none placeholder:text-[#858585] placeholder:text-sm"></textarea>
                    </div>
                    <div className="mt-8 mb-0">
                      <GlobalButton text="Send Message" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* map */}
      <div className="flex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.7301009561315!2d-76.13077892422932!3d36.82498697224007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae976cfe9f8af%3A0xa61eac05156fbdb9!2sBeachStreet%20USA!5e0!3m2!1sen!2sin!4v1669777904208!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          className="w-full border-none h-96 "
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      {/* map */}
    </>
  );
}

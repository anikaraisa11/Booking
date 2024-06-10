"use client";
import Header from "@/components/Header/Header";
import React, { useState } from "react";
import "./services.css";
import demoImg from "../../src/assets/img/service.jpg";
import Image from "next/image";
import Loading from "@/components/Loading/Loading";
import Error from "@/components/Error/Error";
import GlobalButton from "@/components/Global/GlobalButton";
// import { useServiceDataQuery } from "@/lib/redux/features/service/serviceApi";

function page() {
  // const { isError, isLoading, data } = useServiceDataQuery();
  // const [current, setCurrent] = useState(3);
  // const onChange = (page) => {
  //   console.log(page);
  //   setCurrent(page);
  // };
  // let content;

  // if (isLoading) {
  //   content = <Loading />;
  // }
  // if (!isLoading && isError) {
  //   content = <Error ErrorMessage="Something went wrong" />;
  // }
  // if (!isLoading && !isError && data?.data.length > 0) {
  //   content = <Error ErrorMessage="Data not found" />;
  // }

  // if (!isLoading && !isError && data?.data.length > 0) {
  //   content = data?.data?.map((item, index) => (
  //     <div className="mainDiv">
  //       <Image
  //         src={demoImg}
  //         width={300}
  //         height={300}
  //         className="image__img img-fluid"
  //         alt="image"
  //       />
  //       <div className="overlay overlay--blur">
  //         <h3 className="text-bold text-2xl text-center">{item.name}</h3>
  //       </div>
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "space-between",
  //           padding: "5px",
  //         }}
  //       >
  //         <p style={{ fontWeight: "700" }}>{item.name}</p>
  //         <p style={{ color: "#008080", fontWeight: "700" }}>$P{item.price}</p>
  //       </div>
  //     </div>
  //   ));
  // }

  return (
    <>
      <Header />

      <div className="customContainer">
        <div className="text-center py-10">
          <input
            type="text"
            placeholder="Search Your Service"
            className="placeholder-[#008080] lg:w-[600px] md:w-[500px] sm:w-[400px] w-[300px] p-3 outline-[#008080] border"
          />
        </div>
        <div
          className="mx-auto grid gap-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 mt-5"
          style={{ position: "relative" }}
        >
          {/* {content} */}
        </div>
        <div className="text-center py-10">
          <GlobalButton text="Load More Service"></GlobalButton>
        </div>
      </div>
    </>
  );
}

export default page;

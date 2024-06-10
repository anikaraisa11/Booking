"use client"
import React, { useState } from "react";
import "./Banner.css";
import { SearchOutlined } from '@ant-design/icons';
import Link from "next/link";

function BannerForm() {
  const [query, setQuery] = useState('');
  
  const handelQuery = (info)=>{
    setQuery(info)
  }

  return (
    
      <div className="grid grid-cols-2 justify-center  ">
        <div className="relative  ">
          <SearchOutlined className="absolute left-2 top-7 text-[#008080] font-bold text-[20px] z-10 bg-stone-100 " />
          <input
            className="pl-12 outline-none mx-0.75 relative rounded-lg bg-stone-100  "
            type="text"
            placeholder="Search"
           onChange={(e)=> setQuery(e.target.value)}
          />
        </div>
        <div className="mt-2  bg-teal-700 text-[white] rounded-full ml-4  w-24 h-12 ">
          <Link href={`/search?search=${encodeURIComponent(query)}`}><button onClick={() => handelQuery(query)} type="submit" className="py-3 px-6">Submit</button></Link>
        </div>
      </div>
    
  );
}



export default BannerForm;

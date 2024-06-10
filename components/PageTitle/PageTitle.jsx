import Link from "next/link";
import React from "react";

function PageTitle({ headline, title, hrefLink }) {
  return (
    <div className="bg-[#f2f6f6] ">
      <div className="customContainer">
        <div className="flex flex-col justify-center items-center h-[40vh]">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            {headline}
          </h2>
          <div className="py-8">
            <Link href="/">Home /</Link> <Link href={hrefLink}>{title}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;

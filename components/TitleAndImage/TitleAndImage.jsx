import Image from "next/image";
import React from "react";
import icon from "../../src/assets/img/a.svg";

function TitleAndImage({ title }) {
  return (
    <div className="text-2xl md:text-4xl inline-block font-bold relative">
      {title}
      <Image
        src={icon}
        className="absolute mt-[-50px]  right-[-100px]"
        alt="Icon"
        height={50}
        width={50}
      />
    </div>
  );
}

export default TitleAndImage;

import React from "react";
import logo from "../../src/assets/img/logo1.jpg";
import Image from "next/image";

function Logo() {

  
  return <Image src={logo} width={80} height={50} alt="logo" />;
}


export default Logo;

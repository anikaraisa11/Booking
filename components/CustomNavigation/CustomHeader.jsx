"use client";
import Link from "next/link";
import { useState } from "react";
import NavigationLogo from "../../src/assets/img/doctorNavigationlogo.jpg";
import Image from "next/image";
import { Dropdown } from "antd";

import "../../components/Header/Header.css";
import DesktopMenu from "../Header/DesktopMenu";
import MobileMenu from "../Header/MobileMenu";

function CustomHeader() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const items = [
    {
      label: (
        <>
          <div className="flex p-2 gap-2">
            <Image
              src={NavigationLogo}
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
              alt="image"
            />
            <div>
              <h5 className="text-bold text-gray-500">Jony Devs </h5>
              <b className="text-gray-500">Doctor</b>
            </div>
          </div>
        </>
      ),
      key: "0",
    },
    {
      label: (
        <h4 className="border-b p-2">
          <Link href="/dashbord">Dashbord</Link>
        </h4>
      ),
      key: "1",
    },
    {
      label: (
        <h4 className="border-b p-2">
          <Link href="/">Profile Setting</Link>
        </h4>
      ),
      key: "2",
    },
    {
      label: (
        <h4>
          <Link href="/">Logout</Link>
        </h4>
      ),
      key: "3",
    },
  ];
  return (
    <div className="header">
      <div className="customContainer  mx-auto">
        <div className="flex justify-between items-center">
          <div className="logo text-2xl p-4 font-bold text-[#008080]">
            <Link href="/">Solvemeet</Link>
          </div>
          {/* Desktop Menu  */}
          <DesktopMenu />
          {/* Desktop Menu  */}

          {/* Mobile Menu  */}
          <MobileMenu activeMobileMenu={activeMobileMenu} />
          {/* Mobile Menu  */}

          <div className="flex items-center gap-4 px-5">
            <i className="text-gray-500 text-[20px] fa-solid fa-cart-shopping"></i>
            <i className="text-gray-500 text-[20px] fa-solid fa-bell"></i>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <div
                onClick={(e) => e.preventDefault()}
                className="flex items-center cursor-pointer gap-2 text-gray-400"
              >
                <Image
                  src={NavigationLogo}
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%" }}
                  alt="image"
                />
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </Dropdown>

            {/* harbuger Menu  */}
            <div className="hamburger">
              {activeMobileMenu ? (
                <i
                  className="fa-solid fa-xmark"
                  style={{ fontSize: "20px" }}
                  onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-bars"
                  style={{ fontSize: "20px" }}
                  onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                ></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomHeader;

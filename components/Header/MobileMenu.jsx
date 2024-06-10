import Link from "next/link";
import React, { useState } from "react";
import { navs } from "@/config/navConfig";

function MobileMenu() {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuClick = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <div>
      <ul>
        {navs.map((item, index) => (
          <li className="mt-2" key={index}>
            <div
              className="font-medium p-2 text-[#2DB1EC]"
              onClick={() => handleSubMenuClick(index)}
              style={{ cursor: "pointer" }}
            >
              {item.title}
            </div>
            <div
              className={`transition-max-height duration-300  overflow-hidden ${
                openSubMenu === index ? "max-h-96" : "max-h-0"
              }`}
            >
              {item.child_navs && (
                <ul className="ml-5 bg-[#fcfcfc] py-2 px-4">
                  {item.child_navs.map((childItem, childIndex) => (
                    <li
                      className="p-2 flex items-center gap-3 text-[#2DB1EC]"
                      key={childIndex}
                    >
                      <i className={childItem.icon}></i>
                      <Link href={childItem.links}>{childItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileMenu;

import { Dropdown, Menu, Space, Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Bengali from "../../src/assets/img/flag/Bengali.png";
import French from "../../src/assets/img/Flag/France.png";
import Spanish from "../../src/assets/img/flag/spain.png";
import Persian from "../../src/assets/img/flag/iran.png";
import swedish from "../../src/assets/img/flag/sweden.png";
import Arabic from "../../src/assets/img/flag/arabia.png";
import { GlobalOutlined } from "@ant-design/icons";

function Language() {
  const items = [
    {
      label: <Link href="">Bengali</Link>,
      icon: <Image src={Bengali} width={20} height={50} />,
      key: "0",
    },
    {
      label: <Link href="">French</Link>,
      icon: <Image src={French} width={20} height={50} />,
      key: "0",
    },
    {
      label: <Link href="">Spanish</Link>,
      icon: <Image src={Spanish} width={20} height={50} />,
      key: "1",
    },
    {
      label: <Link href="">Persian</Link>,
      icon: <Image src={Persian} width={20} height={50} />,
      key: "2",
    },
    {
      label: <Link href="">swedish</Link>,
      icon: <Image src={swedish} width={20} height={50} />,
    },
    {
      label: <Link href="">Arabic</Link>,
      icon: <Image src={Arabic} width={20} height={50} />,
      key: "4",
    },
  ];
  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Space>
          <Tooltip placement="leftTop" title="Language">
            <GlobalOutlined className="text-[#008080] text-[20px]" />
          </Tooltip>
        </Space>
      </Dropdown>
    </div>
  );
}

export default Language;

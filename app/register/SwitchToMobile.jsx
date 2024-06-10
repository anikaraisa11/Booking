"use client";
import React, { useState } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch, Space } from "antd";

function SwitchToMobile({isChecked, setIsChecked}) {
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Space direction="vertical">
      <Switch
      onClick={handleChange}
      style={{background:'#008080'}}
        checkedChildren="Mobile"
        unCheckedChildren="Email"
        defaultChecked
      />
    </Space>
  );
}

export default SwitchToMobile;

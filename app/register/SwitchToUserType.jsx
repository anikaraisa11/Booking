"use client";
import React, { useState } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch, Space } from "antd";

function SwitchToUserType({user_type, setUser_type}) {
  const handleChange = () => {
    setUser_type(!user_type);
  };

  return (
    <Space direction="vertical">
      <Switch
      onClick={handleChange}
      style={{background:'#008080'}}
        checkedChildren="client"
        unCheckedChildren="adviser"
        defaultChecked
      />
    </Space>
  );
}

export default SwitchToUserType;

"use client";
import React, { useState } from "react";
import { Divider, Radio, Table } from "antd";


function GlobalTable({ columns, dataSource, scroll }) {
  return (
    <div>
      <Table
        bordered
        rowSelection={{}}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        scroll={scroll}
      />
    </div>
  );
}

export default GlobalTable;

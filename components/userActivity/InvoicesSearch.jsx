"use client"
import { Input } from 'antd'
import React from 'react'
import GlobalTable from '../Global/GlobalTable'
import { Invoicecolumns, InvoiceData } from '../ColumnsPage/ColumnsPage'

function InvoicesSearch() {
  return (
    <div className='my-5'>
        <Input className='w-[25%] mx-5' placeholder='Search Invoices'/>
        <div className='mt-5'>
        <GlobalTable columns={Invoicecolumns} dataSource={InvoiceData} />
        </div>
    </div>
  )
}

export default InvoicesSearch
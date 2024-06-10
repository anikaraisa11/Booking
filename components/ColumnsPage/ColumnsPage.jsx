"use client"
import { Tag } from 'antd';
import Image from 'next/image'

export const AppointmentColumns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
            <div className="flex items-center">
                <Image 
                    src={record.image}
                    alt="User Image"
                    width={50}
                    height={50}
                    style={{ borderRadius: '50%' }}
                /> 
                <p className="ml-2">{text}</p>
            </div>
        ),
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Purpose',
        dataIndex: 'purpose',
        key: 'purpose',
    },
    {
        title: 'Mode',
        dataIndex: 'mode',
        key: 'mode',
        render: text => (
            <>
                {text === "Video Call" && <i className="mx-1 text-[#008080] fa-solid fa-video"></i>}
                {text === "In Person" && <i className="mx-1 text-[#008080] fa-solid fa-user-check"></i>}
                {text === "Audio Call" && <i className="mx-1 text-[#008080] fa-solid fa-phone"></i>}
                {text}
            </>
        ),
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Contact',
        dataIndex: 'contact',
        key: 'contact',
    },
    {
        title: 'Actions',
        key: 'actions',
        render: actions => (
            <div className='flex gap-3'>
                <i className="fa-solid fa-eye text-gray-500"></i> 
                <i className="fa-solid fa-message text-[#008080]"></i>
                <i className="fa-solid fa-circle-xmark text-red-500"></i>
            </div>
        ),
    },
    {
        title: 'Start',
        dataIndex: 'start',
        key: 'start',
        render: text => <b className='text-[#008080]'>{text}</b>,
    },
];
export const RequestPagecolumns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text) => <img src={text} alt="Patient" style={{ width: 50, height: 50 }} />,
    },
    {
      title: 'Appointment ID',
      dataIndex: 'appointmentId',
      key: 'appointmentId',
    },
    {
      title: 'Patient Name',
      dataIndex: 'patientName',
      key: 'patientName',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = status === 'Completed' ? 'green' : status === 'Pending' ? 'orange' : 'red';
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];
 
  
  export const democolumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  export const Invoicecolumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'User Image',
      dataIndex: 'userImage',
      key: 'userImage',
      render: (text) => <Image src={text} alt="User" width={50} height={50} style={{borderRadius:'50%' }} />,
    },
    {
      title: 'Patient',
      dataIndex: 'patient',
      key: 'patient',
    },
    {
      title: 'Appointment Date',
      dataIndex: 'appointmentDate',
      key: 'appointmentDate',
    },
    {
      title: 'Booked on',
      dataIndex: 'bookedOn',
      key: 'bookedOn',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => <div className='flex gap-3'>
      <i class="text-[#008080] fa-solid fa-print"></i> 
      <i class="text-[#008080] fa-solid fa-eye"></i>
      </div>
    },
  ];
  
  export const InvoiceData = [
    {
      key: '1',
      id: '#Inv-2021',
      userImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      patient: 'Edalin Hendry',
      appointmentDate: '24 Mar 2024',
      bookedOn: '21 Mar 2024',
      amount: '$300',
    },
    {
      key: '2',
      id: '#Inv-2022',
      userImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      patient: 'Amanda Smith',
      appointmentDate: '25 Mar 2024',
      bookedOn: '22 Mar 2024',
      amount: '$350',
    },
    {
      key: '3',
      id: '#Inv-2023',
      userImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      patient: 'John Doe',
      appointmentDate: '26 Mar 2024',
      bookedOn: '23 Mar 2024',
      amount: '$250',
    },
    {
      key: '4',
      id: '#Inv-2024',
      userImage: 'https://randomuser.me/api/portraits/women/4.jpg',
      patient: 'Mary Johnson',
      appointmentDate: '27 Mar 2024',
      bookedOn: '24 Mar 2024',
      amount: '$300',
    },
    {
      key: '5',
      id: '#Inv-2025',
      userImage: 'https://randomuser.me/api/portraits/men/5.jpg',
      patient: 'Michael Brown',
      appointmentDate: '28 Mar 2024',
      bookedOn: '25 Mar 2024',
      amount: '$400',
    },
    {
      key: '6',
      id: '#Inv-2026',
      userImage: 'https://randomuser.me/api/portraits/women/6.jpg',
      patient: 'Linda Williams',
      appointmentDate: '29 Mar 2024',
      bookedOn: '26 Mar 2024',
      amount: '$450',
    },
    {
      key: '7',
      id: '#Inv-2027',
      userImage: 'https://randomuser.me/api/portraits/men/7.jpg',
      patient: 'James Jones',
      appointmentDate: '30 Mar 2024',
      bookedOn: '27 Mar 2024',
      amount: '$500',
    },
    {
      key: '8',
      id: '#Inv-2028',
      userImage: 'https://randomuser.me/api/portraits/women/8.jpg',
      patient: 'Barbara Brown',
      appointmentDate: '31 Mar 2024',
      bookedOn: '28 Mar 2024',
      amount: '$550',
    },
    {
      key: '9',
      id: '#Inv-2029',
      userImage: 'https://randomuser.me/api/portraits/men/9.jpg',
      patient: 'Robert Davis',
      appointmentDate: '1 Apr 2024',
      bookedOn: '29 Mar 2024',
      amount: '$600',
    },
    {
      key: '10',
      id: '#Inv-2030',
      userImage: 'https://randomuser.me/api/portraits/women/10.jpg',
      patient: 'Patricia Miller',
      appointmentDate: '2 Apr 2024',
      bookedOn: '30 Mar 2024',
      amount: '$650',
    },
  ];
  
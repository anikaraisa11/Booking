defaultValue: The default value for the input field. -- optional
label: The label associated with the input field. -- optional
name: The name attribute of the input field. --required
placeholder: The placeholder text for the input field. --optional
required: Indicates whether the input field is required. --optional

DEMO 


"use client"
import GlobalForm from '@/components/Global/GlobalForm'
import GlobalInput from '@/components/Global/GlobalInput'
import React from 'react'

function info() {
    const onSubmit = async(data)=>{
        console.log(data)
    }
 const ColorOptions = [
      {
          value: 'Red',
          label: 'Red',
      },
      {
          value: 'Black',
          label: 'Black',
      }
  ]
  return (
    <>
        <GlobalForm onSubmit={onSubmit}>
            <GlobalInput defaultValue="" label="Name" name="name" placeholder="" required={true} />
            <GlobalInput defaultValue="" label="Email" name="email" placeholder="" required={true} />
            <button type='submit'>submit</button>
        </GlobalForm>
    </>
  )
}

export default info

OUTPUT : {name: 'abc', email: 'abc@gmail.coma', category: 'Red'}
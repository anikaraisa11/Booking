"use client"
import { Select ,FormItemLabel} from 'antd'
import { Controller } from 'react-hook-form'

function GlobalSelect({ type, name, label, required, options,defaultValue ,selectText}) {

    return (
        <div className={` mt-5 ${selectText}`}>
            {label && <label className='ml-4'>{label}</label>}
            <Controller
                name={name}
                render={({ field }) => (
                    <Select size="large"  type={type} defaultValue={defaultValue} {...field} className={` w-full mx-2`} required={required} options={options} />
                )}
            />

        </div>
    )
}

export default GlobalSelect




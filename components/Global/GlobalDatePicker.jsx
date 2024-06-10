import { DatePicker } from 'antd';
import { Controller } from 'react-hook-form';

function GlobalDatePicker({ name, label, defaultValue, onChange ,picker}) {
    return (
        <div className='mx-2'>
            {label && <p>{label}</p>}
            <Controller
                name={name}
                render={({ field }) => (
                    <DatePicker
                    picker={picker}
                        {...field}
                        defaultValue={defaultValue}
                        onChange={(date, dateString) => {
                            field.onChange(date);
                            onChange && onChange(date, dateString);
                        }}
                        className='w-full mx-2 mt-5'
                    />
                )}
            />
        </div>
    );
}

export default GlobalDatePicker;

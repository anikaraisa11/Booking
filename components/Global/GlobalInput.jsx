"use client";
import { Input } from "antd";
import { Controller } from "react-hook-form";

function GlobalInput({
  type,
  name,
  label,
  placeholder,
  transparent,
  required,
  defaultValue,
}) {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <div className="input-with-placeholder mt-5 mx-2">
            <p htmlFor={label}>{label}</p>
            <Input
              className="border outline-none w-full rounded"
              id={label}
              placeholder={placeholder}
              name={name}
              size="large"
              type={type}
              defaultValue={defaultValue}
              {...field}
              required={required}
            />
          </div>
        )}
      />
    </>
  );
}

export default GlobalInput;

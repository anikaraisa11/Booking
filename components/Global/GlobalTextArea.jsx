"use client";
import { Controller } from "react-hook-form";


function GlobalTextArea({
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
            <textarea rows={4}
              className="border outline-none p-2  w-full rounded"
              id={label}
              placeholder={placeholder}
              name={name}
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

export default GlobalTextArea;

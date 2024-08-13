import React from "react";

export const Input = ({
  label,
  id,
  name,
  type,
  onChange,
  error,
  className,
}) => {
  return (
    <div>
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <br />
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        className={`border border-black py-1.5 pl-3 pr-5 w-60 mb-2 rounded-lg ${className}`}
      />
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

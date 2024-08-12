import React from "react";

export const Input = ({ label, id, name, type, onChange, error }) => {
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
        className="border border-black"
      />
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

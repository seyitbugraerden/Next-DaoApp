import React from "react";
import { InputProps } from "../types/input";

const InputComp: React.FC<InputProps> = ({
  type,
  label,
  subtitle,
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-col items-start">
      <div>{label}</div>
      <input
        onChange={onChange}
        type={type}
        className="px-3 py-2 focus:outline-none focus:border-0 active:outline-none active:border-0 my-3 w-full bg-[rgba(0,0,0)]"
        value={value}
      />
      <div className="opacity-50 text-xs">{subtitle}</div>
    </div>
  );
};

export default InputComp;

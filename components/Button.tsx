'use client'
import React, { ReactNode } from "react";

interface Props {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
}

const Button: React.FC<Props> = ({ children, type }) => {
  return (
    <button
      type={type}
      onSubmit={()=>{console.log('2')}}
      className="px-5 py-2 bg-white flex flex-row justify-center max-w-36 mx-auto text-black items-center gap-4 rounded-full"
    >
      {children}
    </button>
  );
};

export default Button;

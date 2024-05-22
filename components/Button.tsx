import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Button: React.FC<Props> = ({ children }) => {
  return <div className="px-3 py-2 bg-white flex flex-row justify-center max-w-36 mx-auto text-black items-center gap-4 rounded-full">{children}</div>;
};

export default Button;

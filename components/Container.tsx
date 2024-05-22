import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className='2xl:max-w-[1240px] max-w-[90%] mx-auto'>{children}</div>
  );
}

export default Container;

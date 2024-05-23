import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className='2xl:max-w-[1400px] max-w-[80%] mx-auto'>{children}</div>
  );
}

export default Container;

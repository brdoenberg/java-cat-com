import React from "react";

type LayoutContainerProps = {
  children: React.ReactNode,
  fixedWidth?: boolean,
  className?: string
};

export default function LayoutContainer({children, fixedWidth = false, className} : LayoutContainerProps) {
  const getClassName = () => {
    return `w-full p-4 ${className ?? ''}${fixedWidth ? ' max-w-[1440px]' : ''}`;
  }
  return (
    <div className={'w-full flex justify-center'}>
      <div className={getClassName()}>
        {children}
      </div>
    </div>
  );
}
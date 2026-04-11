import React from "react";

type HorizontalCardProps = {
  children: React.ReactNode
}

export function HorizontalCard({children}: HorizontalCardProps) {
  return (
    <div className={'flex gap-4 bg-[#eee]'}>
      <div className={'flex flex-1 flex-col gap-4  p-4 pr-0'}>
        {children}
      </div>
      <div className={'w-1/3 bg-[#ccc]'}>
      </div>
    </div>
  )
}
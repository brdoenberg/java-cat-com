'use client'

import {useState, useRef, useEffect} from "react";

type TextAccordionProps = {
  children: React.ReactNode,
  title: string,
  open?: boolean
}

export function TextAccordion({children, title, open = false}: TextAccordionProps) {
  const [isOpen, setIsOpen] = useState(open);
  const [, rerender] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => rerender(1), []);

  return (
    <div className={'bg-[#ccc]'}>
      <button className={`w-full text-left p-4 cursor-pointer transition-all duration-250 ${isOpen ? 'bg-[#333] text-[#ccc]' : ''}`} onClick={() => setIsOpen(o => !o)}>
        <span>{title}</span>
        <span className={'float-right'}>
          {isOpen ? '-' : '+'}
        </span>
      </button>
      <div
        className={'overflow-hidden transition-all duration-250'}
        style={{height: isOpen ? contentRef.current?.scrollHeight : 0}}
      >
        <div ref={contentRef} className={'p-4 bg-[#333] text-[#ccc] border-t-2 border-[#ccc]'}>
          {children}
        </div>
      </div>
    </div>
  )
}

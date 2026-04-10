type QuoteBlockProps = {
  children: React.ReactNode,
  className?: string
}

export function QuoteBlock({children, className} : QuoteBlockProps) {
  return (
    <div className={`
    *:relative *:z-10 
    relative  border-l-8 border-[#333] bg-[#ccc] p-4 pl-8 transition-all duration-500
    hover:text-[#ccc] 
    after:content-[''] after:bg-[#333] after:duration-750 after:top-0 after:left-0 after:absolute after:w-0 after:transition-all after:h-full after:z-0
    hover:after:w-full 
    ${className ?? ''}`}>
      { children }
    </div>
  )
}
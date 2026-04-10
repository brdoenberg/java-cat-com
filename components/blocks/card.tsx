type CardProps = {
  children?: React.ReactNode
  className?: string
}

export function Card({children, className}: CardProps) {
  return (
    <div className={`flex flex-col gap-4 p-4 bg-[#eee] overflow-hidden ${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}

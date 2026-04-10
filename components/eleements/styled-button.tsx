type StyledButtonProps = {
  children: React.ReactNode,
  className?: string
}

export function StyledButton({children, className} : StyledButtonProps) {
  return (
    <button className={`px-4 py-2 flex items-center justify-center bg-[#333] text-white hover:bg-[#ccc]  cursor-pointer hover:text-[#333] transition-all duration-250 ${className || ''}`}>
      {children}
    </button>
  )
}
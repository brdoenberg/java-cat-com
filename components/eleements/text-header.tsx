type TextHeaderProps = {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

const sharedStyles = 'font-heading font-bold';

const levelStyles: Record<number, string> = {
  1: 'text-5xl',
  2: 'text-4xl',
  3: 'text-3xl',
  4: 'text-2xl',
  5: 'text-xl',
  6: 'text-lg',
};

export function TextHeader({children, level = 2, className}: TextHeaderProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  return (
    <Tag className={`${sharedStyles} ${levelStyles[level]}${className ? ` ${className}` : ''}`}>
      {children}
    </Tag>
  );
}

'use client'

import {useEffect, useRef, useState} from 'react';

type ZoomInProps = {
  children: React.ReactNode
  className?: string
}

export function ZoomIn({children, className}: ZoomInProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  );
}

'use client'

import {useEffect, useRef, useState} from 'react';

type FadeInProps = {
  children: React.ReactNode
  className?: string
}

export function FadeIn({children, className}: FadeInProps) {
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
      className={`transition-all duration-700 ${visible ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-4'} ${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  );
}

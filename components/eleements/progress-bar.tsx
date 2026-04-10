'use client'

import {useState, useEffect, useRef} from "react";

type ProgressBarProps = {
  title?: string
  progress?: number
  className?: string
  showPercentage?: boolean
  animatePercentage?: boolean,
  animateDuration?: number
};
export function ProgressBar({
    title, progress = 0,
    className,
    showPercentage = true,
    animatePercentage = true,
    animateDuration = 2500
} : ProgressBarProps) {
  const [progressValue, setProgressValue] = useState<number>(0);
  const [displayedProgress, setDisplayedProgress] = useState<number>((animatePercentage) ? 0 : progress);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setProgressValue(progress);
        if(animatePercentage) {
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / animateDuration, 1);
            setDisplayedProgress(Math.round(t * progress));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animateDuration, animatePercentage, progress]);

  return (
    <div ref={ref} className={className}>
      { (title || showPercentage) && <div className={'flex items-baseline mb-1 font-bold font-heading'}>
        { title && <span>{title}</span> }
        { showPercentage && <span className={'ml-auto'}>{`${displayedProgress}%`}</span> }
      </div> }
      <div className={`w-full bg-[#aaa] rounded-full h-4 overflow-hidden`}>
        <div
          className={`h-full bg-[#333] transition-all duration-2500`}
          role={'progressbar'}
          aria-valuenow={progressValue}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{
            transitionDuration: `${animateDuration}ms`,
            width: `${progressValue}%`
          }}
        ></div>
      </div>
    </div>
  )
}
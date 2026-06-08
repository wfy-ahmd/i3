import React, { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';
interface Props {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}
export function CountUp({
  to,
  suffix = '',
  duration = 1.4,
  className = ''
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-40px'
  });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v))
    });
    return () => controls.stop();
  }, [inView, to, duration]);
  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>);

}
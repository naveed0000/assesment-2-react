import { useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

interface CountUpProps {
  value: number;
  duration?: number; // ms
}

const MotionNumber = ({ value, duration = 2000 }: CountUpProps) => {
  const startTime = useRef<number | null>(null);
  const [current, setCurrent] = useState(0);

  useAnimationFrame((time) => {
    if (startTime.current === null) startTime.current = time;
    const progress = Math.min((time - startTime.current) / duration, 1);
    setCurrent(Math.floor(progress * value));
  });

  return <>{current}</>;
};

export default MotionNumber;

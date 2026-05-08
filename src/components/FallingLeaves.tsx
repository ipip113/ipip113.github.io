import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

// Using a standard leaf SVG path
const LEAF_SVG = "M24.7 1.5C21.4 -0.5 17.0 -0.5 13.7 1.5L2.3 8.1C-0.8 9.9 -0.8 14.5 2.3 16.3L13.7 22.9C17.0 24.8 21.4 24.8 24.7 22.9L36.1 16.3C39.2 14.5 39.2 9.9 36.1 8.1L24.7 1.5Z";

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<Array<{ id: number; left: number; duration: number; delay: number; scale: number; rotateZ: number }>>([]);

  useEffect(() => {
    // Generate static initial positions to avoid hydration mismatch
    const newLeaves = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage string
      duration: Math.random() * 10 + 10, // 10 to 20 seconds
      delay: Math.random() * -20, // start scattered
      scale: Math.random() * 0.5 + 0.3,
      rotateZ: Math.random() * 360,
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute top-[-50px]"
          style={{
            left: `${leaf.left}%`,
            width: 24,
            height: 24,
          }}
          initial={{ y: -100, rotateZ: leaf.rotateZ }}
          animate={{
            y: "120vh",
            x: ["-20px", "20px", "-20px"],
            rotateZ: leaf.rotateZ + 360,
            rotateX: [0, 180, 360]
          }}
          transition={{
            y: { duration: leaf.duration, repeat: Infinity, ease: "linear", delay: leaf.delay },
            x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: leaf.delay },
            rotateZ: { duration: 8, repeat: Infinity, ease: "linear", delay: leaf.delay },
            rotateX: { duration: 5, repeat: Infinity, ease: "linear", delay: leaf.delay }
          }}
        >
          <svg viewBox="0 0 38 25" className="fill-orange-700/60 drop-shadow-md backdrop-blur-sm w-full h-full">
            <path d={LEAF_SVG} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

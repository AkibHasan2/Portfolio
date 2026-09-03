import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/** Soft spotlight that follows the pointer inside the hero. */
export default function CursorGlow({ className = "" }) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 120, damping: 28, mass: 0.5 });
  const y = useSpring(my, { stiffness: 120, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (reduce) return undefined;
    function onMove(e) {
      mx.set(e.clientX);
      my.set(e.clientY);
      setVisible(true);
    }
    function onLeave() {
      setVisible(false);
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [mx, my, reduce]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-30 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-verified/10 blur-3xl mix-blend-screen ${className}`}
      style={{ x, y, opacity: visible ? 1 : 0 }}
    />
  );
}

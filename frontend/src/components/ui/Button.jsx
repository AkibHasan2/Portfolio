import { motion } from "framer-motion";

export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-verified text-on-accent hover:opacity-90",
    outline: "border border-rule text-paper hover:border-verified hover:text-verified",
    ghost: "text-muted hover:text-paper",
  };

  return (
    <motion.button
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

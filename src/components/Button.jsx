
import { motion } from "framer-motion";

function Button({
  children,
  href = "#contact",
  variant = "primary",
  className = ""
}) {
  return (
    <motion.a
      href={href}
      className={`btn btn-${variant} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}

export default Button;

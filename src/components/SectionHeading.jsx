
import { motion } from "framer-motion";

function SectionHeading({
  label,
  title,
  description,
  align = "center"
}) {
  return (
    <motion.div
      className={`section-heading text-${align}`}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <span className="section-label">
        {label}
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

export default SectionHeading;

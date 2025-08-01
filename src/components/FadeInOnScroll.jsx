

// src/components/FadeInOnScroll.jsx


import { motion } from "framer-motion";

export default function FadeInOnScroll({ children, delay = 0.3 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay }}

    >
      {children}
    </motion.div>
  );
}

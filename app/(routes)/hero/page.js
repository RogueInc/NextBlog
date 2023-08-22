import { motion } from "framer-motion";
export default function Page() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Hello, Hero page!
    </motion.h1>
  );
}

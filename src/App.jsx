import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      className="h-20 w-20 bg-slate-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}

export default App;

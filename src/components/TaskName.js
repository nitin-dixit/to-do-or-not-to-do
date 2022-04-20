import { motion } from "framer-motion";

export const TaskName = ({ checked, taskName }) => {
  return (
    <motion.div
      className="flex-1 whitespace-nowrap overflow-hidden text-clip"
      animate={checked ? { x: [0, 5, 0] } : undefined}
      transition={{
        duration: 0.3,
      }}
    >
      <motion.span
        className="relative px-1"
        animate={checked ? { opacity: 0.3 } : { opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.4,
        }}
      >
        {taskName}
        <motion.div
          className="absolute left-0 top-1/4 w-full h-2 border-b-[1px] border-black dark:border-slate-50"
          initial={{
            width: 0,
          }}
          animate={checked ? { width: "100%" } : { width: 0 }}
          transition={{
            duration: 0.3,
          }}
        ></motion.div>
      </motion.span>
    </motion.div>
  );
};

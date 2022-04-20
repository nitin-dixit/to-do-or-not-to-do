import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import img from "../relax.png";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const AppContent = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <>
    <AnimatePresence>
      {filteredTodoList && filteredTodoList.length > 0 ? (
        filteredTodoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo}></TodoItem>
        ))
      ) : (
        <motion.div className="flex flex-col items-center text-slate-500 text-sm font-light dark:text-slate-300"
        layout
          initial={{
            y: 46,
            scale: 0.3,
            opacity: 0,
          }}
          animate={{
            y: 0,
            scale: 1,
            opacity: 1,
          }}
          exit={{
            y: 46,
            scale: 0.3,
            opacity: 0,
          }}
          transition={{
            duration: 0.4,
          }}>
          <img src={img} width="170px" alt="no todo found, relax Image"></img>
          <p className="">All clear</p>
          <p>Looks like everything is organized in the right place.</p>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};

export default AppContent;

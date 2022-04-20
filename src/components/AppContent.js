import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import img from "../relax.png";

const AppContent = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return (
    <>
      {sortedTodoList && sortedTodoList.length > 0 ? (
        sortedTodoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo}></TodoItem>
        ))
      ) : (
        <div className="flex flex-col items-center text-slate-500 text-sm font-light dark:text-slate-300">
          <img src={img} width="170px" alt="no todo found, relax Image"></img>
          <p className="">All clear</p>
          <p>Looks like everything is organized in the right place.</p>
        </div>
      )}
    </>
  );
};

export default AppContent;

import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const AppContent = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList].sort(
    (a, b) => new Date(b.time) - new Date(a.time)
  );

  return (
    <>
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo) => (
            <TodoItem key={todo.key} todo={todo}></TodoItem>
          ))
        : "todo not found"}
    </>
  );
};

export default AppContent;

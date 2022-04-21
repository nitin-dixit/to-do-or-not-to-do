import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, formatDistanceToNowStrict } from "date-fns";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../slices/todoslice";
import { Modal } from "./Modal";
import { motion } from "framer-motion";
import { TaskName } from "./TaskName";
import { enIN } from "date-fns/locale";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOn, setUpdateModalOn] = useState(false);

  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Successfully deleted!");
  };

  const handleEdit = () => {
    setUpdateModalOn(true);
  };

  const handleChecked = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({ ...todo, status: checked ? "incomplete" : "complete" })
    );
  };

  let due = formatDistanceToNowStrict(new Date(todo.taskDeadline), new Date(), {
    addSuffix: true,
    locale: enIN,
  });
  if (due === "0 days") {
    due = "today";
  }
  return (
    <>
      <div className="w-full space-y-5 mb-4">
        <motion.div
          className="max-w-xl mx-auto px-4 py-2 bg-white dark:bg-slate-800 dark:text-slate-300 rounded-md shadow-lg"
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
          }}
        >
          <label className="flex items-center">
            <input
              className="rounded text-cyan-500 scale-125 focus:ring-cyan-500"
              type="checkbox"
              onChange={() => handleChecked()}
              checked={checked}
            />
            <div className="ml-4 flex-1 whitespace-nowrap text-ellipsis overflow-hidden ...">
              <TaskName checked={checked} taskName={todo.taskName}></TaskName>

              <span className="relative px-1 block font-light text-xs truncate ...">
                {todo.taskDescription}
              </span>
              <span className="relative px-1 block text-xs">
                Due :{" "}
                <span className="text-red-500 dark:text-red-400 font-normal">
                  {due}
                </span>
              </span>
              <span className="relative px-1 block font-light text-xs">
                created at:{" "}
                {format(new Date(todo.creationTime), "p, dd/MM/yyyy")}
              </span>
            </div>

            <button
              className="ml-2 focus-visible:outline-cyan-500 hover:text-red-500 mr-2"
              aria-label="Remove Task"
              onClick={() => handleDelete()}
            >
              <FontAwesomeIcon icon={solid("trash-can")}></FontAwesomeIcon>
            </button>
            <button
              className="ml-2 focus-visible:outline-cyan-500 hover:text-blue-500"
              aria-label="Edit Task"
              onClick={() => handleEdit()}
            >
              <FontAwesomeIcon icon={solid("pencil")}></FontAwesomeIcon>
            </button>
          </label>
        </motion.div>
      </div>
      <Modal
        modalOn={updateModalOn}
        setModalOn={setUpdateModalOn}
        type="update"
        todo={todo}
      ></Modal>
    </>
  );
};

export default TodoItem;

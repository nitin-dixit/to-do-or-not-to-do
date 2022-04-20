import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../slices/todoslice";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";

export const Modal = ({ type, modalOn, setModalOn, todo }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDeadline, setTaskDeadline] = useState(
    new Date().toISOString().substring(0, 10)
  );
  const [status] = useState("incomplete");

  const dispatch = useDispatch();

  const modalRoot = document.getElementById("modal");
  const elRef = useRef(document.createElement("div"));

  const clearForm = () => {
    setTaskName("");
    setTaskDescription("");
    setTaskDeadline(new Date().toISOString().substring(0, 10));
  };

  const toggleModal = () => {
    setModalOn(!modalOn);
  };

  useEffect(() => {
    if (type === "update" && todo) {
      setTaskName(todo.taskName);
      setTaskDescription(todo.taskDescription);
      setTaskDeadline(todo.taskDeadline);
    } else {
      setTaskName("");
      setTaskDescription("");
      setTaskDeadline(taskDeadline);
    }
  }, [type, todo, modalOn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      if (type === "add") {
        dispatch(
          addTodo({
            id: nanoid(),
            taskName,
            taskDescription,
            taskDeadline,
            status,
            creationTime: new Date().toLocaleString(),
          })
        );
        toast.success("Successfully added!");
        clearForm();
      } else if (type === "update") {
        if (
          todo.taskName !== taskName ||
          todo.taskDescription !== taskDescription ||
          todo.taskDeadline !== taskDeadline
        ) {
          dispatch(
            updateTodo({
              ...todo,
              taskName,
              taskDescription,
              taskDeadline,
              status,
            })
          );
          toast.success("Successfully updated!");
        } else {
          toast.error("No changes 🙅🏻");
        }
      }

      toggleModal();
    } else {
      toast.error(`Task Name can't be empty!`);
      return;
    }
  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  const children = modalOn ? (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-32 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black/70 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={() => {
            toggleModal();
          }}
        ></div>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="relative inline-block align-bottom bg-gray-50 dark:text-slate-30  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full outline-none">
          <div className="bg-gray-50 dark:text-slate-300 dark:bg-gradient-to-b  dark:from-gray-900 dark:to-gray-800 transition-colors duration-200 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full text-white bg-rose-500 dark:bg-cyan-400 shadow-xl dark:text-black sm:mx-0 sm:h-10 sm:w-10">
                <FontAwesomeIcon icon={solid("list-check")} />
              </div>

              <div className="mt-3 text-left sm:mt-0 sm:ml-4 sm:text-left">
                <div className="mt-2">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="sm:flex sm:items-center gap-4">
                      <div className="grid grid-cols-1 gap-6">
                        <input
                          type="text"
                          id="taskName"
                          value={taskName}
                          maxLength={80}
                          size={45}
                          required
                          onChange={(e) => {
                            setTaskName(e.target.value);
                          }}
                          className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-300 bg-transparent focus:ring-0 focus:border-black dark:border-slate-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 dark:focus:ring-opacity-50 dark:placeholder:text-slate-300 required:border-red-500 dark:required:border-red-500 text-left"
                          placeholder="Task Name"
                        />

                        <textarea
                          id="taskDescription"
                          value={taskDescription}
                          maxLength={500}
                          onChange={(e) => {
                            setTaskDescription(e.target.value);
                          }}
                          className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-300
                    focus:ring-0 focus:border-black dark:border-gray-300 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 dark:focus:ring-opacity-50
                    bg-transparent dark:placeholder:text-slate-300
                  "
                          rows="2"
                          placeholder="Description"
                        ></textarea>

                        <label className="block text-left">
                          <span className="text-[#6b7280] dark:text-slate-300">
                            Deadline?
                          </span>
                          <input
                            value={taskDeadline}
                            onChange={(e) => {
                              setTaskDeadline(e.target.value);
                            }}
                            type="date"
                            min={disablePastDate()}
                            required
                            className="
                    
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-300
                    focus:ring-0 focus:border-black dark:border-gray-300 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 dark:focus:ring-opacity-50 bg-transparent dark:text-slate-300
                  "
                          />
                        </label>
                      </div>
                    </div>
                    <div className="px-2 py-2 mt-2 sm:px-6 sm:flex sm:flex-row-reverse">
                      <Button
                        type="button"
                        className="w-full inline-flex justify-center border-transparent shadow-sm px-4 py-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm border-2 border-red-600 text-red-600 font-medium leading-tight rounded-full hover:bg-red-400 hover:bg-opacity-20 focus:ring-0 transition duration-150 ease-in-out dark:hover:text-red-900 dark:hover:bg-red-200"
                        onClick={() => {
                          toggleModal();
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="mt-3 w-full inline-flex justify-center rounded-full shadow-sm px-4 py-2 bg-transparent font-medium text-green-900 dark:text-green-400 dark:hover:text-green-900 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm border-2 border-green-500 leading-tight hover:bg-green-300 hover:bg-opacity-20 dark:hover:bg-green-200 focus:ring-0 transition duration-150 ease-in-out"
                      >
                        {type === "add" ? "Add" : "Update"}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return createPortal(children, elRef.current);
};

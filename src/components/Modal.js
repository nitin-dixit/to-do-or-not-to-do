import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export const Modal = ({ modalOn, setModalOn }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");

  const modalRoot = document.getElementById("modal");
  const elRef = useRef(document.createElement("div"));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskName, taskDescription, taskDeadline);
  };

  const toggleModal = () => {
    setModalOn(!modalOn);
  };

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  const children = modalOn ? (
    <div
      className="absolute flex items-center justify-center z-10 inset-0 outline-none border-n overflow-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed overflow-auto inset-0 bg-black/70 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={() => {
            toggleModal();
          }}
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="relative inline-block align-top bg-slate-100 dark:text-slate-300 dark:bg-slate-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white dark:text-slate-300 dark:bg-slate-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full text-white bg-rose-500 dark:bg-cyan-400 shadow-xl dark:text-black sm:mx-0 sm:h-10 sm:w-10">
                <FontAwesomeIcon icon={solid("list-check")} />
              </div>

              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="mt-2">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mt-2 sm:flex sm:items-center gap-4">
                      <div className="grid grid-cols-1 gap-6">
                        <label className="block">
                          <span className="text-gray-700 dark:text-slate-300">
                            Task Name
                          </span>
                          <input
                            type="text"
                            id="taskName"
                            value={taskName}
                            onChange={(e) => {
                              setTaskName(e.target.value);
                            }}
                            className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-transparent focus:ring-0 focus:border-black dark:focus:border-cyan-500 dark:focus:ring-cyan-500 dark:focus:ring-opacity-50"
                            placeholder=""
                          />
                        </label>
                        <label className="block">
                          <span className="text-gray-700 dark:text-slate-300">
                            Description
                          </span>
                          <textarea
                            id="taskDescription"
                            value={taskDescription}
                            onChange={(e) => {
                              setTaskDescription(e.target.value);
                            }}
                            className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black dark:focus:border-cyan-500 dark:focus:ring-cyan-500 dark:focus:ring-opacity-50
                    bg-transparent
                  "
                            rows="2"
                          ></textarea>
                        </label>
                        <label className="block">
                          <span className="text-gray-700 dark:text-slate-300">
                            Deadline?
                          </span>
                          <input
                            value={taskDeadline}
                            onChange={(e) => {
                              setTaskDeadline(e.target.value);
                            }}
                            type="date"
                            className="
                    mt-2
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black dark:focus:border-cyan-500 dark:focus:ring-cyan-500 dark:focus:ring-opacity-50 bg-transparent dark:text-slate-300
                  "
                          />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:text-slate-300 dark:bg-slate-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <Button
              type="button"
              className="w-full inline-flex justify-center border-transparent shadow-sm px-4 py-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm border-2 border-red-600 text-red-600 font-medium leading-tight rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out dark:hover:text-red-900 dark:hover:bg-red-300"
              onClick={() => {
                toggleModal();
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="mt-3 w-full inline-flex justify-center rounded-full shadow-sm px-4 py-2 bg-transparent font-medium text-green-900 dark:text-green-400 dark:hover:text-green-900 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm border-2 border-green-500 leading-tight hover:bg-black hover:bg-opacity-5 dark:hover:bg-green-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return createPortal(children, elRef.current);
};

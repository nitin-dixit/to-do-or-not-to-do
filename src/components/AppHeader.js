import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Button, SelectButton } from "./Buttons";
import { Modal } from "./Modal";
import { useState } from "react";

const AppHeader = () => {
  const [modalOn, setModalOn] = useState(false);

  const addTask = () => {
    setModalOn(true);
  };

  const toggleModal = () => {
    setModalOn(!modalOn);
  };
  return (
    <div className="flex justify-evenly m-7">
      <Button
        className="text-white  inline-block leading-normal shadow-md transition duration-150 ease-in-out w-12 h-12 rounded-full bg-rose-500 hover:bg-orange-500 hover:shadow-lg focus:shadow-lg active:bg-violet-700 focus:outline-none focus:ring-violet-300 dark:bg-purple-700 dark:hover:bg-purple-800 dark:focus:bg-purple-900"
        type="submit"
        onClick={() => {
          addTask();
        }}
      >
        <FontAwesomeIcon icon={solid("plus")} />
      </Button>

      <SelectButton
        className="rounded-lg list-none min-w-max mt-1 border-none text-base text-left float-left py-2 bg-white shadow-lg w-40 dark:text-slate-300 dark:bg-slate-800"
        id="status"
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>

      {modalOn && (
        <Modal>
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
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full text-white bg-violet-700 dark:bg-sky-400 shadow-xl dark:text-black sm:mx-0 sm:h-10 sm:w-10">
                      <FontAwesomeIcon icon={solid("list-check")} />
                    </div>

                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      {/* <h3
                        className="text-2xl leading-6 font-medium text-slate-900 dark:text-slate-300"
                        id="modal-title"
                      >
                        Add Task
                      </h3> */}

                      <div className="mt-2">
                        <form className="">
                          <div className="mt-2 sm:flex sm:items-center gap-4">
                            <div className="grid grid-cols-1 gap-6">
                              <label className="block">
                                <span className="text-gray-700 dark:text-slate-300">
                                  Task Name
                                </span>
                                <input
                                  type="text"
                                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-transparent focus:ring-0 focus:border-black dark:focus:border-cyan-500 dark:focus:ring-cyan-500 dark:focus:ring-opacity-50"
                                  placeholder=""
                                />
                              </label>
                              <label className="block">
                                <span className="text-gray-700 dark:text-slate-300">
                                  Additional details
                                </span>
                                <textarea
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
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      toggleModal();
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      toggleModal();
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AppHeader;

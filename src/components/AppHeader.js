import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Button, SelectButton } from "./Buttons";
import { Modal } from "./Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../slices/todoslice";

const AppHeader = () => {
  const [modalOn, setModalOn] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <>
      <div className="relative mb-8 w-10/12 flex justify-evenly">
        <Button
          className="text-white inline-block leading-normal shadow-md w-12 h-12 rounded-full bg-rose-500 hover:bg-orange-500 hover:shadow-lg focus:shadow-lg active:bg-violet-700 focus:outline-none focus:ring-violet-300 dark:bg-cyan-400 dark:text-black dark:hover:bg-cyan-300 dark:shadow-2xl transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
          onClick={() => {
            setModalOn(true);
          }}
        >
          <FontAwesomeIcon icon={solid("plus")} />
        </Button>

        <SelectButton
          value={filterStatus}
          onChange={updateFilter}
          className="rounded-lg list-none min-w-max mt-1 border-none text-base text-left float-left py-2 bg-white shadow-lg w-40 dark:text-slate-300 dark:bg-slate-800"
          id="status"
        >
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
        </SelectButton>
      </div>
      <Modal type="add" modalOn={modalOn} setModalOn={setModalOn}></Modal>
    </>
  );
};

export default AppHeader;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Button, SelectButton } from "./Buttons";

const AppHeader = () => {
  return (
    <div className="flex justify-evenly m-7">
      <Button
        className="text-white text-3xl inline-block leading-normal shadow-md transition duration-150 ease-in-out w-12 h-12 rounded-full bg-violet-500 hover:bg-violet-600 hover:shadow-lg focus:shadow-lg active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        type="submit"
      >
        <FontAwesomeIcon icon={solid('plus')} />
      </Button>

      <SelectButton
        className="rounded-lg list-none min-w-max mt-1 m-0 border-none text-base z-50 text-left float-left py-2 bg-white shadow-lg w-40 dark:text-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:bg-slate-700 dark:active:bg-slate-700 bg-transparent whitespace-nowrap bg-clip-padding"
        id="status"
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
    </div>
  );
};

export default AppHeader;

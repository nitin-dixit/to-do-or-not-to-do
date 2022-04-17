import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoItem = ({ todo }) => {
  return (
    <div className="w-full space-y-5">
      <div
        className="max-w-xl mx-auto px-4 py-4 bg-white dark:bg-slate-600 rounded-md shadow-lg"
        
      >
        <label className="flex items-center">
          <input
            className="rounded text-cyan-500 scale-125 focus:ring-cyan-500"
            type="checkbox"
            //   onChange={() => { setDone(!done) }}
          />
          <div className="ml-4 flex-1 whitespace-nowrap overflow-hidden text-clip">
            <span className="relative px-1">
              {todo.map((item) => item.taskName)}
              <div className="absolute left-0 top-1/4 w-full h-2 border-b-[1px] border-black dark:border-slate-50"></div>
            </span>
          </div>

          <button
            className="ml-2 focus-visible:outline-cyan-500"
            aria-label="Remove Task"
          >
            <FontAwesomeIcon icon={solid("trash-can")}></FontAwesomeIcon>
          </button>
        </label>
      </div>
    </div>
  );
};

export default TodoItem;

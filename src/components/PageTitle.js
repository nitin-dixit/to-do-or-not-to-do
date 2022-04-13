import Toggler from "./Toggler";
import img from "../todo.png";

const PageTitle = () => {
  return (
    <header>
      <div className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 relative px-10 rounded-b-[150px] sm:rounded-b-full dark:bg-gradient-to-r dark:from-green-300 dark:via-blue-500 dark:to-purple-600">
        <div className="absolute right-0 top-4">
          <Toggler />
        </div>
        {/* <h1 className="absolute z-10 bottom-1/4 right-[18%] sm:right-1/4 text-xl text-slate-100 font-bold drop-shadow-xl">
      What&apos;s up, Mate!
    </h1> */}
        <div className="flex justify-center">
          <img
            src={img}
            className=""
            width="150px"
            height="150px"
            alt="Task Bot Image"
          />
        </div>
      </div>
    </header>
  );
};

export default PageTitle;

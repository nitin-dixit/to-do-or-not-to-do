import Toggler from "./Toggler";
import img from "../human.png";

const PageTitle = () => {
  return (
    <header>
      <div className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 relative px-10 rounded-b-[150px] sm:rounded-b-full dark:bg-gradient-to-r dark:from-green-300 dark:via-blue-500 dark:to-purple-600">
        <div className="absolute right-0 top-4">
          <Toggler />
        </div>

        <div className="flex justify-center">
          <img src={img} className="" width="220px" alt="Task Bot Image" />
        </div>
      </div>
    </header>
  );
};

export default PageTitle;

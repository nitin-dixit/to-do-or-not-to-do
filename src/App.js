import PageTitle from "./components/PageTitle";
import Toggler from "./components/Toggler";
import img from "./todo.png";

const App = () => {
  return (
    <>
      <div className="bg-gray-50 text-slate-700 dark:bg-gradient-to-r dark:from-slate-900 dark:via-gray-900 dark:to-black dark:text-slate-50 transition-colors duration-200">
        <div className="w-full sm:max-w-[640px] mx-auto h-screen flex flex-col px-0 sm:px-2">
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
          <div className="container">
            <PageTitle title="📃 To-do App"></PageTitle>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

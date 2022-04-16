import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";

const App = () => {
  return (
    <>
      <div className="bg-[#f8f8ff] text-slate-700 dark:bg-gradient-to-r dark:from-slate-900 dark:via-gray-900 dark:to-black dark:text-slate-50 transition-colors duration-200">
        <div className="w-full sm:max-w-[640px] mx-auto h-screen flex flex-col px-0 sm:px-2">
          <PageTitle></PageTitle>
          <AppHeader></AppHeader>
          <div className="App flex-1 flex flex-col items-center mt-8 px-2 sm:px-0">
            <AppContent></AppContent>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

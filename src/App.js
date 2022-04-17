import AppTitle from "./components/AppTitle";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <div className="bg-gray-50 text-slate-700 dark:bg-gradient-to-r dark:from-slate-900 dark:via-gray-900 dark:to-black dark:text-slate-300 transition-colors duration-200">
        <div className="w-full sm:max-w-[640px] mx-auto h-screen flex flex-col px-0 sm:px-2">
          <AppTitle></AppTitle>

          <div className="flex-1 flex flex-col items-center mt-8 px-2 sm:px-0">
            <AppHeader></AppHeader>
            <AppContent></AppContent>
          </div>
        </div>
      </div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#171a1ebf",
            color: "#fff",
          },
        }}
      />
    </>
  );
};

export default App;

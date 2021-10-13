import { React } from "react";
import SearchView from "./View/SearchView";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./View/Header.jsx";
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex flex-col bg-gray-900 min-h-screen ">
        <Header />
        <SearchView />
      </div>
    </>
  );
}

export default App;

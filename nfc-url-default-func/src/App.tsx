import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div>
      <Outlet />
      <ToastContainer />
    </div>
  );
}

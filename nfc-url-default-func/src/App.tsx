import InfoPage from "./pages/InfoPage";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div>
      <Header />
      <InfoPage />
      <ToastContainer />
    </div>
  );
}

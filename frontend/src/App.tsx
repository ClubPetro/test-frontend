import { DestinationProvider } from "hooks/useDestination";
import Home from "pages/home";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <DestinationProvider>
      <Home />
      <ToastContainer autoClose={3000} />
    </DestinationProvider>
  );
}

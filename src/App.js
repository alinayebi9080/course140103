import { ToastProvider } from "react-toast-notifications";
import MainRouter from "./components/MainRouter";
import FetchProvider from "./provider/FetchProvider";
import MainProvider from "./provider/MainProvider";

function App() {
  return (
    <ToastProvider>
      <MainProvider>
        <FetchProvider>
          <MainRouter />
        </FetchProvider>
      </MainProvider>
    </ToastProvider>
  );
}

export default App;

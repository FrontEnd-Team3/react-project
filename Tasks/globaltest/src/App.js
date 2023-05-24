import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import OpenModalProvider from "./store/2_context";
import UserStoreProvider from "./store/3_context";

function App() {
  return (
    <>
      <UserStoreProvider>
        <OpenModalProvider>
          <div className="App">
            <RouterProvider router={router} />
          </div>
        </OpenModalProvider>
      </UserStoreProvider>
    </>
  );
}

export default App;

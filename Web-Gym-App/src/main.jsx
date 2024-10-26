import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import WorkoutContextProvider from "./Context/WorkoutContext.jsx";

createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <WorkoutContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WorkoutContextProvider>
    </Provider>
  </PersistGate>
);

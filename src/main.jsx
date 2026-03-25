import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import store from "./Redux/Store/store";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
        <App/>
        <Toaster/>
        </BrowserRouter>
    </Provider>
)
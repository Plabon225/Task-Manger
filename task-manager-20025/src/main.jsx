// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
//
// import "./assets/css/bootstrap - Copy.css"
// import "./assets/css/sidebas.css"
// import "./assets/css/dropdownmenu.css"
// import "./assets/css/progress.css"
// import 'animate.css';
// import "./assets/css/index.css"
//
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import "./assets/css/bootstrap - Copy.css";
import "./assets/css/sidebas.css";
import "./assets/css/dropdownmenu.css";
import "./assets/css/progress.css";
import 'animate.css';
import "./assets/css/index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Provider} from "react-redux";
import store from "./redux/store/store.js";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <>
            <ToastContainer position="bottom-center" autoClose={3000} />
            <Provider store={store}>
                <App />
            </Provider>

        </>
    </StrictMode>
);

import React, {Fragment} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import DashBoardPage from "./pages/dashBoardPage.jsx";
import CreatePage from "./pages/createPage.jsx";
import NewTaskPage from "./pages/newTaskPage.jsx";
import ProgressPage from "./pages/progressPage.jsx";
import CompletedPage from "./pages/completedPage.jsx";
import CanceledPage from "./pages/canceledPage.jsx";
import ProfilePage from "./pages/profilePage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import RegistrationPage from "./pages/registrationPage.jsx";
import Page404 from "./pages/page-404.jsx";
import FullScreenLoader from "./components/MasterLayout/fullScreenLoader.jsx";
import ForgetPassPage from "./pages/forgetPassPage.jsx";
import {getToken} from "./helper/sessionHelper.js";

const App = () => {

    if (getToken()) {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<DashBoardPage/>} />
                        <Route path="/create" element={<CreatePage/>} />
                        <Route path="/all" element={<NewTaskPage/>} />
                        <Route path="/progress" element={<ProgressPage/>} />
                        <Route path="/completed" element={<CompletedPage/>} />
                        <Route path="/canceled" element={<CanceledPage/>} />
                        <Route path="/profile" element={<ProfilePage/>} />
                        <Route path="*" element={<Page404/>} />
                    </Routes>
                </BrowserRouter>
                <FullScreenLoader/>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/login"/>} />
                        <Route path="/login" element={<LoginPage/>} />
                        <Route path="/registration" element={<RegistrationPage/>} />
                        <Route path="/forgetpass" element={<ForgetPassPage/>} />
                        <Route path="*" element={<Page404/>} />
                    </Routes>
                </BrowserRouter>
                <FullScreenLoader/>
            </Fragment>
        );
    }


};

export default App;
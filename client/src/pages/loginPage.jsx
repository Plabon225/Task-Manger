import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/masterLayout.jsx";
import LazyLoader from "../components/MasterLayout/lazyLoader.jsx";
const Login =lazy(() => import("../components/Login/login.jsx"));

const LoginPage = () => {
    return (
        <Fragment>
                <Suspense fallback={<LazyLoader/>}>
                    <Login/>
                </Suspense>
        </Fragment>

    );
};

export default LoginPage;
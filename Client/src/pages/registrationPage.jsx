import React, {Fragment, lazy, Suspense} from 'react';
import LazyLoader from "../components/MasterLayout/lazyLoader.jsx";
const Registration =lazy(() => import("../components/Registration/registration.jsx"));


const RegistrationPage = () => {
    return (
        <Fragment>
                <Suspense fallback={<LazyLoader/>}>
                    <Registration/>
                </Suspense>
        </Fragment>
    );
};

export default RegistrationPage;
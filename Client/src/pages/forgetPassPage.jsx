import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/masterLayout.jsx";
import LazyLoader from "../components/MasterLayout/lazyLoader.jsx";
const ForgetPass =lazy(() => import("../components/ForgetPass/forgetPass.jsx"));

const ForgetPassPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ForgetPass/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ForgetPassPage;
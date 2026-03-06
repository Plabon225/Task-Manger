import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/masterLayout.jsx";
import LazyLoader from "../components/MasterLayout/lazyLoader.jsx";
const Dashboard =lazy(() => import("../components/Dashboard/dashBoard.jsx"));

const DashBoardPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Dashboard/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default DashBoardPage;
import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/masterLayout.jsx";
import LazyLoader from "../components/MasterLayout/lazyLoader.jsx";
const New =lazy(() => import("../components/New/newTask.jsx"));


const NewTaskPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <New/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default NewTaskPage;
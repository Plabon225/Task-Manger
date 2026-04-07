import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/masterLayout.jsx";
import LazyLoader from "../components/MasterLayout/lazyLoader.jsx";
const Create =lazy(() => import("../components/Create/create.jsx"));

const CreatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Create/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CreatePage;
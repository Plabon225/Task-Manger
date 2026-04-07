import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/masterLayout.jsx";
import LazyLoader from "../components/MasterLayout/lazyLoader.jsx";
const NotFound =lazy(() => import("../components/NotFound/notFound.jsx"));


const Page404 = () => {
    return (
        <div>
            <Fragment>
                <MasterLayout>
                    <Suspense fallback={<LazyLoader/>}>
                        <NotFound/>
                    </Suspense>
                </MasterLayout>
            </Fragment>
        </div>
    );
};

export default Page404;
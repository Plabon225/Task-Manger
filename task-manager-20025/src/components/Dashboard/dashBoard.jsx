import React, {useEffect} from 'react';
import {SummaryRequest} from "../../API_Request/ApiRequest.js";
import {useSelector} from "react-redux";

const DashBoard = () => {

    useEffect(() => {
        SummaryRequest()
    },[])

    const SummaryList = useSelector((state)=> state.summary.value)

    return (
        <div className="container">
            <div className="row">
                {
                    SummaryList.map((item, index) => (
                        <div key={index.toString()} className="col-12 col-lg-3 col-sm-6 col-md-3 p-2">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body">
                                    <h5 className="animate__animated animate__fadeInUp">Total {item._id}</h5>
                                    <h6 className="text-secondary animate__animated animate__fadeInUp">{item.count}</h6>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default DashBoard;
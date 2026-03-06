import React, {Fragment, useEffect} from 'react';
import {AiOutlineCalendar, AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import {ListTaskByStatus} from "../../API_Request/ApiRequest.js";
import { useSelector} from "react-redux";
import {DeleteTodo} from "../../helper/deleteAlert.js";
import {UpdateTodo} from "../../helper/updateAlert.js";
import store from "../../redux/store/store.js";

const NewTask = () => {



    useEffect(() => {
        ListTaskByStatus("new");
    },[])
    const NewList = useSelector((state) => state.task.New)
    const DeleteItem = (id) => {
        DeleteTodo(id).then((result) => {
            if (result===true) {
                ListTaskByStatus("new");
            }
        })
    }
    const StatusChangedItem = (id, status) => {
        UpdateTodo(id, status).then((result) => {
            if (result===true) {
                ListTaskByStatus("new");
            }
        })
    }

    return (
        <Fragment>
            <div className="container container-fluid">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-6 col-lg-8 px-3 mt-3">
                        <h5>New Task</h5>
                    </div>
                    <div className="col-12 float-end col-md-6 col-lg-4 px-2 mt-3">
                        <div className="row">
                            <div className="col-8">
                                <input className="form-control w-100"/>
                            </div>
                            <div className="col-4 ">
                                <button className="btn w-100 buttons">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-0 m-0">

                    {
                        NewList.map((item, index) => (
                            <div key={index.toString()} className="col-12 col-lg-4 col-sm-6 col-md-4 p-2">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body">
                                        <h6 className="animate__animated animate__fadeInUp">{item.title}</h6>
                                        <p className="animate__animated animate__fadeInUp">{item.description}</p>
                                        <p className="m-0 p-0 animate__animated animate__fadeInUp">
                                            <AiOutlineCalendar/>{item.createdDate}
                                            <a onClick={StatusChangedItem.bind(this,item._id,item.status)}  className="icon-nav text-primary mx-1"><AiOutlineEdit/></a>
                                            <a onClick={DeleteItem.bind(this,item._id)} className="icon-nav text-danger mx-1"><AiOutlineDelete/></a>
                                            <a className="badge float-end bg-info text-decoration-none text-white ">{item.status}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </Fragment>
    );
};

export default NewTask;
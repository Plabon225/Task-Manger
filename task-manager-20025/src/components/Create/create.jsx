import React, {useRef} from 'react';
import FormHelper from "../../helper/formHelper.jsx"
import {useNavigate} from "react-router-dom";
import {NewTaskRequest} from "../../API_Request/ApiRequest.js";

const Create = () => {
    let navigate = useNavigate();
    let titleRef = useRef();
    let descriptionRef = useRef();

    const handleEnterFocus = (e, nextRef) => {
        if (e.key === "Enter") {
            e.preventDefault();
            nextRef.current.focus();
        }
    };

    const createNew = () => {
        let title = titleRef.current.value;
        let description = descriptionRef.current.value;

        if (FormHelper.IsEmpty(title)){
            FormHelper.ErrorRToast("Title Required");
        } else if (FormHelper.IsEmpty(description)){
            FormHelper.ErrorRToast("Discription Required");
        } else {
            NewTaskRequest(title, description).then((res) => {
                if (res===true){
                    navigate("/all")
                }
            })
        }
    }

    return (
        <div className="container container-fluid">
            <div className="row justify-content-center d-flex">
                <div className="col-12 col-lg-8 col-sm-12 col-md-8 p-2">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h4>Create New</h4>
                            <br/>
                            <input ref={titleRef} onKeyDown={(e)=> handleEnterFocus(e, descriptionRef)} placeholder="Task Name" className="form-control animate__animated animate__fadeInUp inputs" type="text" />
                            <br/>
                            <textarea ref={descriptionRef} rows={5} placeholder="Task Description" className="form-control animate__animated animate__fadeInUp inputs" type="text"/>
                            <br/>
                            <div className="d-flex justify-content-end">
                                <button onClick={createNew} className="btn buttons">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;
import React, {Fragment, useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import FormHelper from "../../helper/formHelper.jsx";
import {LoginRequest} from "../../API_Request/ApiRequest.js";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    let navigate = useNavigate();
    let passwordRef = useRef();
    let emailRef = useRef();
    let [showPassWord, setShowpassWord] = useState(false);

    const handleEnterFocus = (e, nextRef) => {
        if (e.key === "Enter") {
            e.preventDefault();
            nextRef.current.focus();
        }
    };

    const submitLogin = async (e) => {
        e.preventDefault();
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        if (!FormHelper.IsEmail(email)) {
            FormHelper.ErrorRToast("Invalid email");
        } else if (FormHelper.IsEmpty(password)) {
            FormHelper.ErrorRToast("Password Required");
        } else {
            LoginRequest(email, password).then((res) => {
                if(res===true){
                    setTimeout(()=>{
                        navigate("/dashboard");
                        window.location.reload();
                    },1000);
                }
            })
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-md-7 col-lg-6 center-screen ">
                        <div className="card w-90 p-4">
                            <div className="card-body">
                                <h5>Sign In</h5>
                                <br/>
                                <form onSubmit={submitLogin}>
                                    <input ref={emailRef} onKeyDown={(e)=> handleEnterFocus(e, passwordRef)} placeholder="User Email" className="form-control animate__animated animate__fadeInUp inputs" type="email" />
                                    <br/>
                                    <div className="position-relative">
                                        <input ref={passwordRef}
                                               placeholder="User Password"
                                               className="form-control animate__animated animate__fadeInUp inputs"
                                               type={showPassWord ? "text" : "password"}
                                        />
                                        <button onClick={()=> setShowpassWord(!showPassWord)}
                                                type="button"
                                                className="position-absolute top-50 end-0 translate-middle-y btn shadow-none bg-transparent border-0 p-2">                                                {showPassWord ? <FaEyeSlash/> : <FaEye/>}
                                        </button>
                                    </div>

                                    <br/>
                                    <button type="submit" className="btn w-100 animate__animated animate__fadeInUp float-end buttons mb-3">Next</button>
                                </form>

                                <div className="text-center w-100">
                                    <Link  className="text-center animate__animated animate__fadeInUp text-decoration-none text-secondary" to="/registration">Sign Up</Link>
                                    <br/>
                                    <Link  className="text-center animate__animated animate__fadeInUp text-decoration-none text-secondary" to="/forgetpass">Forget Password</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;
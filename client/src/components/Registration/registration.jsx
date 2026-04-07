import React, {useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import FormHelper from "../../helper/formHelper.jsx";
import {RegistrationRequest} from "../../API_Request/ApiRequest.js";
import {FaEye, FaEyeSlash} from "react-icons/fa";


const Registration = () => {
    let [showPassWord, setShowpassWord] = useState(false);
    // ===== Refs =====
    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const mobileRef = useRef();
    const passwordRef = useRef();

    const handleEnterFocus = (e, nextRef) => {
        if (e.key === "Enter") {
            e.preventDefault();
            nextRef.current.focus();
        }
    };

    let navigate = useNavigate();

    // ===== Registration Handler =====
    const onRegistration = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const mobile = mobileRef.current.value;
        const password = passwordRef.current.value;
        const photo = "";

        // ===== Validation =====
        if (!FormHelper.IsEmail(email)) {
            FormHelper.ErrorRToast("Valid Email Address Required!");
        } else if (FormHelper.IsEmpty(firstName)) {
            FormHelper.ErrorRToast("First Name is required!");
        } else if (FormHelper.IsEmpty(lastName)) {
            FormHelper.ErrorRToast("Last Name is required!");
        } else if (!FormHelper.IsMobile(mobile)) {
            FormHelper.ErrorRToast("Valid Mobile Number Required!");
        } else if (FormHelper.IsEmpty(password)) {
            FormHelper.ErrorRToast("Password is required!");
        } else {
            RegistrationRequest(email, firstName, lastName, mobile, password, "").then((result) => {
                if (result === true) {
                    navigate("/login");
                }
            })
        }
    };

    // ===== JSX =====
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card w-100 p-3">
                        <div className="card-body">
                            <h5>Sign In</h5>
                            <br />
                            <form onSubmit={onRegistration}>
                                <input ref={emailRef} onKeyDown={(e)=> handleEnterFocus(e, firstNameRef)} placeholder="User Email" className="form-control animate__animated animate__fadeInUp inputs" type="email"/>
                                <br />
                                <input ref={firstNameRef} onKeyDown={(e)=> handleEnterFocus(e, lastNameRef)} placeholder="First Name" className="form-control animate__animated animate__fadeInUp inputs" type="text"/>
                                <br />
                                <input ref={lastNameRef} onKeyDown={(e)=> handleEnterFocus(e, mobileRef)} placeholder="Last Name" className="form-control animate__animated animate__fadeInUp inputs" type="text"/>
                                <br />
                                <input ref={mobileRef} onKeyDown={(e)=> handleEnterFocus(e, passwordRef)} placeholder="Mobile" className="form-control animate__animated animate__fadeInUp inputs" type="text"/>
                                <br />
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
                                <br />
                                <button type="submit"  className="btn w-100 animate__animated animate__fadeInUp float-end buttons mb-3">
                                    Next
                                </button>
                            </form>
                            {/*<input ref={emailRef} placeholder="User Email" className="form-control animate__animated animate__fadeInUp inputs" type="email"/>*/}
                            {/*<br />*/}
                            {/*<input ref={firstNameRef} placeholder="First Name" className="form-control animate__animated animate__fadeInUp inputs" type="text"/>*/}
                            {/*<br />*/}
                            {/*<input ref={lastNameRef} placeholder="Last Name" className="form-control animate__animated animate__fadeInUp inputs" type="text"/>*/}
                            {/*<br />*/}
                            {/*<input ref={mobileRef} placeholder="Mobile" className="form-control animate__animated animate__fadeInUp inputs" type="text"/>*/}
                            {/*<br />*/}
                            {/*<div className="position-relative">*/}
                            {/*    <input ref={passwordRef}*/}
                            {/*           placeholder="User Password"*/}
                            {/*           className="form-control animate__animated animate__fadeInUp inputs"*/}
                            {/*           type={showPassWord ? "text" : "password"}*/}
                            {/*    />*/}
                            {/*    <button onClick={()=> setShowpassWord(!showPassWord)}*/}
                            {/*            type="button"*/}
                            {/*            className="position-absolute top-50 end-0 translate-middle-y btn shadow-none bg-transparent border-0 p-2">                                                {showPassWord ? <FaEyeSlash/> : <FaEye/>}*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                            {/*<br />*/}
                            {/*<button type="button" onClick={onRegistration} className="btn w-100 animate__animated animate__fadeInUp float-end buttons mb-3">*/}
                            {/*    Next*/}
                            {/*</button>*/}

                            <div className="text-center w-100">
                                <Link className="text-center animate__animated animate__fadeInUp text-decoration-none text-secondary" to="/login">
                                    Sign In
                                </Link>
                                <br />
                                <Link className="text-center animate__animated animate__fadeInUp text-decoration-none text-secondary" to="/forgetpass">
                                    Forget Password
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;

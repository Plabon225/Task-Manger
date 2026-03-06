import React, {Fragment, useRef} from 'react';
import {Container, Navbar } from "react-bootstrap";
import {AiOutlineCheckCircle, AiOutlineEdit, AiOutlineLogout, AiOutlineMenuUnfold, AiOutlineUser} from "react-icons/ai";
import logo from "../../assets/images/logo.png"
import image from "../../assets/images/DSC01029.JPG"
import {RiDashboardLine} from "react-icons/ri";
import {BsHourglass, BsListNested} from "react-icons/bs";
import {MdOutlineCancelPresentation} from "react-icons/md";
import {NavLink, useNavigate} from "react-router-dom";
import {removeSession} from "../../helper/sessionHelper.js";
import FormHelper from "../../helper/formHelper.jsx";


const MasterLayout = (props) => {
    const contentRef = useRef();
    const sideNavRef = useRef();

    const MenuBarClickHandler = () => {
        let sideNav = sideNavRef;
        let content = contentRef;
        if (sideNav.classList.contains("side-nav-open")) {
            sideNav.classList.add("side-nav-close");
            sideNav.classList.remove("side-nav-open");
            content.classList.add("content-expand");
            sideNav.classList.remove("content");
        } else {
            sideNav.classList.remove("side-nav-close");
            sideNav.classList.add("side-nav-open");
            content.classList.remove("content-expand");
            sideNav.classList.add("content");
        }
    }
    let navigate = useNavigate();
    const onLogout = () => {
        removeSession();
        FormHelper.SuccessToast("Logout successfully.");
        navigate("/", { replace: true });
        window.location.reload();
    };

    return (
        <Fragment>
            <div>
                <Navbar className="sticky-top px-0 shadow-sm navs">
                    <Container fluid={true}>
                        <Navbar.Brand>
                            <a className="icon-nav m-0 h5"><AiOutlineMenuUnfold/></a>
                            <img className="nav-logo mx-2" src={logo} alt="logo"/>
                        </Navbar.Brand>

                        <div className="float-right h-auto d-flex">
                            <div className="user-dropdown">
                                <img className="icon-nav-img icon-nav" src={image}/>
                                <div className="user-dropdown-content">
                                    <div className="mt-4 text-center">
                                        <img className="icon-nav-img icon-nav" src={image}/>
                                        <h6>Hedaytul Islam</h6>
                                        <hr className="user-dropdown-divider p-0"/>
                                    </div>
                                    <NavLink className="side-bar-item text-decoration-none text-secondary" to="/profile">
                                        <AiOutlineUser className="side-bar-item-icon"/>
                                        <span className="side-bar-item-caption ">Profile</span>
                                    </NavLink>
                                    <a className="side-bar-item text-decoration-none text-secondary" onClick={onLogout}>
                                        <AiOutlineLogout className="side-bar-item-icon"/>
                                        <span onClick={onLogout} className="side-bar-item-caption">Logout</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Navbar>

                <div className="side-nav-open shadow-sm" ref={sideNavRef}>
                    <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/" end>
                        <RiDashboardLine className="side-bar-item-icon"/>
                        <span className="side-bar-item-caption ">Dashboard</span>
                    </NavLink>

                    <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/create">
                        <AiOutlineEdit className="side-bar-item-icon"/>
                        <span className="side-bar-item-caption">Create New</span>
                    </NavLink>

                    <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/all">
                        <BsListNested className="side-bar-item-icon"/>
                        <span className="side-bar-item-caption">New Task</span>
                    </NavLink>

                    <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/progress">
                        <BsHourglass className="side-bar-item-icon"/>
                        <span className="side-bar-item-caption">In Progress</span>
                    </NavLink>

                    <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/completed">
                        <AiOutlineCheckCircle className="side-bar-item-icon"/>
                        <span className="side-bar-item-caption">Completed</span>
                    </NavLink>

                    <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/canceled">
                        <MdOutlineCancelPresentation className="side-bar-item-icon"/>
                        <span className="side-bar-item-caption">Canceled</span>
                    </NavLink>
                </div>

                <div ref={contentRef} className="content">
                    {props.children}
                </div>
            </div>
        </Fragment>
    );
};

export default MasterLayout;
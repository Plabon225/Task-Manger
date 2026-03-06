import axios from "axios";
import FormHelper from "../helper/formHelper.jsx";
import store from "../redux/store/store.js";
import {HideLoader, ShowLoader} from "../redux/state-slice/settingsSlice.js";
import {getToken, setToken, setUserDetails} from "../helper/sessionHelper.js"
import {setCanceled, setCompleted, setNew, setProgress} from "../redux/state-slice/taskSlice.js";
import {setSummary} from "../redux/state-slice/summarySlice.js";

const BaseURL= "http://localhost:8080/api/"

// const AxiosHeader = {headers:{"token":getToken()}}
const AxiosHeader = () => ({
    headers: { token: getToken() }
});


export const UpdateStatusRequest = (id, status) => {
    store.dispatch(ShowLoader());
    const url = BaseURL+"updateTask/"+id+"/"+status;
    return axios.put(url,{}, AxiosHeader()).then((res) => {
        store.dispatch(HideLoader());
        if (res.status === 200) {
            FormHelper.SuccessToast("Status Update Successful");
            return true;
        } else {
            FormHelper.ErrorRToast("Something went wrong2");
            return false;
        }
    }).catch((err) => {
        console.log(err);
        FormHelper.ErrorRToast("Something went wrong10");
        store.dispatch(HideLoader());
        return false;
    })
}


export const DeleteRequest = (id) => {
    store.dispatch(ShowLoader());
    const url = BaseURL+"deleteTask/"+id;
    return axios.delete(url,AxiosHeader()).then((res) => {
        store.dispatch(HideLoader());
        if (res.status === 200) {
            FormHelper.SuccessToast("Delete Successful");
            return true;
        } else {
            FormHelper.ErrorRToast("Something went wrong2");
            return false;
        }
    }).catch((err) => {
        console.log(err);
        FormHelper.ErrorRToast("Something went wrong");
        store.dispatch(HideLoader());
        return false;
    })
}

export const SummaryRequest = () => {
    store.dispatch(ShowLoader());
    const url = BaseURL+"taskStatusCount";
    return axios.get(url, AxiosHeader()).then((res) => {
        store.dispatch(HideLoader());
        if (res.status === 200) {
            store.dispatch(setSummary(res.data['data']));
        } else {
            FormHelper.ErrorRToast("Something went wrong!10");
        }
    }).catch((err) => {
        store.dispatch(HideLoader());
        console.log(err);
        FormHelper.ErrorRToast("Something went wrong!20");
    })
}

export const ListTaskByStatus = (status) => {
    store.dispatch(ShowLoader());
    const url = BaseURL + "listTaskByStatus/" + status;

    return axios.get(url, AxiosHeader()).then((res) => {
        store.dispatch(HideLoader());
        if (res.status === 200) {
            if(status==="new"){
                store.dispatch(setNew(res.data['data']));
            } else if (status === "completed"){
                store.dispatch(setCompleted(res.data['data']));
            } else if (status === "canceled"){
                store.dispatch(setCanceled(res.data['data']));
            } else if (status === "progress"){
                store.dispatch(setProgress(res.data['data']));
            } else {
                FormHelper.ErrorRToast("Something went wrong");
            }
        }
    }).catch((err) => {
        console.log(err);
        FormHelper.ErrorRToast("Something went wrong");
        store.dispatch(HideLoader());
    })

}

export const NewTaskRequest = (title, description) => {
    store.dispatch(ShowLoader());
    const url = BaseURL + "createTask";
    const PostBody = { title, description};

    return axios.post(url, PostBody, AxiosHeader()).then((res) => {
            store.dispatch(HideLoader());
        if (res.status===201) {
            FormHelper.SuccessToast("successfully created new task");
            return true
        } else {
            FormHelper.ErrorRToast("something went wrong");
            return false;
        }
    }).catch((err) => {
        console.log(err);
        FormHelper.ErrorRToast("something went wrong10");
        store.dispatch(HideLoader());
        return false;
    })
}

export const LoginRequest = (email, password) => {
    store.dispatch(ShowLoader());
    const url = BaseURL + "login";
    const PostBody = { email, password};

    return axios.post(url, PostBody).then((res) => {
        store.dispatch(HideLoader());

        if(res.data.status==="success"){
            setToken(res.data['token']);
            setUserDetails(res.data['data']);
            FormHelper.SuccessToast("Login Successfull");
            return true;
        } else {
            FormHelper.ErrorRToast("Password Invalid");
            return false;
        }
    }).catch((err) => {
        console.log(err);
        FormHelper.ErrorRToast("Something went wrong");
        store.dispatch(HideLoader());
        return false;
    })
}

export const RegistrationRequest = (email, firstName, lastName, mobile, password) => {
    store.dispatch(ShowLoader())
    const url = BaseURL + "registration";
    const PostBody = { email, firstName, lastName, mobile, password };

    return axios.post(url, PostBody)

        .then(res => {
            store.dispatch(HideLoader());
            if (res.data.status === "success") {
                FormHelper.SuccessToast("Registration Successful");
                return true;
            }

            FormHelper.ErrorRToast("Something Went Wrong");
            return false;
        })

        .catch(err => {
            store.dispatch(HideLoader());
            if (err.response?.status === 409) {
                FormHelper.ErrorRToast("Email Already Exist");
            }
            else if (err.response) {
                FormHelper.ErrorRToast(err.response.data?.message || "Server Error");
            }
            else {
                FormHelper.ErrorRToast("Network Error");
            }

            return false;
        });
};



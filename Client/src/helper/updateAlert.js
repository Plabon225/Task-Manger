import Swal from "sweetalert2";
import {UpdateStatusRequest} from "../API_Request/ApiRequest.js";

export const UpdateTodo = (id, status) => {
    return Swal.fire({
        title: "Change Status",
        input: "select",
        inputOptions: {new: 'new', completed: 'completed', canceled: 'canceled', progress: 'progress'},
        inputValue: status,
    }).then((result) => {
        return UpdateStatusRequest(id, result.value).then((res) => {
            return res;
        })
    })
}
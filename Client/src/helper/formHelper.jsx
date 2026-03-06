// formHelper.jsx
import { toast } from "react-toastify";

let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

class FormHelper {
    IsEmpty(value) {
        return value.length === 0;
    }

    IsMobile(value) {
        return MobileRegx.test(value);
    }

    IsEmail(value) {
        return EmailRegx.test(value);
    }

    ErrorRToast(msg) {
        toast.error(msg, { position: "bottom-center" });
    }

    SuccessToast(msg) {
        toast.success(msg, { position: "bottom-center" });
    }
}

// Export **instance**, not class
export default new FormHelper();

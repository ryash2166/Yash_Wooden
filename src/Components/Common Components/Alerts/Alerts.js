// ALERT 
import {toast} from "react-toastify";

export const showSuccessMessage = (Text,Position) => {
  toast.success(Text, {
    position: Position,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
};

export const showErrorMessage = (Text,Position) => {
  toast.error(Text, {
    position: Position,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
};

export const showWarningMessage = (Text,Position) => {
  toast.warn(Text, {
    position: Position,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
};
import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultOption: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
};

const showToast = (
  message: string,
  type: "success" | "error" | "info" | "warning" = "info"
) => {
  switch (type) {
    case "success":
      toast.success(message, defaultOption);
      break;
    case "error":
      toast.error(message, defaultOption);
      break;
    case "warning":
      toast.warning(message, defaultOption);
      break;
    default:
      toast.info(message, defaultOption);
  }
};

export { showToast };

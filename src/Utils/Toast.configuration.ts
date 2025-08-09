import { toast } from "react-toastify";
import type { ToastOptions } from "react-toastify";
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
  const customStyle = {
    backgroundColor: "#333",
    color: "#ff4d4d",
    fontWeight: "bold",
    fontSize: "14px",
    borderRadius: "6px",
  };
  switch (type) {
    case "success":
      toast.success(message, { ...defaultOption, style: customStyle });
      break;
    case "error":
      toast.error(message, { ...defaultOption, style: customStyle });
      break;
    case "warning":
      toast.warning(message, { ...defaultOption, style: customStyle });
      break;
    default:
      toast.info(message, { ...defaultOption, style: customStyle });
  }
};

export { showToast };

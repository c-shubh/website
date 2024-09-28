import { toast } from "react-toastify";

export function successToast(message: string) {
  toast(message, { type: "success", autoClose: 2000 });
}

export function errorToast(message: string) {
  toast(message, { type: "error", autoClose: 2000 });
}

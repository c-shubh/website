import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* https://docusaurus.io/docs/swizzling#wrapper-your-site-with-root */
export default function Root({ children }: any) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}

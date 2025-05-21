import { LoginPopup } from "../Userlog";
import { Dispatch, SetStateAction } from "react";

const PleaseLogin = ({ setAccessDenied }: { setAccessDenied: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className="fixed inset-0 bg-black/70 z-60 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-2xl text-white max-w-md text-center shadow-lg relative ">
        <button
          className=" text-gray-400 hover:text-white text-lg absolute top-3 right-5"
          onClick={() => setAccessDenied(false)}
          aria-label="Close"
        >
          &times;
        </button>
        <h1 className="text-2xl font-semibold mb-4">You're not logged in</h1>
        <p className="mb-6 text-gray-300">
          Your messages will not be saved unless you log in. Log in to keep your chat history and access it across
          devices.
        </p>
        <LoginPopup />
      </div>
    </div>
  );
};

export default PleaseLogin;

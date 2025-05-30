import { useAuth0 } from "@auth0/auth0-react";
import cortexmind from "../../src/assets/icons/brainseek-final.png";
import { useEffect, useState } from "react";
import logoutSvg from "../assets/icons/logout.svg";
import terms_and_policies from "../assets/icons/terms_and_policies.svg";
import aboutSvg from "../assets/icons/info.svg";
import { useChatStore } from "../store/chatStore";
import { Link } from "react-router-dom";

export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return null;
  } else {
    return (
      <div
        className="className='flex space-x-4 bg-white hover:bg-gray-300 rounded-3xl py-2 px-3 mr-6 font-medium cursor-pointer"
        onClick={() => loginWithRedirect()}
      >
        <button className="cursor-pointer">Log in</button>
      </div>
    );
  }
};

export const LoginPopup = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return null;
  } else {
    return (
      <button
        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg font-medium"
        onClick={() => loginWithRedirect()}
      >
        Log in
      </button>
    );
  }
};

export const UserPic = () => {
  const [imgclicked, setImgClicked] = useState(false);
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const optionsHover = "flex gap-2 border-t-slate-500  hover:bg-slate-600 rounded-md py-1 px-1";

  const clicked = () => {
    setImgClicked(!imgclicked);
  };

  if (isAuthenticated && !isLoading) {
    return (
      <div>
        <div
          className="flex space-x-4 rounded-3xl my-1 mx-2 p-1 font-medium cursor-pointer hover:bg-white/15"
          onClick={clicked}
        >
          <div
            className="w-8 h-8 rounded-full select-none bg-cover bg-center outline-1 outline-white/50"
            style={{ backgroundImage: `url(${cortexmind})` }}
          >
            {user?.picture && (
              <img
                className="w-8 h-8 rounded-full select-none object-cover"
                src={user.picture}
                alt="User picture"
                draggable={false}
                onError={e => {
                  e.currentTarget.style.display = "none";
                }}
              />
            )}
          </div>
        </div>
        {imgclicked === true ? (
          <div className="absolute bg-slate-700 rounded-lg px-2 py-2 -translate-x-40 flex flex-col w-50 text-white text-sm gap-3">
            <Link className={optionsHover} to="/faq">
              <img className="w-5 invert -ml-0.5" src={aboutSvg} alt="svg for about page" draggable="false" />
              <p>FAQ</p>
            </Link>
            <Link className={optionsHover} to="/contact">
              <img className="w-4 invert" src={terms_and_policies} alt="terms and policies svg" />
              <p>Send an email</p>
            </Link>

            <hr className="text-slate-500"></hr>
            <div
              className={optionsHover}
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              <img className="w-5 invert -ml-0.5" src={logoutSvg} alt="log out svg" />
              <p>Log out</p>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
};

export const UserName = () => {
  const { user, isAuthenticated } = useAuth0();
  if (!isAuthenticated || !user) {
    return (
      <div className="flex items-center text-white" draggable="false">
        <img className="w-10" src={cortexmind} alt="brainseek-logo" draggable="false" />
        <p>CortexMind</p>
      </div>
    );
  } else {
    return <p className="text-stone-200 text-base">Welcome, {user?.name}</p>;
  }
};

export const StoreUserId = () => {
  const { user, isAuthenticated } = useAuth0();
  const setUserId = useChatStore(state => state.setUserId);
  const userId = useChatStore(state => state.userId);
  const setAuthenticated = useChatStore(state => state.setAuthenticated);

  useEffect(() => {
    setAuthenticated(isAuthenticated);
  }, [setAuthenticated, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated && user?.sub && userId !== user.sub) {
      setUserId(user.sub);
    }
  }, [isAuthenticated, user, userId, setUserId]);
  return null;
};

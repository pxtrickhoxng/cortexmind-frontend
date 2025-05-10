import { useAuth0 } from "@auth0/auth0-react";
import cortexmind from "../../src/assets/icons/brainseek-final.png";

export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return null;
  } else {
    return (
      <button className="cursor-pointer" onClick={() => loginWithRedirect()}>
        Log in
      </button>
    );
  }
};

export const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return null;
  } else {
    return (
      <button className="cursor-pointer" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
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
    return <p className="text-stone-200">Welcome, {user?.name}</p>;
  }
};

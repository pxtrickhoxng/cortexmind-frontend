import { LoginButton, UserPic, UserName } from "../Userlog";
import openSidebar from "../../assets/icons/sidebarOpen.svg";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useChatStore } from "../../store/chatStore";
import PleaseLogin from "./PleaseLogin";

type topBarTypes = {
  sidebarIsClicked: boolean;
  setSidebarIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

const Topbar = ({ sidebarIsClicked, setSidebarIsClicked }: topBarTypes) => {
  const [opacity, setOpacity] = useState("opacity-100");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const authenticated = useChatStore(state => state.authenticated);
  const [accessDenied, setAccessDenied] = useState(false);

  const handleClickedOpen = () => {
    if (!authenticated) {
      setAccessDenied(true);
      return;
    }

    if (isTransitioning) return;

    setIsTransitioning(true);
    setSidebarIsClicked(true);
    setOpacity("opacity-0");
  };

  const handleClickedClose = () => {
    setIsTransitioning(true);
    setSidebarIsClicked(false);

    setTimeout(() => {
      setOpacity("opacity-100");
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <div>
      <Sidebar isClicked={sidebarIsClicked} handleClickedClose={handleClickedClose} />
      {accessDenied && <PleaseLogin setAccessDenied={setAccessDenied} />}

      <div className="fixed top-0 left-0 w-full py-1 pr-2 flex justify-between items-center">
        <div
          className={`p-2 hover:bg-white/15 mx-4 rounded-2xl select-none ${opacity} ${
            isTransitioning ? "pointer-events-none" : "cursor-pointer"
          }`}
          onClick={handleClickedOpen}
        >
          <img className="invert w-7.5 " src={openSidebar} draggable="false" />
        </div>

        <div
          className={`absolute left-1/2 -translate-x-1/2 transition-all duration-200 ease-in-out ${
            sidebarIsClicked ? "ml-32" : "ml-0"
          }`}
        >
          <UserName />
        </div>

        <LoginButton />
        <UserPic />
      </div>
    </div>
  );
};

export default Topbar;

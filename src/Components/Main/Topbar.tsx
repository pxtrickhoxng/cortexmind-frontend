import { LoginButton, UserPic, UserName } from "../Userlog";
import openSidebar from "../../assets/icons/sidebarOpen.svg";
import Sidebar from "./Sidebar";

type sidebarClicked = { sidebarIsClicked: boolean; setSidebarIsClicked: React.Dispatch<React.SetStateAction<boolean>> };

const Topbar = ({ sidebarIsClicked, setSidebarIsClicked }: sidebarClicked) => {
  const handleClicked = () => {
    setSidebarIsClicked(!sidebarIsClicked);
  };

  return (
    <div>
      <Sidebar isClicked={sidebarIsClicked} />
      <div className="fixed top-0 left-0 w-full py-1 pr-2 flex justify-between items-center">
        <div className="p-2 hover:bg-white/15 mx-4 cursor-pointer rounded-2xl select-none" onClick={handleClicked}>
          <img className="invert w-7.5 " src={openSidebar} draggable="false" />
        </div>

        <div
          className={`absolute left-1/2 -translate-x-1/2 transition-all duration-200 ease-in-out ${sidebarIsClicked ? "ml-32" : "ml-0"}`}
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

import { useState, useRef, useEffect } from "react";
import closeSidebar from "../../assets/icons/sidebarClose.svg";
import newChat from "../../assets/icons/newchat.svg";
import ellipsis from "../../assets/icons/ellipsis.svg";
import "../../assets/css/preview.css";
import axios from "axios";
import { useChatStore } from "../../store/chatStore";
import removeMarkdown from "remove-markdown";
import { ChatMessage } from "../../types/types";
import DeletePopup from "./DeletePopup";

type sidebarTypes = {
  isClicked: boolean;
  handleClickedClose: () => void;
};

const Sidebar = ({ isClicked, handleClickedClose }: sidebarTypes) => {
  const [activePopupIndex, setActivePopupIndex] = useState<number | null>(null);
  const popupRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mostRecentMessages = useChatStore(state => state.mostRecentMessages);
  const setUserInput = useChatStore(state => state.addUserInput);
  const setAiResponse = useChatStore(state => state.addAiOutput);
  const setText = useChatStore(state => state.setText);
  const baseURL = import.meta.env.VITE_BASE_URL;

  const [focusedChat, setFocusedChat] = useState(-1);

  const showDeletePopup = useChatStore(state => state.showDeletePopup);
  const setShowDeletePopup = useChatStore(state => state.setShowDeletePopup);

  const [indexToDelete, setIndexToDelete] = useState(-1);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        activePopupIndex !== null &&
        popupRefs.current[activePopupIndex] &&
        !popupRefs.current[activePopupIndex]?.contains(event.target as Node)
      ) {
        setActivePopupIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activePopupIndex]);

  const handleEllipsisClick = (index: number) => {
    setActivePopupIndex(prev => (prev === index ? null : index));
  };

  const maxLength = 100;

  const previewMessages = mostRecentMessages.map(msg => (msg.length > maxLength ? msg.substring(0, maxLength) : msg));

  const getPreviewMesDiv = (index: number) =>
    `flex justify-between gap-1 rounded-lg p-2 select-none relative group ${
      focusedChat === index ? "bg-slate-800" : "hover:bg-slate-800/60"
    }`;

  const getEllipsisStyling = (index: number) =>
    `invert w-5 rounded-lg cursor-pointer transition-opacity duration-200 ${focusedChat === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`;

  const resetChat = useChatStore(state => state.resetChat);

  const handleNewChat = async () => {
    try {
      await axios.post(`${baseURL}/api/new-chat`);
      resetChat();
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenChat = (msg: string, index: number) => {
    axios.post(`${baseURL}/api/get-chat`, { msg }).then(res => {
      const data: ChatMessage[] = res.data;

      const userMessages = data.filter(item => item.role === "Role.User").map(item => item.content);
      const aiMessages = data.filter(item => item.role === "Role.Assistant").map(item => item.content);

      resetChat();
      userMessages.map(msg => setUserInput(msg));
      aiMessages.map(msg => setAiResponse(msg));

      setText("");
      setFocusedChat(index);
    });
  };

  const handleShowDelPopup = (index: number) => {
    setShowDeletePopup(true);
    setIndexToDelete(index);
  };

  return (
    <div>
      <div
        className={`h-screen w-64 bg-gray-950 fixed top-0 z-50 left-0 transform transition-transform duration-300 ease-in-out ${isClicked ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          className="inline-block p-2 hover:bg-white/20 mx-4 my-1 cursor-pointer rounded-2xl select-none"
          onClick={handleClickedClose}
        >
          <img className="invert w-7.5" src={closeSidebar} draggable="false" />
        </div>

        <div
          className="flex text-white font-medium justify-center items-center gap-2 bg-slate-700 hover:bg-slate-800 active:bg-slate-900 border-slate-500 border-2 rounded-xl px-4 py-2 mx-5 mt-6 select-none"
          onClick={handleNewChat}
        >
          <img className="invert pt-1" src={newChat} draggable="false" />
          <p>New chat</p>
        </div>
        <div className="text-white ml-4 mr-5 mt-20 flex flex-col gap-2 text-sm">
          {previewMessages.map((msg, index) => (
            <div
              className={`${getPreviewMesDiv(index)} flex items-center`}
              key={index}
              ref={el => {
                popupRefs.current[index] = el;
              }}
              onClick={() => handleOpenChat(msg, index)}
            >
              <div className="previewMessageWrapper flex-grow">
                <p>{removeMarkdown(msg)}</p>
              </div>

              <img
                className={getEllipsisStyling(index)}
                src={ellipsis}
                draggable="false"
                onClick={e => {
                  e.stopPropagation();
                  handleEllipsisClick(index);
                }}
              />
              {activePopupIndex === index && showDeletePopup === false && (
                <div
                  className="absolute top-full right-0 mt-1 translate-x-12 bg-slate-600 text-white text-sm px-3 py-1 rounded shadow-md cursor-pointer hover:bg-red-400 hover:text-white transition-colors duration-200 z-50"
                  onClick={e => {
                    e.stopPropagation();
                    handleShowDelPopup(index);
                  }}
                >
                  Delete
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {showDeletePopup && (
        <DeletePopup indexToDelete={indexToDelete} focusedChat={focusedChat} setFocusedChat={setFocusedChat} />
      )}
    </div>
  );
};

export default Sidebar;

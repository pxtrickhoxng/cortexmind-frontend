import { useChatStore } from "../../store/chatStore";
import axios from "axios";

type DeletePopupTypes = {
  indexToDelete: number;
  focusedChat: number;
  setFocusedChat: (focusedChat: number) => void;
};

const DeletePopup = ({ indexToDelete, focusedChat, setFocusedChat }: DeletePopupTypes) => {
  const setShowDeletePopup = useChatStore(state => state.setShowDeletePopup);
  const mostRecentMessages = useChatStore(state => state.mostRecentMessages);
  const setMostRecentMessages = useChatStore(state => state.setMostRecentMessages);
  const resetChat = useChatStore(state => state.resetChat);

  const baseURL = import.meta.env.VITE_BASE_URL;

  const handleDelete = (index: number) => {
    const selectedChat = mostRecentMessages[index];
    axios
      .post(`${baseURL}/api/delete-chat`, { selectedChat })
      .then(() => {
        const currentMessages = mostRecentMessages;
        const updatedMessages = currentMessages.filter((_, i) => i !== index);
        setMostRecentMessages(updatedMessages);

        if (focusedChat === index) {
          setFocusedChat(-1);
        }
      })
      .catch(err => console.error(err))
      .finally(() => {
        setShowDeletePopup(false);
        resetChat();
      });
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-60">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 pt-8 px-8 rounded-2xl text-white z-20">
        <h1 className="font-bold text-lg">Delete chat?</h1>
        <hr className="my-6 opacity-15" />
        <div>
          <p>
            This action is permanent and <span className="font-bold">cannot</span> be undone.
          </p>
        </div>
        <div className="flex justify-end gap-3 my-4">
          <div
            className="bg-slate-900 hover:bg-slate-800 rounded-3xl outline-1 outline-gray-500/50 px-3 py-2 font-bold text-sm"
            onClick={() => setShowDeletePopup(false)}
          >
            <p>Cancel</p>
          </div>
          <div
            className="bg-red-700 hover:bg-red-900 rounded-3xl px-3 py-2 font-bold text-sm"
            onClick={() => handleDelete(indexToDelete)}
          >
            <p>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;

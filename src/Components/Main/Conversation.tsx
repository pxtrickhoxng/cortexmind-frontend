import MainTextArea from "./MainTextArea";
import { useChatStore } from "../../store/chatStore";
import { ConversationMainText } from "../../types/types";
import "highlight.js/styles/github-dark.css";
import CodeMarkdown from "./CodeMarkdown";

const Conversation = ({
  text,
  handleChange,
  handleSubmit,
  selectedOption,
  handleSelectChange,
  loading,
  sidebarIsClicked,
}: ConversationMainText) => {
  const { userInput, aiOutput, currentStreamedMessage, streaming } = useChatStore();

  return (
    <div className={`flex flex-col items-center justify-start min-h-screen w-full pt-20 px-4 sm:px-8 space-y-4 pb-32`}>
      {userInput.map((input, index) => (
        <div key={index} className="w-full max-w-3xl pb-2 shrink-0">
          <div className="flex justify-end mb-2">
            <div className="bg-slate-700 rounded-2xl px-4 py-4">
              <p className="text-white">{input}</p>
            </div>
          </div>

          <CodeMarkdown
            aiOutput={aiOutput}
            userInput={userInput}
            currentStreamedMessage={currentStreamedMessage}
            index={index}
          />
        </div>
      ))}

      <div className="fixed bottom-4 left-0 right-0 flex justify-center px-4">
        <div
          className={`w-full max-w-3xl transition-all duration-200 ease-in-out ${sidebarIsClicked ? "ml-64" : "ml-0"}`}
        >
          <MainTextArea
            text={text}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            selectedOption={selectedOption}
            handleSelectChange={handleSelectChange}
            loading={loading}
            streaming={streaming}
          />
        </div>
      </div>
    </div>
  );
};

export default Conversation;

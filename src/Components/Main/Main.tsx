import { useState } from "react";
import Conversation from "./Conversation";
import Center from "./Center";
import Topbar from "./Topbar";
import axios from "axios";
import FAQButton from "./FAQButton";
import { useChatStore } from "../../store/chatStore";

const Main = () => {
  const [text, setText] = useState("");
  const [selectedOption, setSelectedOption] = useState("General");
  const [hasFailed, setHasFailed] = useState<boolean>(false);
  const [sidebarIsClicked, setSidebarIsClicked] = useState<boolean>(false);

  const {
    userInput,
    aiOutput,
    currentStreamedMessage,
    addUserInput,
    addAiOutput,
    setCurrentStreamedMessage,
    appendToCurrentStreamedMessage,
    streaming,
    setStreaming,
    loading,
    setLoading,
  } = useChatStore();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, selectedOption }),
      });

      if (!response.body) {
        throw new Error("No response body received.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let result = "";

      addUserInput(text);
      setCurrentStreamedMessage("");
      setText("");

      setLoading(false);
      setStreaming(true);

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunk = decoder.decode(value, { stream: true });
        result += chunk;
        appendToCurrentStreamedMessage(chunk);
      }

      setStreaming(false);
      addAiOutput(result);

      await axios.post("http://localhost:3000/api/save-conversation", {
        userInput: [...userInput, text],
        aiOutput: [...aiOutput, result],
        selectedOption,
      });
    } catch (error) {
      setLoading(false);
      setStreaming(false);
      setHasFailed(true);
      setTimeout(() => setHasFailed(false), 5000);
      console.error(`An error has occurred: ${error}`);
    }
  };

  return (
    <div
      className={`transition-all duration-200 ease-in-out ${aiOutput.length === 0 ? "min-h-screen flex flex-col justify-center items-center" : ""} ${sidebarIsClicked ? "ml-64" : "ml-0"}`}
    >
      <Topbar sidebarIsClicked={sidebarIsClicked} setSidebarIsClicked={setSidebarIsClicked} />
      {aiOutput.length === 0 && !currentStreamedMessage ? (
        <Center
          handleChange={handleChange}
          text={text}
          handleSubmit={handleSubmit}
          selectedOption={selectedOption}
          handleSelectChange={handleSelectChange}
          loading={loading}
          hasFailed={hasFailed}
          streaming={streaming}
        />
      ) : (
        <Conversation
          text={text}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          selectedOption={selectedOption}
          handleSelectChange={handleSelectChange}
          loading={loading}
          userInput={userInput}
          aiOutput={aiOutput}
          currentStreamedMessage={currentStreamedMessage}
          streaming={streaming}
          sidebarIsClicked={sidebarIsClicked}
        />
      )}
      {aiOutput.length === 0 ? (
        <footer className="absolute bottom-0 mb-2 text-slate-500 text-sm ">Powered by Deepseek</footer>
      ) : null}
      <FAQButton />
    </div>
  );
};

export default Main;

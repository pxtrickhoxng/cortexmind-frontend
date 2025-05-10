import { TextAreaProps } from "../../types/types";

const style =
  "w-full min-h-[40px] max-h-72 text-white rounded-xl resize-none focus:outline-none bg-transparent custom-scrollbar px-2";

const TextArea = ({ text, handleChange, handleSubmit }: TextAreaProps) => {
  return (
    <textarea
      placeholder="Ask anything"
      className={style}
      value={text}
      onChange={handleChange}
      onKeyDown={e => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          if (text.trim()) {
            handleSubmit();
          }
        }
      }}
    />
  );
};

export default TextArea;

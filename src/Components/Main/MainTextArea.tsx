import TextArea from "./TextArea";
import Select from "./Select";
import SendButton from "./SendButton";
import { MainTextAreaProps } from "../../types/types";

const MainTextArea = ({
  text,
  handleChange,
  handleSubmit,
  selectedOption,
  handleSelectChange,
  loading,
  streaming,
}: MainTextAreaProps) => {
  return (
    <div className="bg-slate-800 rounded-3xl pt-4 pl-4 flex flex-col mt-8 outline-2 outline-slate-700">
      <TextArea text={text} handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="ml-auto relative flex mt-2">
        <Select selectedOption={selectedOption} handleSelectChange={handleSelectChange} />
        <SendButton loading={loading} streaming={streaming} text={text} />
      </div>
    </div>
  );
};

export default MainTextArea;

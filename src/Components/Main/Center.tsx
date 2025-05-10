import FailMessage from "./FailMessage";
import MainTextArea from "./MainTextArea";
import { ExtendedMainTextAreaProps } from "../../types/types";

const Center = ({
  text,
  handleChange,
  handleSubmit,
  selectedOption,
  handleSelectChange,
  loading,
  hasFailed,
  streaming,
}: ExtendedMainTextAreaProps) => {
  return (
    <div className="w-full max-w-3xl mb-24 px-4">
      <h1 className="text-4xl text-white text-center">How can I help you today?</h1>
      <MainTextArea
        text={text}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        selectedOption={selectedOption}
        handleSelectChange={handleSelectChange}
        loading={loading}
        streaming={streaming}
      />
      <FailMessage hasFailed={hasFailed} />
    </div>
  );
};

export default Center;

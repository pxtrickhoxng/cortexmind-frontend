import { SelectProps } from "../../types/types";

const Select = ({ selectedOption, handleSelectChange }: SelectProps) => {
  return (
    <select
      className=" text-white text-sm bg-slate-900 hover:bg-slate-950/75 rounded-2xl px-1 py-1 mb-1 mr-2 cursor-pointer"
      value={selectedOption}
      onChange={handleSelectChange}
    >
      <option>General</option>
      <option>Math</option>
      <option>Coding</option>
      <option>Analysis</option>
      <option>Creative</option>
    </select>
  );
};

export default Select;

export type MainProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export type TextAreaProps = {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
};

export type SelectProps = {
  selectedOption: string;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type MainTextAreaProps = {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
  selectedOption: string;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  loading: boolean;
  streaming: boolean;
};

export type ExtendedMainTextAreaProps = MainTextAreaProps & {
  hasFailed: boolean;
  streaming: boolean;
};

export type ConversationMainText = MainTextAreaProps & {
  userInput: string[];
  aiOutput: string[];
  currentStreamedMessage: string;
  streaming: boolean;
  sidebarIsClicked: boolean;
};

export type ChatMessage = {
  chat_id: string;
  content: string;
  message_id: number;
  role: "Role.User" | "Role.Assistant";
  timestamp: string;
  user_id: number;
};

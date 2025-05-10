import { create } from "zustand";

type ChatStore = {
  userInput: string[];
  aiOutput: string[];
  currentStreamedMessage: string;
  streaming: boolean;
  addUserInput: (input: string) => void;
  addAiOutput: (output: string) => void;
  setCurrentStreamedMessage: (message: string) => void;
  setStreaming: (streaming: boolean) => void;
  appendToCurrentStreamedMessage: (chunk: string) => void;
};

export const useChatStore = create<ChatStore>(set => ({
  userInput: [],
  aiOutput: [],
  currentStreamedMessage: "",
  streaming: false,
  addUserInput: input => set(state => ({ ...state, userInput: [...state.userInput, input] })),
  addAiOutput: output => set(state => ({ ...state, aiOutput: [...state.aiOutput, output] })),
  setCurrentStreamedMessage: message => set(state => ({ ...state, currentStreamedMessage: message })),
  setStreaming: streaming => set(state => ({ ...state, streaming })),
  appendToCurrentStreamedMessage: (chunk: string) =>
    set(state => ({
      ...state,
      currentStreamedMessage: state.currentStreamedMessage + chunk,
    })),
}));

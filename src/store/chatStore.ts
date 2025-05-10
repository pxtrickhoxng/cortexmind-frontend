import { create } from "zustand";

type ChatStore = {
  userInput: string[];
  aiOutput: string[];
  currentStreamedMessage: string;
  addUserInput: (input: string) => void;
  addAiOutput: (output: string) => void;
  setCurrentStreamedMessage: (message: string) => void;
  streaming: boolean;
  setStreaming: (streaming: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  appendToCurrentStreamedMessage: (chunk: string) => void;
};

export const useChatStore = create<ChatStore>(set => ({
  userInput: [],
  aiOutput: [],
  currentStreamedMessage: "",
  addUserInput: input => set(state => ({ ...state, userInput: [...state.userInput, input] })),
  addAiOutput: output => set(state => ({ ...state, aiOutput: [...state.aiOutput, output] })),
  setCurrentStreamedMessage: message => set(state => ({ ...state, currentStreamedMessage: message })),
  streaming: false,
  setStreaming: streaming => set({ streaming }),
  loading: false,
  setLoading: loading => set({ loading }),
  appendToCurrentStreamedMessage: (chunk: string) =>
    set(state => ({
      ...state,
      currentStreamedMessage: state.currentStreamedMessage + chunk,
    })),
}));

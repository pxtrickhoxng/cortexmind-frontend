import { create } from "zustand";

type ChatStore = {
  text: string;
  setText: (text: string) => void;
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
  mostRecentMessages: string[];
  setMostRecentMessages: (mostRecentMessages: string[]) => void;
  resetChat: () => void;
  showDeletePopup: boolean;
  setShowDeletePopup: (showDeletePopup: boolean) => void;
  userId: string;
  setUserId: (userId: string) => void;
  authenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
};

export const useChatStore = create<ChatStore>(set => ({
  text: "",
  setText: text => set({ text }),
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
  mostRecentMessages: [],
  setMostRecentMessages: (mostRecentMessages: string[]) => set({ mostRecentMessages }),
  resetChat: () =>
    set({
      userInput: [],
      aiOutput: [],
      currentStreamedMessage: "",
      streaming: false,
      loading: false,
    }),
  showDeletePopup: false,
  setShowDeletePopup: showDeletePopup => set({ showDeletePopup }),
  userId: "",
  setUserId: userId => set({ userId }),
  authenticated: false,
  setAuthenticated: authenticated => set({ authenticated }),
}));

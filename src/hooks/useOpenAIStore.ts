"use client";
import OpenAI from "openai";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ImageResult = { revisedPrompt: string; url: string };
type Store = {
  promptTemplate: string;
  setPromptTemplate: (promptTemplate: string) => void;
  userPrompt: string;
  setUserPrompt: (userPrompt: string) => void;
  imageResult: OpenAI.Images.Image[];
  setImageResult: (imageResult: OpenAI.Images.Image[]) => void;
};

const useOpenAIStore = create(
  persist<Store>(
    (set, get) => ({
      promptTemplate:
        "Generate an image in the brand style of Madrí Excepcional Beer including the following guidelines:",
      setPromptTemplate: (promptTemplate: string) => set({ promptTemplate }),
      userPrompt: "",
      setUserPrompt: (userPrompt: string) => set({ userPrompt }),
      imageResult: [],
      setImageResult: (imageResult: OpenAI.Images.Image[]) =>
        set({ imageResult }),
    }),
    { name: "open-ai-store" }
  )
);

export default useOpenAIStore;

"use client";

import React, { type FC, useState } from "react";

import useOpenAIStore from "@/hooks/useOpenAIStore";

import ImageResult from "./ImageResult";
import PromptTemplate from "./PromptTemplate";
import UserPrompt from "./UserPrompt";

const GenerateImage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const userPrompt = useOpenAIStore((s) => s.userPrompt);
  const promptTemplate = useOpenAIStore((s) => s.promptTemplate);
  const setImageResult = useOpenAIStore((s) => s.setImageResult);

  const onPaintClick = async () => {
    setIsLoading(true);
    fetch("/api/image-gen", {
      method: "POST",
      body: JSON.stringify({ promptTemplate, userPrompt }),
    })
      .then(async (res) => {
        const json = await res.json();
        console.log(json);
        setImageResult(json);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <PromptTemplate />
      <UserPrompt />
      <button
        className="px-4 py-2 w-full bg-slate-600 text-white rounded-md"
        onClick={onPaintClick}
        disabled={isLoading}
      >
        {isLoading ? "Generating image..." : "Paint it"}
      </button>
      <ImageResult />
    </div>
  );
};

export default GenerateImage;

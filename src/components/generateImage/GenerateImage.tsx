"use client";

import React, { type FC } from "react";

import ImageResult from "./ImageResult";
import PromptTemplate from "./PromptTemplate";
import UserPrompt from "./UserPrompt";

const GenerateImage: FC = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <PromptTemplate />
      <UserPrompt />
      <ImageResult />
    </div>
  );
};

export default GenerateImage;

import React, { type FC } from "react";

import useOpenAIStore from "@/hooks/useOpenAIStore";

const PromptTemplate: FC = () => {
  const templatePrompt = useOpenAIStore((s) => s.promptTemplate);

  return (
    <div className="w-full p-4 rounded-md bg-slate-100 flex flex-col gap-2">
      <h2 className="font-bold text-md">Prompt template:</h2>
      <p>{templatePrompt}</p>
    </div>
  );
};

export default PromptTemplate;

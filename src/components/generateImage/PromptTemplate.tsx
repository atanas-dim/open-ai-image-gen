import React, { type FC } from "react";

import useOpenAIStore from "@/hooks/useOpenAIStore";

const PromptTemplate: FC = () => {
  const templatePrompt = useOpenAIStore((s) => s.promptTemplate);
  const setPromptTemplate = useOpenAIStore((s) => s.setPromptTemplate);

  return (
    <div className="w-full p-4 rounded-md bg-slate-100 flex flex-col gap-2">
      <h2 className="font-bold text-md">Prompt template:</h2>
      <p className="text-sm">{`Include {prompt} in the template text where the User Prompt has to be injected`}</p>
      <textarea
        value={templatePrompt}
        onChange={(e) => setPromptTemplate(e.target.value)}
        className="w-full rounded-md min-h-24 p-4"
      />
    </div>
  );
};

export default PromptTemplate;

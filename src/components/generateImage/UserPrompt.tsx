import React, { type FC, useState } from "react";

import useOpenAIStore from "@/hooks/useOpenAIStore";

const UserPrompt: FC = () => {
  const promptTemplate = useOpenAIStore((s) => s.promptTemplate);
  const userPrompt = useOpenAIStore((s) => s.userPrompt);
  const setUserPrompt = useOpenAIStore((s) => s.setUserPrompt);
  const setImageResult = useOpenAIStore((s) => s.setImageResult);

  const [isLoading, setIsLoading] = useState(false);

  const onPaintClick = async () => {
    setIsLoading(true);
    fetch("/api/image-gen", {
      method: "POST",
      body: JSON.stringify({ prompt: promptTemplate + " " + userPrompt }),
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
    <div className="w-full p-4 rounded-md bg-slate-100 flex flex-col gap-2">
      <h2 className="font-bold text-md">User prompt:</h2>
      <textarea
        value={userPrompt}
        onChange={(e) => setUserPrompt(e.target.value)}
        className="w-full rounded-md min-h-32 p-4"
      />

      <button
        className="px-4 py-2 w-full bg-slate-600 text-white mt-4 rounded-md"
        onClick={onPaintClick}
        disabled={isLoading}
      >
        {isLoading ? "Generating image..." : "Paint it"}
      </button>
    </div>
  );
};

export default UserPrompt;

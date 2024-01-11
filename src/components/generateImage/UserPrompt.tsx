import React, { type FC, useState } from "react";

import useOpenAIStore from "@/hooks/useOpenAIStore";

const UserPrompt: FC = () => {
  const userPrompt = useOpenAIStore((s) => s.userPrompt);
  const setUserPrompt = useOpenAIStore((s) => s.setUserPrompt);

  return (
    <div className="w-full p-4 rounded-md bg-slate-100 flex flex-col gap-2">
      <h2 className="font-bold text-md">User prompt:</h2>
      <textarea
        value={userPrompt}
        onChange={(e) => setUserPrompt(e.target.value)}
        className="w-full rounded-md min-h-24 p-4"
      />
    </div>
  );
};

export default UserPrompt;

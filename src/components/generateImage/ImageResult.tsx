import Image from "next/image";
import React, { type FC } from "react";

import useOpenAIStore from "@/hooks/useOpenAIStore";

const ImageResult: FC = () => {
  const imageResult = useOpenAIStore((s) => s.imageResult);
  return (
    <div className="w-full p-4 rounded-md bg-slate-100 flex flex-col gap-2">
      {imageResult.map((result, index) => {
        if (!result.url) return null;
        return (
          <Image
            key={"ai-gen-img-" + index}
            src={result.url}
            alt="AI generated image"
            width={600}
            height={600}
            className="w-full max-w-[unset]"
          />
        );
      })}
    </div>
  );
};

export default ImageResult;

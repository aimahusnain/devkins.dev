import React from "react";
import Image from "next/image";

interface ValueComponentProps {
  imageSrc: string;
  title: string;
  description: string;
  direction: "Right" | "Left";
}

const ValueComponent: React.FC<ValueComponentProps> = ({
  imageSrc,
  title,
  description,
  direction,
}) => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 md:border-0 border shadow-xl rounded-lg md:shadow-none bg-white p-4 mt-3 mb-3 mx-3 md:p-0 md:bg-transparent justify-between items-center">
        {direction === "Left" ? (
          <>
            <div className="flex justify-center items-center">
              <div className="values-image object-contain">
                <div className="bg-[#00d5b9] opacity-[.24] rounded-full w-[300px] h-[300px] absolute blur-2xl"></div>
                <Image width={280} height={500} src={imageSrc} alt={title} />
              </div>
            </div>
            <div className="mt-5">
              <h1 className="font-bold text-5xl mb-4">{title}</h1>
              <p className="text-md mt-2 text-zinc-600 font-sans">
                {description}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="mt-5">
              <h1 className="font-bold text-5xl mb-4">{title}</h1>
              <p className="text-md mt-2 text-zinc-600 font-sans">
                {description}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="values-image object-contain">
                <div className="bg-[#00d5b9] opacity-[.24] rounded-full w-[300px] h-[300px] absolute blur-2xl"></div>
                <Image width={280} height={500} src={imageSrc} alt={title} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ValueComponent;

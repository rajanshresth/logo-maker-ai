"use client";
import React from "react";
import { Smile } from "lucide-react";
import { useCombinedContext } from "@/context/combined-context";

const LogoPreview: React.FC = () => {
  const {
    backgroundColor,
    backgroundSize,
    backgroundPadding,
    iconSize,
    iconRotate,
    iconColor,
  } = useCombinedContext();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-300">
        <div
          className="h-full w-full flex items-center justify-center"
          style={{
            backgroundColor,
            padding: `${backgroundPadding}px`,
            borderRadius: `${backgroundSize}px`,
          }}
        >
          <Smile
            size={iconSize}
            color={iconColor}
            style={{
              transform: `rotate(${iconRotate}deg)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;

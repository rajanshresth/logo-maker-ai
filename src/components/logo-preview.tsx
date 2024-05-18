"use client";
import React from "react";
import { icons } from "lucide-react";
import { useCombinedContext } from "@/context/combined-context";
import { IconLucide } from "./icon-list";

type IconName = keyof typeof icons;

const LogoPreview: React.FC = () => {
  const {
    backgroundColor,
    backgroundSize,
    backgroundPadding,
    iconSize,
    iconRotate,
    iconColor,
    iconName,
  } = useCombinedContext();

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-400"
        style={{
          padding: `${backgroundPadding}px`,
        }}
      >
        <div
          className="h-full w-full flex items-center justify-center"
          style={{
            background: backgroundColor,
            borderRadius: `${backgroundSize}px`,
          }}
        >
          <IconLucide
            name={iconName as IconName}
            size={iconSize}
            color={iconColor}
            rotate={iconRotate}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;

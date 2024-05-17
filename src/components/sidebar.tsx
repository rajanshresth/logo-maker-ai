"use client";
import React from "react";
import { PencilRuler, ImagePlay, BrainCircuit } from "lucide-react";

interface SideBarProps {
  currentController: (value: "Icons" | "Background" | "AI_Generate") => void;
}
const SideBarItems = [
  {
    name: "Icons",
    state: "Icons",
    icon: <PencilRuler />,
  },
  {
    name: "Background",
    state: "Background",
    icon: <ImagePlay />,
  },
  {
    name: "AI Generate",
    state: "AI_Generate",
    icon: <BrainCircuit />,
  },
] as const;

const SideBar = ({ currentController }: SideBarProps) => {
  return (
    <div className="h-screen w-[20%] border shadow-sm">
      {SideBarItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 p-4 hover:bg-gray-100 hover:dark:bg-gray-800 cursor-pointer"
          onClick={() =>
            currentController(
              item.state as "Icons" | "Background" | "AI_Generate"
            )
          }
        >
          {item.icon}
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SideBar;

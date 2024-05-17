import React from "react";
import { PencilRuler, ImagePlay, BrainCircuit } from "lucide-react";

const SideBarItems = [
  {
    name: "Icons",
    icon: <PencilRuler />,
  },
  {
    name: "Background",
    icon: <ImagePlay />,
  },
  {
    name: "AI Generate",
    icon: <BrainCircuit />,
  },
] as const;

const SideBar = () => {
  return (
    <div className="h-screen w-[20%] border shadow-sm">
      {SideBarItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 p-4 hover:bg-gray-100 hover:dark:bg-gray-800 cursor-pointer"
        >
          {item.icon}
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SideBar;

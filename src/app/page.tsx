"use client";
import React, { useState } from "react";
import AI_Generator from "@/components/ai-generator";
import BackgroundController from "@/components/background-controller";
import IconController from "@/components/icon-controller";
import SideBar from "@/components/sidebar";
import LogoPreview from "@/components/logo-preview";

enum ControllerState {
  Icons = "Icons",
  Background = "Background",
  AI_Generate = "AI_Generate",
}

const controllerComponents = {
  [ControllerState.Icons]: <IconController />,
  [ControllerState.Background]: <BackgroundController />,
  [ControllerState.AI_Generate]: <AI_Generator />,
};

export default function Home() {
  const [currentController, setCurrentController] = useState<ControllerState>(
    ControllerState.Icons
  );

  const ControllerComponent = controllerComponents[currentController];

  return (
    <main className="overflow-hidden">
      <div className="flex gap-1">
        <SideBar
          currentController={(value) =>
            setCurrentController(value as ControllerState)
          }
        />
        <section className=" w-[40%] h-screen overflow-auto custom-scrollbar">
          {ControllerComponent}
        </section>
        <section className=" w-[60%] h-screen flex justify-center items-center">
          <LogoPreview />
        </section>
      </div>
    </main>
  );
}

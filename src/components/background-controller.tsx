// src/components/BackgroundController.tsx
"use client";
import React from "react";
import { Slider } from "@/components/ui/slider";
import ColorController from "./color-controller";
import { useCombinedContext } from "@/context/combined-context";
const DEFAULT_SIZE = 32;

const BackgroundController = () => {
  const {
    backgroundColor,
    setBackgroundColor,
    backgroundSize,
    setBackgroundSize,
    backgroundPadding,
    setBackgroundPadding,
  } = useCombinedContext();

  const handleSliderChange = (value: number[]) => {
    if (value.length > 0) {
      setBackgroundSize(value[0]);
    }
  };

  const handleColorChange = (color: string) => {
    setBackgroundColor(color);
  };

  return (
    <div className="m-4 flex flex-col gap-4 overflow-auto">
      <div className="flex flex-col gap-2">
        <label htmlFor="size" className="flex justify-between">
          Rounded
          <span>{backgroundSize}px</span>
        </label>
        <Slider
          defaultValue={[DEFAULT_SIZE]}
          max={512}
          min={1}
          step={1}
          onValueChange={handleSliderChange}
        />
      </div>
      <div>
        <label htmlFor="padding" className="flex justify-between">
          <span>Padding</span>
          <span>{backgroundPadding}px</span>
        </label>
        <Slider
          defaultValue={[0]}
          max={100}
          min={0}
          step={1}
          onValueChange={(value) => setBackgroundPadding(value[0])}
        />
      </div>
      <ColorController
        hideController={true}
        selectedColor={handleColorChange}
      />
    </div>
  );
};

export default BackgroundController;

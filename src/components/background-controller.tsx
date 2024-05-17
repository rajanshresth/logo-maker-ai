"use client";
import React, { use, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorController from "./color-controller";

const DEFAULT_SIZE = 32;

const BackgroundController = () => {
  const [backgroundSize, setBackgroundSize] = useState(DEFAULT_SIZE);
  const [backgroundPadding, setBackgroundPadding] = useState(0);

  const [backgroundColor, setBackgroundColor] = useState("rgba(255,255,255,1)"); // [1
  // Define the type for the slider change event
  const handleSliderChange = (value: number[]) => {
    if (value.length > 0) {
      setBackgroundSize(value[0]);
    }
  };

  const handleColorChange = (color: string) => {
    setBackgroundColor(color);
  };
  const storeValue = JSON.parse(localStorage.getItem("value") || "{}");
  useEffect(() => {
    const updatedValue = {
      ...storeValue,
      backgroundSize: backgroundSize,
      backgroundPadding: backgroundPadding,
      backgroundColor: backgroundColor,
    };
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [backgroundSize, backgroundPadding, backgroundColor, storeValue]);

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
        <label htmlFor="rotate" className="flex justify-between">
          <span>padding</span>
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

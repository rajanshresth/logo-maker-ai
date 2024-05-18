"use client";
import React from "react";
import { Slider } from "@/components/ui/slider";
import ColorController from "./color-controller";
import { useCombinedContext } from "@/context/combined-context";
import { IconList } from "./icon-list";
const DEFAULT_SIZE = 32;

const IconController: React.FC = () => {
  const {
    iconSize,
    setIconSize,
    iconRotate,
    setIconRotate,
    iconColor,
    setIconColor,
  } = useCombinedContext();

  const handleSliderChange = (value: number[]) => {
    if (value.length > 0) {
      setIconSize(value[0]);
    }
  };

  const handleColorChange = (color: string) => {
    setIconColor(color);
  };

  return (
    <div className="m-4 flex flex-col gap-4 overflow-auto">
      <div className="flex flex-col gap-2">
        <label htmlFor="icon">Icons</label>
        <IconList />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="size" className="flex justify-between">
          Size
          <span>{iconSize}px</span>
        </label>
        <Slider
          defaultValue={[DEFAULT_SIZE]}
          max={256}
          min={1}
          step={1}
          onValueChange={handleSliderChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="rotate" className="flex justify-between">
          <span>Rotate</span>
          <span>{iconRotate}°</span>
        </label>
        <Slider
          defaultValue={[0]}
          max={360}
          min={0}
          step={1}
          onValueChange={(value) => setIconRotate(value[0])}
        />
      </div>
      <ColorController
        hideController={true}
        selectedColor={handleColorChange}
      />
    </div>
  );
};

export default IconController;

import { Smile } from "lucide-react";
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";

const DEFAULT_SIZE = 32;

const IconController = () => {
  const [iconSize, setIconSize] = useState(DEFAULT_SIZE);
  const [iconRotate, setIconRotate] = useState(0);

  // Define the type for the slider change event
  const handleSliderChange = (value: number[]) => {
    if (value.length > 0) {
      setIconSize(value[0]);
    }
  };

  return (
    <div className="m-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="icon">Icons</label>
        <div
          id="icon"
          className="flex items-center justify-center cursor-pointer bg-gray-400 dark:bg-slate-400 w-12 h-12 rounded-lg"
        >
          <Smile size={DEFAULT_SIZE} />
        </div>
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
      <div>
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
    </div>
  );
};

export default IconController;

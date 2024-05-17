"use client";
import React, { useState, useEffect } from "react";
import ColorPicker from "react-best-gradient-color-picker";

// Define the props interface
interface ColorControllerProps {
  hideController?: boolean;
  selectedColor?: (color: string) => void;
}

const ColorController: React.FC<ColorControllerProps> = ({
  hideController = false,
  selectedColor,
}) => {
  const [color, setColor] = useState("rgba(255,255,255,1)");

  // Call the selectedColor function whenever the color changes
  useEffect(() => {
    if (typeof selectedColor === "function") {
      selectedColor(color);
    }
  }, [color, selectedColor]);

  return (
    <ColorPicker
      value={color}
      onChange={(e) => setColor(e)}
      hideControls={hideController}
      hideAdvancedSliders
      hideColorGuide
      hideInputType
    />
  );
};

export default ColorController;

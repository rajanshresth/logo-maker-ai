"use client";
import React, { useContext, useEffect, useState } from "react";

const LogoPreview: React.FC = () => {
  const [storageValue, setStorageValue] = useState({
    backgroundColor: "rgba(255,255,255,1)",
    backgroundSize: 32,
    backgroundPadding: 0,
    iconSize: 32,
    iconRotate: 0,
    iconColor: "rgba(255,255,255,1)",
  });
  console.log(storageValue);
  useEffect(() => {
    const localStorageValue = JSON.parse(localStorage.getItem("value") || "{}");
    const { backgroundColor, backgroundSize, backgroundPadding } =
      localStorageValue;
    console.log(localStorageValue);

    setStorageValue(localStorageValue);
  }, [storageValue]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-300">
        <div
          className="h-full w-full"
          style={{
            backgroundColor: storageValue.backgroundColor,
            padding: `${storageValue.backgroundPadding}px`,
            borderRadius: `${storageValue.backgroundSize}px`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default LogoPreview;

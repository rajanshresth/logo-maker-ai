"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface CombinedContextProps {
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  backgroundSize: number;
  setBackgroundSize: (size: number) => void;
  backgroundPadding: number;
  setBackgroundPadding: (padding: number) => void;
  iconSize: number;
  setIconSize: (size: number) => void;
  iconRotate: number;
  setIconRotate: (rotate: number) => void;
  iconColor: string;
  setIconColor: (color: string) => void;
}

const CombinedContext = createContext<CombinedContextProps | undefined>(
  undefined
);

export const CombinedProvider = ({ children }: { children: ReactNode }) => {
  const [backgroundColor, setBackgroundColor] = useState("rgba(255,255,255,1)");
  const [backgroundSize, setBackgroundSize] = useState(32);
  const [backgroundPadding, setBackgroundPadding] = useState(0);
  const [iconSize, setIconSize] = useState(32);
  const [iconRotate, setIconRotate] = useState(0);
  const [iconColor, setIconColor] = useState("rgba(255,255,255,1)");

  useEffect(() => {
    const storeValue = JSON.parse(localStorage.getItem("value") || "{}");
    const updatedValue = {
      ...storeValue,
      backgroundColor,
      backgroundSize,
      backgroundPadding,
      iconSize,
      iconRotate,
      iconColor,
      icon: "Smile",
    };
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [
    backgroundColor,
    backgroundSize,
    backgroundPadding,
    iconSize,
    iconRotate,
    iconColor,
  ]);

  return (
    <CombinedContext.Provider
      value={{
        backgroundColor,
        setBackgroundColor,
        backgroundSize,
        setBackgroundSize,
        backgroundPadding,
        setBackgroundPadding,
        iconSize,
        setIconSize,
        iconRotate,
        setIconRotate,
        iconColor,
        setIconColor,
      }}
    >
      {children}
    </CombinedContext.Provider>
  );
};

export const useCombinedContext = () => {
  const context = useContext(CombinedContext);
  if (context === undefined) {
    throw new Error(
      "useCombinedContext must be used within a CombinedProvider"
    );
  }
  return context;
};

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
  iconName: string;
  setIconName: (name: string) => void;
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
  const [iconName, setIconName] = useState("Smile");

  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem("value") || "{}");
    if (storedValue) {
      setBackgroundColor(storedValue.backgroundColor || "rgba(255,255,255,1)");
      setBackgroundSize(storedValue.backgroundSize || 32);
      setBackgroundPadding(storedValue.backgroundPadding || 0);
      setIconSize(storedValue.iconSize || 32);
      setIconRotate(storedValue.iconRotate || 0);
      setIconColor(storedValue.iconColor || "rgba(255,255,255,1)");
      setIconName(storedValue.icon || "Smile");
    }
  }, []);

  useEffect(() => {
    const updatedValue = {
      backgroundColor,
      backgroundSize,
      backgroundPadding,
      iconSize,
      iconRotate,
      iconColor,
      icon: iconName,
    };
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [
    backgroundColor,
    backgroundSize,
    backgroundPadding,
    iconSize,
    iconRotate,
    iconColor,
    iconName,
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
        iconName,
        setIconName,
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

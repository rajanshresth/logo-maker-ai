import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type UpdateStorageContextType = {
  updateStorage: {
    backgroundSize: number;
    backgroundPadding: number;
    backgroundColor: string;
  };
  setUpdateStorage: Dispatch<
    SetStateAction<{
      backgroundSize: number;
      backgroundPadding: number;
      backgroundColor: string;
    }>
  >;
};

export const UpdateStorageContext = createContext<
  UpdateStorageContextType | undefined
>(undefined);

export const UpdateStorageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [updateStorage, setUpdateStorage] = useState<{
    backgroundSize: number;
    backgroundPadding: number;
    backgroundColor: string;
  }>({
    backgroundSize: 32,
    backgroundPadding: 0,
    backgroundColor: "rgba(255,255,255,1)",
  });

  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      {children}
    </UpdateStorageContext.Provider>
  );
};

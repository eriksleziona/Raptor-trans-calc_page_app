import { createContext, useContext, useState } from "react";
import type { PropsWithChildren, FC } from "react";
import type { AppContextType } from "./Context.types";

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [volume, setVolume] = useState(0);
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  // #ToDo : Setting context for all Calculators
  return (
    <AppContext.Provider
      value={{
        volume,
        setVolume,
        width,
        setWidth,
        length,
        setLength,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = (): AppContextType | null => {
  return useContext(AppContext);
};

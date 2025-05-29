export type AppContextType = {
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  length: number;
  setLength: React.Dispatch<React.SetStateAction<string>>;
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<string>>;
};

import { createContext } from "react";

const dataContext = createContext();

const GameProvider = ({ children }) => {
  return <dataContext.Provider value={{}}>{children}</dataContext.Provider>;
};

export default GameProvider;

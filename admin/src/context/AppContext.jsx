import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
   const value = {
      // your context state and methods here
   };

   return (
      <AppContext.Provider value={value}>
         {props.children}
      </AppContext.Provider>
   );
};

export default AppContextProvider;

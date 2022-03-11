import React from "react";

interface AppContextInterface {
    // personals: Array<number> | Array<string>,
    // auth: boolean,
    // loading: boolean,
    // error: boolean
  }

const AppServicecontext = React.createContext({} as AppContextInterface);

export default AppServicecontext;
import { createContext } from "react";

export const UserContext = createContext( {
    userID: null,
    setUserID: ( ) => { },
    username: null,
    setUsername: ( ) => { }
} );


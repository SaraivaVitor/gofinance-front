import { createContext } from "react";
import { AuthContextData,  } from "./types/auth";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;

import {  useContext } from "react";
import AuthContext from "../Context";
import { AuthContextData } from "../types/auth";


const useLogin = (): AuthContextData => {
  const context = useContext(AuthContext);
  return context;
};

export default useLogin;

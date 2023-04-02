import { useRouter } from "next/router";
import { ReactNode, useCallback, useEffect, useState } from "react";
import AuthContext from "../Context";
import api from "../services/api";
import { LoginCredentials } from "../types/auth";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthState = {
  token: string;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const [origin, setOrigin] = useState("/");
  const [data, setData] = useState<AuthState | undefined>(() => {
    if (typeof window === "undefined") return {} as AuthState;
    const token = localStorage.getItem("@gofinance:token");
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token };
    }
  });
  useEffect(() => {
    if (
      !data?.token &&
      router.pathname !== "/signin" &&
      router.pathname !== "/signup"
    ) {
      setOrigin(router.pathname);
      router.replace("/signin");
    }
  }, [data, router]);
  const login = useCallback(
    async ({ username, password }: LoginCredentials) => {
      const response = await api.post("/login", {
        username,
        password,
      });
      const accessToken = response.data;
      localStorage.setItem("@gofinance:token", accessToken);
      api.defaults.headers.authorization = `Bearer ${accessToken}`;
      router.replace(origin);
      if (!accessToken) {
        setData(undefined);
      }
      setData({ token: accessToken });
    },
    [origin, router]
  );
  const logout = useCallback(() => {
    localStorage.removeItem("@gofinance:token");
    delete api.defaults.headers.authorization;
    setData(undefined);
  }, []);
  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { authApi, getToken, setToken, clearToken } from "../lib/api";

interface AuthUser {
  id: number;
  username: string;
  email: string;
}

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setTokenState] = useState<string | null>(getToken());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = getToken();
    if (stored) {
      try {
        const payload = JSON.parse(atob(stored.split(".")[1]));
        setUser({ id: payload.userId, username: payload.username, email: "" });
      } catch {
        clearToken();
        setTokenState(null);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    const res = await authApi.login(username, password);
    setToken(res.token);
    setTokenState(res.token);
    setUser(res.user);
  };

  const logout = () => {
    clearToken();
    setTokenState(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
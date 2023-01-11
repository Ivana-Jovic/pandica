import { userInfo } from "data";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type ContextType = {
  user: undefined | userInfo;
  signout: () => void;

  signin: (username: string, password: string) => boolean;
};
type AuthProviderProps = {
  children?: React.ReactNode;
};
export const AuthContext = createContext<ContextType>({
  user: undefined,
  signout: () => {},
  signin: () => false,
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<undefined | userInfo>(undefined);

  const signout = () => {
    localStorage.removeItem("currUser");
    setUser(undefined);
  };

  const signin = (username: string, password: string) => {
    const users: userInfo[] = JSON.parse(localStorage.getItem("users") + "");
    const currUser = users.find((user) => {
      return user.username === username && user.password === password;
    });

    if (currUser) {
      toast.success("Logovan");
      console.log(currUser);
      localStorage.setItem("currUser", JSON.stringify(currUser));
      setUser(currUser);
      return true;
    } else {
      toast.error("Neuspesno");
      return false;
    }
  };
  useEffect(() => {
    const userString = localStorage.getItem("currUser");
    if (typeof userString === "string") setUser(JSON.parse(userString));
  }, []);

  const u: ContextType = {
    user,
    signout,
    signin,
  };
  return <AuthContext.Provider value={u}>{children}</AuthContext.Provider>;
};

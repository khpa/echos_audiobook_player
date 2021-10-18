import * as React from "react";

type User = null | {username: string};

export const AuthContext = React.createContext<{
  user: User;
  signIn: () => void;
  signOut: () => void;
}>({
  user: null,
  signIn: () => {
    console.log("sign in");
  },
  signOut: () => {
    console.log("sign out");
  },
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = React.useState<User>(null);

  const signIn = () => {
    setUser({username: "admin"});
  };

  const signOut = () => {
    setUser(null);
  };

  const values = {
    user,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);

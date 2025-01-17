import { createContext, useContext } from "react";

type User = {
  id: string;
  email?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Temporary mock implementation until Supabase is set up
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const mockUser: User = {
    id: "mock-user-id",
    email: "mock@example.com",
  };

  const mockAuth: AuthContextType = {
    user: mockUser,
    loading: false,
    signIn: async () => {
      console.log("Mock sign in");
    },
    signUp: async () => {
      console.log("Mock sign up");
    },
    signOut: async () => {
      console.log("Mock sign out");
    },
  };

  return (
    <AuthContext.Provider value={mockAuth}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
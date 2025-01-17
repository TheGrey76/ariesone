import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (isSignUp: boolean) => {
    setIsLoading(true);
    try {
      if (isSignUp) {
        await signUp(email, password);
        toast({
          title: "Account created successfully",
          description: "Please check your email to verify your account.",
        });
      } else {
        await signIn(email, password);
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in.",
        });
        navigate("/products");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "An error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      <Navigation />
      <div className="max-w-md mx-auto pt-32 px-4">
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-heading font-bold text-aires-navy mb-6">
            Welcome to AIRES
          </h1>
          <div className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="flex gap-4">
              <Button
                onClick={() => handleSubmit(false)}
                disabled={isLoading}
                className="flex-1"
              >
                Sign In
              </Button>
              <Button
                onClick={() => handleSubmit(true)}
                disabled={isLoading}
                variant="outline"
                className="flex-1"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
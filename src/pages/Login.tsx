import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Lock, Mail } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const validateForm = () => {
    setError("");
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (isSignUp: boolean) => {
    if (!validateForm()) return;

    setIsLoading(true);
    setError("");

    try {
      if (isSignUp) {
        await signUp(email, password);
        toast({
          title: "Account created successfully",
          description: "Please check your email to verify your account before signing in.",
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
      console.error("Auth error:", error);
      let errorMessage = "An error occurred";
      
      if (error instanceof Error) {
        // Handle specific Supabase error messages
        if (error.message.includes("Email not confirmed")) {
          errorMessage = "Please confirm your email address before signing in.";
        } else if (error.message.includes("Invalid login credentials")) {
          errorMessage = "Invalid email or password. Please try again.";
        } else if (error.message.includes("User already registered")) {
          errorMessage = "An account with this email already exists. Please sign in instead.";
        } else {
          errorMessage = error.message;
        }
      }
      
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-aires-navy via-aires-blue to-aires-emerald">
      <Navigation />
      <div className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full">
          <div className="bg-white/95 backdrop-blur-xl p-8 rounded-2xl shadow-2xl animate-fade-up">
            <h1 className="text-3xl font-heading font-bold text-aires-navy mb-2 bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
              Investor Portal
            </h1>
            <p className="text-aires-gray mb-8">
              Access your exclusive financial insights and portfolio analysis
            </p>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-aires-gray" />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="pl-10 bg-white/50 border-aires-gray/20 focus:border-aires-emerald transition-all"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-aires-gray" />
                <Input
                  type="password"
                  placeholder="Password (min. 6 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="pl-10 bg-white/50 border-aires-gray/20 focus:border-aires-emerald transition-all"
                />
              </div>
              <div className="space-y-4">
                <Button
                  onClick={() => handleSubmit(false)}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-aires-navy to-aires-emerald hover:from-aires-blue hover:to-aires-emerald transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => handleSubmit(true)}
                  disabled={isLoading}
                  variant="outline"
                  className="w-full border-aires-gray/20 hover:bg-aires-emerald/10 hover:border-aires-emerald transition-all duration-300"
                >
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
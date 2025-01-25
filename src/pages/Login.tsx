import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import { Mail, Lock } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast({
        variant: "destructive",
        title: "Invalid email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    if (!validatePassword(password)) {
      toast({
        variant: "destructive",
        title: "Invalid password",
        description: "Password must be at least 6 characters long.",
      });
      return;
    }

    try {
      await signUp(email, password);
      toast({
        title: "Account created successfully",
        description: "You can now sign in with your credentials.",
      });
      setEmail("");
      setPassword("");
    } catch (error) {
      let errorMessage = "An error occurred";
      
      if (error instanceof Error) {
        if (error.message.includes("User already registered")) {
          errorMessage = "An account with this email already exists. Please sign in instead.";
        } else {
          errorMessage = error.message;
        }
      }
      
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast({
        variant: "destructive",
        title: "Invalid email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    if (!validatePassword(password)) {
      toast({
        variant: "destructive",
        title: "Invalid password",
        description: "Password must be at least 6 characters long.",
      });
      return;
    }

    try {
      await signIn(email, password);
      navigate("/stock-report");
    } catch (error) {
      let errorMessage = "An error occurred";
      
      if (error instanceof Error) {
        errorMessage = "Invalid email or password. Please try again.";
      }
      
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-aires-navy via-aires-blue to-aires-emerald">
      <div className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-xl animate-fade-up border-aires-lightBlue/20">
          <CardHeader className="space-y-1">
            <CardTitle className="text-4xl font-heading text-center bg-gradient-to-r from-aires-navy via-aires-blue to-aires-emerald bg-clip-text text-transparent">
              AIRES
            </CardTitle>
            <CardDescription className="text-center text-aires-gray">
              Enter your credentials to access the investor portal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="signin" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-aires-navy data-[state=active]:to-aires-blue data-[state=active]:text-white">
                  Sign In
                </TabsTrigger>
                <TabsTrigger value="signup" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-aires-navy data-[state=active]:to-aires-blue data-[state=active]:text-white">
                  Create Account
                </TabsTrigger>
              </TabsList>
              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-6">
                  <div className="space-y-2">
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-aires-gray" />
                      <Input
                        type="email"
                        placeholder="Email"
                        className="pl-10 bg-white/50 backdrop-blur-sm border-aires-lightBlue/30 focus:border-aires-blue"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-5 w-5 text-aires-gray" />
                      <Input
                        type="password"
                        placeholder="Password"
                        className="pl-10 bg-white/50 backdrop-blur-sm border-aires-lightBlue/30 focus:border-aires-blue"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-aires-navy to-aires-blue hover:from-aires-blue hover:to-aires-emerald transition-all duration-300"
                  >
                    Sign In
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-6">
                  <div className="space-y-2">
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-aires-gray" />
                      <Input
                        type="email"
                        placeholder="Email"
                        className="pl-10 bg-white/50 backdrop-blur-sm border-aires-lightBlue/30 focus:border-aires-blue"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-5 w-5 text-aires-gray" />
                      <Input
                        type="password"
                        placeholder="Password"
                        className="pl-10 bg-white/50 backdrop-blur-sm border-aires-lightBlue/30 focus:border-aires-blue"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-aires-navy to-aires-blue hover:from-aires-blue hover:to-aires-emerald transition-all duration-300"
                  >
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
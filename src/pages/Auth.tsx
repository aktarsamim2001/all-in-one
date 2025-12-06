import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Lock, 
  User, 
  Phone,
  Eye,
  EyeOff,
  ArrowLeft,
  Chrome
} from "lucide-react";
import { cn } from "@/lib/utils";

type AuthMode = "login" | "signup" | "verify";

export default function Auth() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="h-10 w-10 rounded-xl bg-gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">MultiServe</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              {mode === "login" && "Welcome back"}
              {mode === "signup" && "Create your account"}
              {mode === "verify" && "Verify your details"}
            </h1>
            <p className="text-muted-foreground">
              {mode === "login" && "Sign in to access your account and services"}
              {mode === "signup" && "Join 50,000+ users enjoying our services"}
              {mode === "verify" && "Complete your profile to get started"}
            </p>
          </div>

          {/* Social Login */}
          {mode !== "verify" && (
            <>
              <Button variant="outline" className="w-full mb-4" size="lg">
                <Chrome className="h-5 w-5 mr-2" />
                Continue with Google
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-background text-muted-foreground">
                    or continue with email
                  </span>
                </div>
              </div>
            </>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name - Signup only */}
            {(mode === "signup" || mode === "verify") && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Phone - Signup & Verify */}
            {(mode === "signup" || mode === "verify") && (
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            )}

            {/* Password */}
            {mode !== "verify" && (
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Forgot Password */}
            {mode === "login" && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <Button type="submit" variant="hero" className="w-full" size="lg">
              {mode === "login" && "Sign In"}
              {mode === "signup" && "Create Account"}
              {mode === "verify" && "Continue"}
            </Button>
          </form>

          {/* Toggle Mode */}
          <p className="text-center text-muted-foreground mt-6">
            {mode === "login" ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-primary font-medium hover:underline"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-primary font-medium hover:underline"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Right Panel - Visual */}
      <div className="hidden lg:flex flex-1 bg-gradient-hero relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%_/_0.1)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }} />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center p-12 text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Your Services,<br />All in One Place
          </h2>
          <p className="text-lg text-white/80 max-w-md mb-8">
            Access healthcare, hotels, travel, and rides with a single account. 
            Earn rewards on every booking.
          </p>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {[
              { label: "Hospital", color: "bg-hospital" },
              { label: "Hotel", color: "bg-hotel" },
              { label: "Travel", color: "bg-travel" },
              { label: "Ride", color: "bg-ride" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className={cn("h-8 w-8 rounded-lg mb-2", item.color)} />
                <p className="font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

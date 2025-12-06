import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-hospital/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-travel/10 to-hotel/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Trusted by 50,000+ users across India</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            All Your Services,
            <span className="block text-gradient mt-2">One Powerful Platform</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Healthcare appointments, hotel bookings, travel packages, and rides — 
            all in one place. Earn rewards, refer friends, and enjoy exclusive membership benefits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/auth">
              <Button variant="hero" size="xl">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/membership">
              <Button variant="glass" size="xl">
                View Membership Plans
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
              <div className="h-10 w-10 rounded-lg bg-hospital/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-hospital" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Verified Partners</p>
                <p className="text-xs text-muted-foreground">100% trusted services</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
              <div className="h-10 w-10 rounded-lg bg-travel/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-travel" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">24/7 Support</p>
                <p className="text-xs text-muted-foreground">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
              <div className="h-10 w-10 rounded-lg bg-hotel/10 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-hotel" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Earn Rewards</p>
                <p className="text-xs text-muted-foreground">Cashback on every booking</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

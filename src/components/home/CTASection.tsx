import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Smartphone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%_/_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 mb-8">
            <Smartphone className="h-4 w-4" />
            <span className="text-sm font-medium">Available on Web, iOS & Android</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block">Service Experience?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Join thousands of satisfied users who have simplified their lives with MultiServe. 
            Start your journey today — it's free to get started!
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth">
              <Button
                size="xl"
                className="bg-white text-primary hover:bg-white/90 shadow-xl"
              >
                Create Free Account
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="xl"
              variant="ghost"
              className="text-white border-2 border-white/30 hover:bg-white/10"
            >
              <Download className="h-5 w-5" />
              Download App
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">50K+</p>
              <p className="text-sm text-white/70">Active Users</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">1M+</p>
              <p className="text-sm text-white/70">Bookings Made</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">4.8★</p>
              <p className="text-sm text-white/70">User Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

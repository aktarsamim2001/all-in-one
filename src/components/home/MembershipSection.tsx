import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Crown, Star, Zap, Diamond } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "metal",
    name: "Metal",
    icon: Zap,
    price: "₹299",
    period: "/month",
    description: "Perfect for healthcare needs",
    color: "from-slate-400 to-slate-600",
    shadowColor: "shadow-slate-500/20",
    modules: ["Hospital"],
    features: [
      "Hospital appointments",
      "Doctor consultations",
      "Basic cashback rewards",
      "Receipt management",
      "Email support",
    ],
    popular: false,
  },
  {
    id: "silver",
    name: "Silver",
    icon: Star,
    price: "₹499",
    period: "/month",
    description: "Healthcare + Hotel access",
    color: "from-gray-300 to-gray-500",
    shadowColor: "shadow-gray-400/20",
    modules: ["Hospital", "Hotel"],
    features: [
      "All Metal features",
      "Hotel bookings",
      "Room services",
      "Enhanced cashback",
      "Priority support",
    ],
    popular: false,
  },
  {
    id: "gold",
    name: "Gold",
    icon: Crown,
    price: "₹799",
    period: "/month",
    description: "Most popular choice",
    color: "from-amber-400 to-amber-600",
    shadowColor: "shadow-amber-500/30",
    modules: ["Hospital", "Hotel", "Travel"],
    features: [
      "All Silver features",
      "Travel packages",
      "Flight & train booking",
      "Premium cashback",
      "24/7 phone support",
    ],
    popular: true,
  },
  {
    id: "platinum",
    name: "Platinum",
    icon: Diamond,
    price: "₹1,299",
    period: "/month",
    description: "Complete access to everything",
    color: "from-violet-400 to-indigo-600",
    shadowColor: "shadow-violet-500/30",
    modules: ["Hospital", "Hotel", "Travel", "Ride"],
    features: [
      "All Gold features",
      "Ride booking",
      "Live ride tracking",
      "Maximum cashback",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

export function MembershipSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
            <Crown className="h-4 w-4" />
            <span className="text-sm font-medium">Membership Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-muted-foreground text-lg">
            Unlock exclusive features, earn rewards, and access premium services with our membership tiers.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={cn(
                "relative p-6 rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-2 animate-slide-up",
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/20"
                  : "border-border hover:border-primary/50 hover:shadow-lg",
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-hero text-primary-foreground text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <div
                  className={cn(
                    "h-16 w-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br",
                    plan.color
                  )}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* Modules Access */}
              <div className="mb-6">
                <p className="text-xs font-medium text-muted-foreground mb-2">ACCESS TO:</p>
                <div className="flex flex-wrap gap-1">
                  {plan.modules.map((module) => (
                    <span
                      key={module}
                      className={cn(
                        "px-2 py-1 rounded text-xs font-medium",
                        module === "Hospital" && "bg-hospital/10 text-hospital",
                        module === "Hotel" && "bg-hotel/10 text-hotel",
                        module === "Travel" && "bg-travel/10 text-travel",
                        module === "Ride" && "bg-ride/10 text-ride"
                      )}
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to="/auth">
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

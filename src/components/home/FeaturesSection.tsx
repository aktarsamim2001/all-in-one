import { 
  Wallet, 
  Users, 
  Shield, 
  Smartphone, 
  CreditCard,
  Gift,
  Clock,
  HeadphonesIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Wallet,
    title: "Integrated Wallet",
    description: "Manage all your earnings, cashback, and referral rewards in one unified wallet.",
    color: "text-hospital bg-hospital/10",
  },
  {
    icon: Users,
    title: "Referral Program",
    description: "Earn coins for every friend you refer. Convert coins to real money and withdraw anytime.",
    color: "text-hotel bg-hotel/10",
  },
  {
    icon: Shield,
    title: "Secure & Verified",
    description: "All partners are verified. Your data is encrypted and stored securely on AWS.",
    color: "text-travel bg-travel/10",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Access all features on the go with our responsive web app and native mobile apps.",
    color: "text-ride bg-ride/10",
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description: "Multiple payment options including UPI, cards, net banking, and wallet balance.",
    color: "text-primary bg-primary/10",
  },
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Get cashback on every booking. Higher membership tiers unlock better rewards.",
    color: "text-hotel bg-hotel/10",
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Live tracking for rides, instant booking confirmations, and real-time notifications.",
    color: "text-hospital bg-hospital/10",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our support team is available round the clock to help you with any issues.",
    color: "text-travel bg-travel/10",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose MultiServe?
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience the convenience of unified services with powerful features designed for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl border border-border bg-background hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                className={cn(
                  "h-12 w-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                  feature.color
                )}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Hotel, 
  Plane, 
  Car,
  ArrowRight,
  Stethoscope,
  Bed,
  Map,
  Navigation
} from "lucide-react";
import { cn } from "@/lib/utils";

const modules = [
  {
    id: "hospital",
    title: "Hospital Management",
    description: "Book doctor appointments, find nearby hospitals, upload receipts, and earn cashback on every consultation.",
    icon: Stethoscope,
    secondaryIcon: Building2,
    href: "/hospital",
    color: "hospital",
    features: ["Doctor Appointments", "Nearby Hospitals", "Receipt Upload", "Cashback Rewards"],
  },
  {
    id: "hotel",
    title: "Hotel Management",
    description: "Search and book rooms at the best hotels. Enjoy exclusive deals, room services, and seamless booking experience.",
    icon: Bed,
    secondaryIcon: Hotel,
    href: "/hotel",
    color: "hotel",
    features: ["Room Booking", "Hotel Search", "Room Services", "Exclusive Offers"],
  },
  {
    id: "travel",
    title: "Travel & Tourism",
    description: "Explore travel packages, book flights, trains, and buses. Get complete itineraries and travel documents.",
    icon: Map,
    secondaryIcon: Plane,
    href: "/travel",
    color: "travel",
    features: ["Travel Packages", "Ticket Booking", "Itinerary Planner", "Document Storage"],
  },
  {
    id: "ride",
    title: "Ride Agency",
    description: "Book rides instantly with live tracking. Choose from various vehicle types and enjoy safe, comfortable travel.",
    icon: Navigation,
    secondaryIcon: Car,
    href: "/ride",
    color: "ride",
    features: ["Instant Booking", "Live Tracking", "Multiple Vehicles", "Safe Travel"],
  },
];

export function ModulesSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Four Powerful Modules,
            <span className="text-gradient block">Endless Possibilities</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Access healthcare, hospitality, travel, and transportation services all from one unified platform.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {modules.map((module, index) => (
            <Link
              key={module.id}
              to={module.href}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={cn(
                  "relative h-full p-8 rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500",
                  "hover:border-transparent hover:shadow-xl hover:-translate-y-2",
                  module.color === "hospital" && "hover:shadow-hospital",
                  module.color === "hotel" && "hover:shadow-hotel",
                  module.color === "travel" && "hover:shadow-travel",
                  module.color === "ride" && "hover:shadow-ride"
                )}
              >
                {/* Background Gradient on Hover */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                    module.color === "hospital" && "bg-gradient-to-br from-hospital to-hospital-dark",
                    module.color === "hotel" && "bg-gradient-to-br from-hotel to-hotel-dark",
                    module.color === "travel" && "bg-gradient-to-br from-travel to-travel-dark",
                    module.color === "ride" && "bg-gradient-to-br from-ride to-ride-dark"
                  )}
                />

                {/* Icon Container */}
                <div className="relative flex items-center gap-4 mb-6">
                  <div
                    className={cn(
                      "h-14 w-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
                      module.color === "hospital" && "bg-hospital/10 text-hospital",
                      module.color === "hotel" && "bg-hotel/10 text-hotel",
                      module.color === "travel" && "bg-travel/10 text-travel",
                      module.color === "ride" && "bg-ride/10 text-ride"
                    )}
                  >
                    <module.icon className="h-7 w-7" />
                  </div>
                  <div
                    className={cn(
                      "h-10 w-10 rounded-lg flex items-center justify-center opacity-50",
                      module.color === "hospital" && "bg-hospital/5 text-hospital",
                      module.color === "hotel" && "bg-hotel/5 text-hotel",
                      module.color === "travel" && "bg-travel/5 text-travel",
                      module.color === "ride" && "bg-ride/5 text-ride"
                    )}
                  >
                    <module.secondaryIcon className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                  {module.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {module.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {module.features.map((feature) => (
                    <span
                      key={feature}
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-medium",
                        module.color === "hospital" && "bg-hospital/10 text-hospital",
                        module.color === "hotel" && "bg-hotel/10 text-hotel",
                        module.color === "travel" && "bg-travel/10 text-travel",
                        module.color === "ride" && "bg-ride/10 text-ride"
                      )}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant={module.color as "hospital" | "hotel" | "travel" | "ride"}
                  className="group/btn"
                >
                  Explore {module.title.split(" ")[0]}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Navigation,
  Clock,
  Star,
  Car,
  Bike,
  Truck,
  Users,
  Shield,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const vehicleTypes = [
  { 
    id: "bike", 
    name: "Bike", 
    icon: Bike, 
    description: "Quick & affordable",
    eta: "2 min",
    price: "₹49",
    capacity: "1 person"
  },
  { 
    id: "auto", 
    name: "Auto", 
    icon: Car, 
    description: "3-wheeler comfort",
    eta: "3 min",
    price: "₹89",
    capacity: "3 people"
  },
  { 
    id: "mini", 
    name: "Mini", 
    icon: Car, 
    description: "Compact car",
    eta: "4 min",
    price: "₹149",
    capacity: "4 people"
  },
  { 
    id: "sedan", 
    name: "Sedan", 
    icon: Car, 
    description: "Comfortable ride",
    eta: "5 min",
    price: "₹199",
    capacity: "4 people"
  },
  { 
    id: "suv", 
    name: "SUV", 
    icon: Truck, 
    description: "Spacious & premium",
    eta: "6 min",
    price: "₹299",
    capacity: "6 people"
  },
];

const recentRides = [
  {
    id: 1,
    from: "Andheri Station",
    to: "BKC Office",
    date: "Today, 9:30 AM",
    price: "₹189",
    vehicle: "Sedan",
    driver: "Rahul S.",
    rating: 4.8,
  },
  {
    id: 2,
    from: "Home",
    to: "Airport T2",
    date: "Yesterday, 6:00 PM",
    price: "₹520",
    vehicle: "SUV",
    driver: "Amit K.",
    rating: 4.9,
  },
  {
    id: 3,
    from: "Mall",
    to: "Railway Station",
    date: "Dec 3, 2:30 PM",
    price: "₹120",
    vehicle: "Auto",
    driver: "Suresh M.",
    rating: 4.7,
  },
];

const savedLocations = [
  { id: 1, name: "Home", address: "123 Marine Drive, Mumbai", icon: "🏠" },
  { id: 2, name: "Office", address: "BKC Tower B, Mumbai", icon: "🏢" },
  { id: 3, name: "Gym", address: "Fitness First, Andheri", icon: "💪" },
];

export default function Ride() {
  const [selectedVehicle, setSelectedVehicle] = useState("sedan");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-ride/10 to-ride/5" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-ride/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Booking Form */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ride/10 text-ride mb-6">
                  <Navigation className="h-4 w-4" />
                  <span className="text-sm font-medium">Ride Agency</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                  Go Anywhere,
                  <span className="block text-ride">Anytime</span>
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8">
                  Book rides instantly with live tracking. Safe, reliable, and affordable.
                </p>

                {/* Booking Form */}
                <div className="bg-card rounded-2xl border border-border p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-ride" />
                      <Input
                        placeholder="Pickup location"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="pl-10 h-14"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border-2 border-ride" />
                      <Input
                        placeholder="Drop-off location"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        className="pl-10 h-14"
                      />
                    </div>
                  </div>

                  {/* Saved Locations */}
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground mb-2">Saved Places</p>
                    <div className="flex gap-2 flex-wrap">
                      {savedLocations.map((loc) => (
                        <button
                          key={loc.id}
                          onClick={() => setDropoff(loc.address)}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                        >
                          <span>{loc.icon}</span>
                          <span className="text-sm font-medium">{loc.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Vehicle Selection */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Choose Your Ride</h3>
                <div className="space-y-3">
                  {vehicleTypes.map((vehicle) => (
                    <button
                      key={vehicle.id}
                      onClick={() => setSelectedVehicle(vehicle.id)}
                      className={cn(
                        "w-full p-4 rounded-xl border transition-all flex items-center gap-4",
                        selectedVehicle === vehicle.id
                          ? "bg-ride/10 border-ride shadow-ride"
                          : "bg-card border-border hover:border-ride/50"
                      )}
                    >
                      <div
                        className={cn(
                          "h-14 w-14 rounded-xl flex items-center justify-center",
                          selectedVehicle === vehicle.id
                            ? "bg-ride text-white"
                            : "bg-secondary text-foreground"
                        )}
                      >
                        <vehicle.icon className="h-7 w-7" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-foreground">{vehicle.name}</h4>
                          <span className="text-lg font-bold text-ride">{vehicle.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{vehicle.description}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {vehicle.eta}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Users className="h-3 w-3" />
                            {vehicle.capacity}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <Button variant="ride" className="w-full mt-6 h-14 text-lg">
                  <Navigation className="h-5 w-5 mr-2" />
                  Book {vehicleTypes.find((v) => v.id === selectedVehicle)?.name}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-ride/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border">
                <div className="h-12 w-12 rounded-xl bg-ride/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-ride" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Safe Rides</h4>
                  <p className="text-sm text-muted-foreground">Verified drivers, SOS button</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border">
                <div className="h-12 w-12 rounded-xl bg-ride/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-ride" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Live Tracking</h4>
                  <p className="text-sm text-muted-foreground">Track your ride in real-time</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border">
                <div className="h-12 w-12 rounded-xl bg-ride/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-ride" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Instant Booking</h4>
                  <p className="text-sm text-muted-foreground">Get a ride in minutes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Rides */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Recent Rides</h2>
              <Button variant="ghost" className="text-ride">
                View All
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentRides.map((ride) => (
                <div
                  key={ride.id}
                  className="bg-card rounded-xl border border-border p-5 hover:shadow-ride transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">{ride.date}</span>
                    <span className="font-semibold text-foreground">{ride.price}</span>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-ride" />
                      <span className="text-sm text-foreground">{ride.from}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full border-2 border-ride" />
                      <span className="text-sm text-foreground">{ride.to}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-ride/10 flex items-center justify-center">
                        <Car className="h-4 w-4 text-ride" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{ride.driver}</p>
                        <p className="text-xs text-muted-foreground">{ride.vehicle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">{ride.rating}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-4">
                    Book Again
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

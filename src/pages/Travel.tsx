import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MapPin, 
  Calendar,
  Users,
  Plane,
  Train,
  Bus,
  Clock,
  Star,
  Map,
  Camera,
  Mountain
} from "lucide-react";
import { cn } from "@/lib/utils";

const travelTypes = [
  { id: "flight", name: "Flights", icon: Plane },
  { id: "train", name: "Trains", icon: Train },
  { id: "bus", name: "Buses", icon: Bus },
  { id: "package", name: "Packages", icon: Map },
];

const travelPackages = [
  {
    id: 1,
    name: "Majestic Rajasthan Tour",
    duration: "7 Days / 6 Nights",
    destinations: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
    price: "₹45,000",
    originalPrice: "₹60,000",
    rating: 4.9,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400",
    includes: ["Hotels", "Meals", "Transport", "Guide"],
    discount: "25% OFF",
  },
  {
    id: 2,
    name: "Kerala Backwaters Escape",
    duration: "5 Days / 4 Nights",
    destinations: ["Kochi", "Munnar", "Alleppey", "Kovalam"],
    price: "₹32,000",
    originalPrice: "₹42,000",
    rating: 4.8,
    reviews: 987,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400",
    includes: ["Hotels", "Houseboat", "Transport", "Guide"],
    discount: "24% OFF",
  },
  {
    id: 3,
    name: "Himalayan Adventure",
    duration: "6 Days / 5 Nights",
    destinations: ["Manali", "Rohtang", "Solang", "Kullu"],
    price: "₹28,000",
    originalPrice: "₹38,000",
    rating: 4.7,
    reviews: 756,
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=400",
    includes: ["Hotels", "Meals", "Adventure", "Guide"],
    discount: "26% OFF",
  },
];

const popularFlights = [
  {
    id: 1,
    from: "Mumbai",
    fromCode: "BOM",
    to: "Delhi",
    toCode: "DEL",
    airline: "IndiGo",
    departure: "06:00",
    arrival: "08:15",
    duration: "2h 15m",
    price: "₹4,299",
    stops: "Non-stop",
  },
  {
    id: 2,
    from: "Delhi",
    fromCode: "DEL",
    to: "Bengaluru",
    toCode: "BLR",
    airline: "Air India",
    departure: "09:30",
    arrival: "12:20",
    duration: "2h 50m",
    price: "₹5,199",
    stops: "Non-stop",
  },
  {
    id: 3,
    from: "Chennai",
    fromCode: "MAA",
    to: "Kolkata",
    toCode: "CCU",
    airline: "SpiceJet",
    departure: "14:00",
    arrival: "16:30",
    duration: "2h 30m",
    price: "₹3,899",
    stops: "Non-stop",
  },
];

export default function Travel() {
  const [selectedType, setSelectedType] = useState("package");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-travel/10 to-travel/5" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-travel/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-travel/10 text-travel mb-6">
                <Plane className="h-4 w-4" />
                <span className="text-sm font-medium">Travel & Tourism</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Explore the World
                <span className="block text-travel">Your Way</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Book flights, trains, buses, and complete travel packages. Plan your perfect trip with us.
              </p>

              {/* Travel Type Tabs */}
              <div className="flex gap-2 mb-6">
                {travelTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all",
                      selectedType === type.id
                        ? "bg-travel text-white shadow-travel"
                        : "bg-card border border-border text-foreground hover:border-travel/50"
                    )}
                  >
                    <type.icon className="h-5 w-5" />
                    {type.name}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="bg-card rounded-2xl border border-border p-4 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="From" className="pl-10 h-12" />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="To" className="pl-10 h-12" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input type="date" className="pl-10 h-12" />
                  </div>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Travelers" className="pl-10 h-12" />
                  </div>
                </div>
                <Button variant="travel" className="w-full mt-4 h-12">
                  <Search className="h-5 w-5 mr-2" />
                  Search {travelTypes.find((t) => t.id === selectedType)?.name}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Packages */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Popular Packages</h2>
                <p className="text-muted-foreground">Curated travel experiences just for you</p>
              </div>
              <Button variant="ghost" className="text-travel">
                View All
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {travelPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-travel transition-all hover:-translate-y-1"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-travel text-white text-sm font-bold">
                      {pkg.discount}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                      {pkg.destinations.slice(0, 3).map((dest) => (
                        <span
                          key={dest}
                          className="px-2 py-1 rounded-full bg-black/50 text-white text-xs backdrop-blur-sm"
                        >
                          {dest}
                        </span>
                      ))}
                      {pkg.destinations.length > 3 && (
                        <span className="px-2 py-1 rounded-full bg-black/50 text-white text-xs backdrop-blur-sm">
                          +{pkg.destinations.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-foreground text-lg">{pkg.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium">{pkg.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <Clock className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {pkg.includes.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 rounded-full bg-travel/10 text-travel text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-foreground">{pkg.price}</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          {pkg.originalPrice}
                        </span>
                        <span className="text-xs text-muted-foreground block">per person</span>
                      </div>
                      <Button variant="travel">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Flights */}
        <section className="py-12 bg-travel/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Popular Flights</h2>
                <p className="text-muted-foreground">Best deals on domestic routes</p>
              </div>
              <Button variant="ghost" className="text-travel">
                View All
              </Button>
            </div>

            <div className="space-y-4">
              {popularFlights.map((flight) => (
                <div
                  key={flight.id}
                  className="bg-card rounded-xl border border-border p-5 hover:shadow-travel transition-all flex flex-col md:flex-row items-center gap-6"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="h-12 w-12 rounded-xl bg-travel/10 flex items-center justify-center">
                      <Plane className="h-6 w-6 text-travel" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{flight.airline}</p>
                      <p className="text-sm text-muted-foreground">{flight.stops}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 flex-1 justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">{flight.departure}</p>
                      <p className="text-sm text-muted-foreground">{flight.fromCode}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-px w-16 bg-border" />
                      <div className="text-center">
                        <Clock className="h-4 w-4 text-muted-foreground mx-auto" />
                        <p className="text-xs text-muted-foreground">{flight.duration}</p>
                      </div>
                      <div className="h-px w-16 bg-border" />
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">{flight.arrival}</p>
                      <p className="text-sm text-muted-foreground">{flight.toCode}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-travel">{flight.price}</p>
                      <p className="text-xs text-muted-foreground">per person</p>
                    </div>
                    <Button variant="travel">Book</Button>
                  </div>
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

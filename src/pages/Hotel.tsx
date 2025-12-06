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
  Star,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Waves,
  Coffee
} from "lucide-react";
import { cn } from "@/lib/utils";

const amenities = [
  { id: "wifi", name: "Free WiFi", icon: Wifi },
  { id: "parking", name: "Parking", icon: Car },
  { id: "restaurant", name: "Restaurant", icon: Utensils },
  { id: "gym", name: "Gym", icon: Dumbbell },
  { id: "pool", name: "Pool", icon: Waves },
  { id: "breakfast", name: "Breakfast", icon: Coffee },
];

const featuredHotels = [
  {
    id: 1,
    name: "The Oberoi Grand",
    location: "Kolkata, West Bengal",
    rating: 4.9,
    reviews: 3456,
    price: "₹8,500",
    originalPrice: "₹12,000",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    amenities: ["wifi", "parking", "restaurant", "gym", "pool"],
    discount: "29% OFF",
  },
  {
    id: 2,
    name: "Taj Palace Hotel",
    location: "New Delhi",
    rating: 4.8,
    reviews: 2891,
    price: "₹12,000",
    originalPrice: "₹16,000",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
    amenities: ["wifi", "parking", "restaurant", "gym", "pool", "breakfast"],
    discount: "25% OFF",
  },
  {
    id: 3,
    name: "ITC Maratha",
    location: "Mumbai, Maharashtra",
    rating: 4.7,
    reviews: 2134,
    price: "₹9,800",
    originalPrice: "₹13,500",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400",
    amenities: ["wifi", "parking", "restaurant", "gym", "breakfast"],
    discount: "27% OFF",
  },
  {
    id: 4,
    name: "The Leela Palace",
    location: "Bengaluru, Karnataka",
    rating: 4.9,
    reviews: 4012,
    price: "₹15,000",
    originalPrice: "₹20,000",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
    amenities: ["wifi", "parking", "restaurant", "gym", "pool", "breakfast"],
    discount: "25% OFF",
  },
];

const popularDestinations = [
  { name: "Goa", hotels: 1250, image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300" },
  { name: "Jaipur", hotels: 890, image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300" },
  { name: "Kerala", hotels: 1100, image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=300" },
  { name: "Shimla", hotels: 650, image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=300" },
];

export default function Hotel() {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const toggleAmenity = (id: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-hotel/10 to-hotel/5" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-hotel/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hotel/10 text-hotel mb-6">
                <Star className="h-4 w-4" />
                <span className="text-sm font-medium">Hotel Management</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Find Your Perfect
                <span className="block text-hotel">Stay</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Discover amazing hotels with exclusive deals. Book rooms, enjoy services, and earn rewards.
              </p>

              {/* Search Bar */}
              <div className="bg-card rounded-2xl border border-border p-4 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Where to?" className="pl-10 h-12" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input type="date" className="pl-10 h-12" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input type="date" className="pl-10 h-12" />
                  </div>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="2 Guests, 1 Room" className="pl-10 h-12" />
                  </div>
                </div>
                <Button variant="hotel" className="w-full mt-4 h-12">
                  <Search className="h-5 w-5 mr-2" />
                  Search Hotels
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-6">Popular Destinations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {popularDestinations.map((dest) => (
                <div
                  key={dest.name}
                  className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{dest.name}</h3>
                    <p className="text-sm text-white/80">{dest.hotels} hotels</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenity Filters */}
        <section className="py-8 border-y border-border bg-card">
          <div className="container mx-auto px-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">Filter by Amenities</h3>
            <div className="flex flex-wrap gap-3">
              {amenities.map((amenity) => (
                <button
                  key={amenity.id}
                  onClick={() => toggleAmenity(amenity.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full border transition-all",
                    selectedAmenities.includes(amenity.id)
                      ? "bg-hotel text-white border-hotel"
                      : "bg-background border-border text-foreground hover:border-hotel/50"
                  )}
                >
                  <amenity.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{amenity.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Hotels */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Featured Hotels</h2>
              <Button variant="ghost" className="text-hotel">
                View All
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredHotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-hotel transition-all hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-hotel text-white text-sm font-bold">
                      {hotel.discount}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{hotel.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium">{hotel.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      <MapPin className="h-3 w-3 inline mr-1" />
                      {hotel.location}
                    </p>
                    <div className="flex gap-2 mb-4">
                      {hotel.amenities.slice(0, 4).map((a) => {
                        const amenity = amenities.find((am) => am.id === a);
                        return amenity ? (
                          <div
                            key={a}
                            className="h-8 w-8 rounded-lg bg-hotel/10 flex items-center justify-center"
                            title={amenity.name}
                          >
                            <amenity.icon className="h-4 w-4 text-hotel" />
                          </div>
                        ) : null;
                      })}
                      {hotel.amenities.length > 4 && (
                        <div className="h-8 w-8 rounded-lg bg-hotel/10 flex items-center justify-center text-hotel text-xs font-medium">
                          +{hotel.amenities.length - 4}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-foreground">{hotel.price}</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          {hotel.originalPrice}
                        </span>
                        <span className="text-xs text-muted-foreground block">per night</span>
                      </div>
                      <Button variant="hotel" size="sm">
                        Book Now
                      </Button>
                    </div>
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

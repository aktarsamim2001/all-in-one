import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookingDialog } from "@/components/hospital/BookingDialog";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Calendar,
  Stethoscope,
  Heart,
  Brain,
  Bone,
  Eye,
  Baby,
  Activity,
  Building2,
  Users,
  Award,
  Shield,
  Ambulance,
  Bed,
  ChevronLeft,
} from "lucide-react";

// Mock data - in real app, fetch from database
const hospitalsData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Apollo Hospitals",
    address: "21 Greams Lane, Chennai, Tamil Nadu 600006",
    distance: "2.5 km",
    rating: 4.8,
    reviews: 2456,
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800",
    specialties: ["Cardiology", "Neurology", "Orthopedic", "Oncology", "Pediatrics"],
    availability: "Open 24/7",
    phone: "+91 44 2829 3333",
    email: "info@apollohospitals.com",
    established: 1983,
    beds: 500,
    description: "Apollo Hospitals is one of India's leading healthcare groups with a robust presence across the healthcare ecosystem. The hospital offers world-class treatment facilities with state-of-the-art technology and highly skilled medical professionals.",
    facilities: ["Emergency Care", "ICU", "Operation Theaters", "Pharmacy", "Diagnostic Labs", "Blood Bank", "Cafeteria", "Parking"],
    accreditations: ["NABH", "JCI", "NABL"],
    images: [
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800",
    ],
  },
  "2": {
    id: 2,
    name: "Fortis Healthcare",
    address: "154 NSK Salai, Mumbai, Maharashtra 400001",
    distance: "3.8 km",
    rating: 4.6,
    reviews: 1823,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
    specialties: ["General", "Pediatrics", "Emergency", "Gynecology", "Dermatology"],
    availability: "Open 24/7",
    phone: "+91 22 6657 8000",
    email: "info@fortishealthcare.com",
    established: 2001,
    beds: 350,
    description: "Fortis Healthcare Limited is one of India's leading integrated healthcare delivery service providers. The company operates its healthcare delivery network in India, Dubai, Mauritius and Sri Lanka.",
    facilities: ["Emergency Care", "ICU", "Operation Theaters", "Pharmacy", "Diagnostic Labs", "Cafeteria", "Parking"],
    accreditations: ["NABH", "NABL"],
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800",
    ],
  },
  "3": {
    id: 3,
    name: "Max Super Specialty",
    address: "Press Enclave Marg, Delhi 110017",
    distance: "5.2 km",
    rating: 4.7,
    reviews: 3102,
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800",
    specialties: ["Ophthalmology", "Cardiology", "Neurology", "Orthopedic", "Urology"],
    availability: "Open 24/7",
    phone: "+91 11 2651 5050",
    email: "info@maxhealthcare.com",
    established: 2000,
    beds: 450,
    description: "Max Super Speciality Hospital is a leading healthcare provider in India, known for its advanced medical technology and comprehensive patient care services.",
    facilities: ["Emergency Care", "ICU", "Operation Theaters", "Pharmacy", "Diagnostic Labs", "Blood Bank", "Cafeteria", "Parking", "Helipad"],
    accreditations: ["NABH", "JCI", "NABL"],
    images: [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
    ],
  },
};

const doctorsData: Record<string, any[]> = {
  "1": [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialty: "Cardiologist",
      experience: "15 years",
      rating: 4.9,
      fee: 800,
      nextSlot: "Today, 4:00 PM",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200",
      education: "MBBS, MD (Cardiology), DM",
      languages: ["English", "Hindi", "Tamil"],
    },
    {
      id: 4,
      name: "Dr. Suresh Menon",
      specialty: "Neurologist",
      experience: "18 years",
      rating: 4.8,
      fee: 1000,
      nextSlot: "Today, 5:30 PM",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200",
      education: "MBBS, MD (Neurology), DM",
      languages: ["English", "Hindi", "Malayalam"],
    },
    {
      id: 5,
      name: "Dr. Kavitha Rajan",
      specialty: "Orthopedic",
      experience: "12 years",
      rating: 4.7,
      fee: 700,
      nextSlot: "Tomorrow, 10:00 AM",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200",
      education: "MBBS, MS (Orthopedics)",
      languages: ["English", "Hindi", "Tamil"],
    },
  ],
  "2": [
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialty: "Neurologist",
      experience: "20 years",
      rating: 4.8,
      fee: 1000,
      nextSlot: "Tomorrow, 10:00 AM",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200",
      education: "MBBS, MD (Neurology), DM",
      languages: ["English", "Hindi", "Marathi"],
    },
    {
      id: 6,
      name: "Dr. Neha Gupta",
      specialty: "Pediatrician",
      experience: "10 years",
      rating: 4.9,
      fee: 600,
      nextSlot: "Today, 3:00 PM",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200",
      education: "MBBS, MD (Pediatrics)",
      languages: ["English", "Hindi"],
    },
  ],
  "3": [
    {
      id: 3,
      name: "Dr. Ananya Patel",
      specialty: "Pediatrician",
      experience: "12 years",
      rating: 4.9,
      fee: 600,
      nextSlot: "Today, 6:30 PM",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200",
      education: "MBBS, MD (Pediatrics), Fellowship",
      languages: ["English", "Hindi", "Gujarati"],
    },
    {
      id: 7,
      name: "Dr. Amit Verma",
      specialty: "Ophthalmologist",
      experience: "14 years",
      rating: 4.8,
      fee: 800,
      nextSlot: "Tomorrow, 11:00 AM",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200",
      education: "MBBS, MS (Ophthalmology)",
      languages: ["English", "Hindi"],
    },
    {
      id: 8,
      name: "Dr. Shalini Kapoor",
      specialty: "Cardiologist",
      experience: "16 years",
      rating: 4.9,
      fee: 900,
      nextSlot: "Today, 4:30 PM",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200",
      education: "MBBS, MD (Cardiology), DM",
      languages: ["English", "Hindi", "Punjabi"],
    },
  ],
};

const departmentIcons: Record<string, any> = {
  Cardiology: Heart,
  Neurology: Brain,
  Orthopedic: Bone,
  Ophthalmology: Eye,
  Pediatrics: Baby,
  Emergency: Activity,
  General: Stethoscope,
  Oncology: Activity,
  Gynecology: Users,
  Dermatology: Users,
  Urology: Users,
};

export default function HospitalDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const hospital = hospitalsData[id || "1"];
  const doctors = doctorsData[id || "1"] || [];

  if (!hospital) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16 container mx-auto px-4">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-foreground mb-4">Hospital Not Found</h1>
            <Button onClick={() => navigate("/hospital")}>Back to Hospitals</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleBookAppointment = (doctor: any) => {
    setSelectedDoctor(doctor);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Back Button */}
        <div className="container mx-auto px-4 mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/hospital")}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Hospitals
          </Button>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-8">
          <div className="relative rounded-3xl overflow-hidden h-64 md:h-96">
            <img
              src={hospital.image}
              alt={hospital.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <Badge className="bg-hospital text-white mb-3">
                {hospital.availability}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {hospital.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{hospital.address}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">{hospital.rating}</span>
                  <span className="text-sm">({hospital.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="container mx-auto px-4 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card rounded-xl border border-border p-4 flex items-center gap-3">
              <div className="p-3 rounded-lg bg-hospital/10">
                <Phone className="h-5 w-5 text-hospital" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="font-medium text-foreground text-sm">{hospital.phone}</p>
              </div>
            </div>
            <div className="bg-card rounded-xl border border-border p-4 flex items-center gap-3">
              <div className="p-3 rounded-lg bg-hospital/10">
                <Clock className="h-5 w-5 text-hospital" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Hours</p>
                <p className="font-medium text-foreground text-sm">{hospital.availability}</p>
              </div>
            </div>
            <div className="bg-card rounded-xl border border-border p-4 flex items-center gap-3">
              <div className="p-3 rounded-lg bg-hospital/10">
                <Bed className="h-5 w-5 text-hospital" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Beds</p>
                <p className="font-medium text-foreground text-sm">{hospital.beds}+</p>
              </div>
            </div>
            <div className="bg-card rounded-xl border border-border p-4 flex items-center gap-3">
              <div className="p-3 rounded-lg bg-hospital/10">
                <Award className="h-5 w-5 text-hospital" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Est.</p>
                <p className="font-medium text-foreground text-sm">{hospital.established}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start mb-6 bg-muted/50 p-1 rounded-xl">
              <TabsTrigger value="overview" className="rounded-lg">Overview</TabsTrigger>
              <TabsTrigger value="doctors" className="rounded-lg">Doctors</TabsTrigger>
              <TabsTrigger value="departments" className="rounded-lg">Departments</TabsTrigger>
              <TabsTrigger value="facilities" className="rounded-lg">Facilities</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="bg-card rounded-2xl border border-border p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">About</h2>
                <p className="text-muted-foreground leading-relaxed">{hospital.description}</p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Accreditations</h2>
                <div className="flex flex-wrap gap-3">
                  {hospital.accreditations.map((acc: string) => (
                    <div
                      key={acc}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-hospital/10"
                    >
                      <Shield className="h-4 w-4 text-hospital" />
                      <span className="font-medium text-hospital">{acc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Specialties</h2>
                <div className="flex flex-wrap gap-2">
                  {hospital.specialties.map((spec: string) => (
                    <Badge
                      key={spec}
                      variant="secondary"
                      className="px-3 py-1.5"
                    >
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Doctors Tab */}
            <TabsContent value="doctors" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    className="bg-card rounded-2xl border border-border p-5 hover:shadow-hospital transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                        <p className="text-sm text-hospital">{doctor.specialty}</p>
                        <p className="text-xs text-muted-foreground">{doctor.education}</p>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-yellow-500/10">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium text-foreground">{doctor.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-muted-foreground">{doctor.experience} exp.</span>
                      <span className="font-semibold text-foreground">₹{doctor.fee}</span>
                    </div>

                    <div className="flex items-center gap-2 p-3 rounded-lg bg-hospital/10 mb-4">
                      <Clock className="h-4 w-4 text-hospital" />
                      <span className="text-sm text-hospital font-medium">
                        Next: {doctor.nextSlot}
                      </span>
                    </div>

                    <Button
                      variant="hospital"
                      className="w-full"
                      onClick={() => handleBookAppointment(doctor)}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Departments Tab */}
            <TabsContent value="departments" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {hospital.specialties.map((dept: string) => {
                  const Icon = departmentIcons[dept] || Stethoscope;
                  return (
                    <div
                      key={dept}
                      className="bg-card rounded-xl border border-border p-5 flex flex-col items-center text-center hover:border-hospital/50 transition-colors cursor-pointer"
                    >
                      <div className="p-4 rounded-full bg-hospital/10 mb-3">
                        <Icon className="h-6 w-6 text-hospital" />
                      </div>
                      <h3 className="font-medium text-foreground">{dept}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {doctors.filter((d) => d.specialty.includes(dept.slice(0, 4))).length || 1}+ Doctors
                      </p>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            {/* Facilities Tab */}
            <TabsContent value="facilities" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {hospital.facilities.map((facility: string) => (
                  <div
                    key={facility}
                    className="bg-card rounded-xl border border-border p-4 flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-hospital/10">
                      {facility === "Emergency Care" ? (
                        <Ambulance className="h-5 w-5 text-hospital" />
                      ) : facility === "ICU" ? (
                        <Activity className="h-5 w-5 text-hospital" />
                      ) : (
                        <Building2 className="h-5 w-5 text-hospital" />
                      )}
                    </div>
                    <span className="font-medium text-foreground text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />

      {/* Booking Dialog */}
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        doctor={selectedDoctor}
        hospital={hospital}
      />
    </div>
  );
}
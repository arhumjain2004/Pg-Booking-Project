import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Search, MapPin, Users, Star, Wifi, Car, Utensils, Menu, User, Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-pg.jpg";
import pgRoom1 from "@/assets/pg-room-1.jpg";
import pgRoom2 from "@/assets/pg-room-2.jpg";
import pgRoom3 from "@/assets/pg-room-3.jpg";

const Index = () => {
  // Simple PG data array
  const pgData = [
    {
      id: 1,
      name: "Sunshine PG for Boys",
      location: "Koramangala, Bangalore",
      image: pgRoom1,
      price: 12000,
      rating: 4.2,
      reviews: 128,
      type: "Single",
      amenities: ["WiFi", "Meals", "AC", "Laundry"]
    },
    {
      id: 2,
      name: "Royal Comfort PG",
      location: "HSR Layout, Bangalore", 
      image: pgRoom2,
      price: 8500,
      rating: 4.0,
      reviews: 96,
      type: "Double Sharing",
      amenities: ["WiFi", "Parking", "Meals", "Security"]
    },
    {
      id: 3,
      name: "Elite Stays Premium PG",
      location: "Indiranagar, Bangalore",
      image: pgRoom3,
      price: 15000,
      rating: 4.5,
      reviews: 203,
      type: "Single",
      amenities: ["WiFi", "AC", "Parking", "Gym"]
    },
    {
      id: 4,
      name: "Metro View PG",
      location: "Whitefield, Bangalore",
      image: pgRoom1,
      price: 9500,
      rating: 3.8,
      reviews: 74,
      type: "Triple Sharing",
      amenities: ["WiFi", "Meals", "Security"]
    },
    {
      id: 5,
      name: "Green Valley PG",
      location: "BTM Layout, Bangalore", 
      image: pgRoom2,
      price: 11000,
      rating: 4.1,
      reviews: 156,
      type: "Double Sharing",
      amenities: ["WiFi", "AC", "Parking", "Meals"]
    },
    {
      id: 6,
      name: "Tech Hub PG",
      location: "Electronic City, Bangalore",
      image: pgRoom3,
      price: 13500,
      rating: 4.3,
      reviews: 89,
      type: "Single", 
      amenities: ["WiFi", "AC", "Gym", "Meals"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            <span className="text-xl font-bold">PGFinder</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-orange-500">Find PG</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">List Property</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">About</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Perfect PG Stay
          </h1>
          <p className="text-xl mb-8">
            Discover comfortable, affordable, and safe paying guest accommodations
          </p>
          
          {/* Simple Search Bar */}
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  className="pl-10 h-12" 
                  placeholder="Enter city or area"
                />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-md">
                  <option>Select Occupancy</option>
                  <option>Single</option>
                  <option>Double Sharing</option>
                  <option>Triple Sharing</option>
                </select>
              </div>
              <Button className="h-12 bg-orange-500 hover:bg-orange-600">
                <Search className="h-5 w-5 mr-2" />
                Search PGs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose PGFinder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
              <p className="text-gray-600">Properties near metro, IT hubs, and colleges</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Reviews</h3>
              <p className="text-gray-600">Real reviews from actual residents</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe Community</h3>
              <p className="text-gray-600">Verified and secure accommodations</p>
            </div>
          </div>
        </div>
      </section>

      {/* PG Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured PG Accommodations</h2>
            <p className="text-gray-600">Handpicked stays with great amenities and locations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pgData.map((pg) => (
              <Card key={pg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={pg.image} 
                    alt={pg.name}
                    className="w-full h-48 object-cover"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Badge className="absolute bottom-3 left-3 bg-white text-gray-700">
                    {pg.type}
                  </Badge>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{pg.name}</h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="h-3 w-3 mr-1" />
                        {pg.location}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm ml-1">{pg.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({pg.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {pg.amenities.slice(0, 3).map((amenity) => (
                      <span key={amenity} className="text-xs bg-gray-100 px-2 py-1 rounded-full flex items-center">
                        {amenity === 'WiFi' && <Wifi className="h-3 w-3 mr-1" />}
                        {amenity === 'Parking' && <Car className="h-3 w-3 mr-1" />}
                        {amenity === 'Meals' && <Utensils className="h-3 w-3 mr-1" />}
                        {amenity}
                      </span>
                    ))}
                    {pg.amenities.length > 3 && (
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                        +{pg.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold">₹{pg.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-500">/month</span>
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="text-xl font-bold">PGFinder</span>
              </div>
              <p className="text-gray-400">
                Find the perfect PG accommodation that feels like home.
              </p>
              <div className="flex space-x-4 mt-4">
                <Facebook className="h-5 w-5 hover:text-orange-500 cursor-pointer" />
                <Twitter className="h-5 w-5 hover:text-orange-500 cursor-pointer" />
                <Instagram className="h-5 w-5 hover:text-orange-500 cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500">Find PG</a></li>
                <li><a href="#" className="hover:text-orange-500">List Property</a></li>
                <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Popular Cities</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500">Bangalore</a></li>
                <li><a href="#" className="hover:text-orange-500">Mumbai</a></li>
                <li><a href="#" className="hover:text-orange-500">Delhi</a></li>
                <li><a href="#" className="hover:text-orange-500">Pune</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 98765 43210
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  help@pgfinder.com
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PGFinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Moon,
  Sun,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Star,
  Menu,
  X,
  Calendar,
  Palette,
  Sparkles,
  Users,
  Award,
  Heart,
} from "lucide-react";
import bridal from "./assets/bridal.jpg";
import Traditional from "./assets/Traditional.jpg";
import dummy from "./assets/dummy.jpg";
import makeup from "./assets/makeup.jpg";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const services = [
    {
      title: "Bridal Makeup",
      description:
        "Complete bridal transformation with traditional and modern techniques",
      icon: <Heart className="w-8 h-8" />,
      price: "Starting ₹3,000",
    },
    {
      title: "Party Makeup",
      description: "Glamorous looks for special occasions and celebrations",
      icon: <Sparkles className="w-8 h-8" />,
      price: "Starting ₹3,000",
    },
    {
      title: "Airbrush Makeup",
      description:
        "Flawless, long-lasting finish with professional airbrush technique",
      icon: <Palette className="w-8 h-8" />,
      price: "Starting ₹5,000",
    },
    {
      title: "Group Bookings",
      description: "Special packages for bride & family members",
      icon: <Users className="w-8 h-8" />,
      price: "Custom Packages",
    },
  ];

  const portfolio = [
    {
      id: 1,
      category: "Bridal",
      image: bridal,
    },
    {
      id: 2,
      category: "Traditional",
      image:
        "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 3,
      category: "Party",
      image:
        "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 4,
      category: "Creative",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 5,
      category: "Bridal",
      image:
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 6,
      category: "Traditional",
      image: Traditional,
    },
    {
      id: 7,
      category: "Party",
      image:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 8,
      category: "Creative",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 9,
      category: "Bridal",
      image:
        "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 10,
      category: "Traditional",
      image:
        "https://images.unsplash.com/photo-1592621385612-4d7129426394?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 11,
      category: "Party",
      image:
        "https://images.unsplash.com/photo-1586297098710-0382a496c814?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 12,
      category: "Creative",
      image:
        "https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?w=400&h=500&fit=crop&crop=face",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Jayant transformed me for my wedding day. The makeup was flawless and lasted the entire ceremony!",
      image: dummy,
    },
    {
      name: "Ananya Gupta",
      rating: 5,
      text: "Professional, talented, and so easy to work with. My party makeup was absolutely stunning!",
      image: dummy,
    },
    {
      name: "Meera Patel",
      rating: 5,
      text: "The airbrush makeup technique is incredible. My skin looked perfect in all the photos!",
      image: dummy,
    },
  ];

  const themeClasses = isDark ? "dark" : "";

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${themeClasses}`}
    >
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Header */}
        <header className="fixed w-full top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Palette className="w-8 h-8 text-pink-600" />
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Jayant Makeup Artist
                </span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#home"
                  className="hover:text-pink-600 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:text-pink-600 transition-colors"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="hover:text-pink-600 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#portfolio"
                  className="hover:text-pink-600 transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="hover:text-pink-600 transition-colors"
                >
                  Contact
                </a>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isDark ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="md:hidden flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isDark ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-4 mt-4">
                  <a
                    href="#home"
                    className="hover:text-pink-600 transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="hover:text-pink-600 transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#services"
                    className="hover:text-pink-600 transition-colors"
                  >
                    Services
                  </a>
                  <a
                    href="#portfolio"
                    className="hover:text-pink-600 transition-colors"
                  >
                    Portfolio
                  </a>
                  <a
                    href="#contact"
                    className="hover:text-pink-600 transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            )}
          </nav>
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4 mt-1">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    Professional
                    <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      Makeup Artist
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                    Transform your special moments with expert makeup artistry.
                    From bridal to party looks, I create stunning
                    transformations that make you shine.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    <a href="#contact" className="hover:text-white">
                      Book Now
                    </a>
                  </button>
                  {/* <button className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition-all duration-300">
                    View Portfolio
                  </button> */}
                </div>

                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">100+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Happy Clients
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">1+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Satisfaction
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                  <img
                    src={makeup}
                    alt="Professional Makeup"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-full shadow-xl">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-full shadow-xl">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Passionate makeup artist with years of experience in creating
                stunning looks for every occasion
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">
                  Creating Beauty, One Face at a Time
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  With over 1+ years of professional experience, I specialize in
                  traditional, modern, and airbrush makeup techniques. My
                  passion lies in enhancing natural beauty and creating looks
                  that make every client feel confident and radiant.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  From intimate gatherings to grand celebrations, I ensure every
                  detail is perfect. My expertise includes bridal makeup, party
                  looks, and creative artistic designs that reflect your unique
                  style.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <div className="font-semibold">
                        Certified Professional
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Licensed & Trained
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Premium Products</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        High-quality makeup
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=500&h=600&fit=crop"
                  alt="Jayant at work"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Services</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Professional makeup services tailored to make your special
                moments unforgettable
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-pink-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="text-pink-600 font-semibold">
                    {service.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A showcase of my recent work and transformations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {item.category}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                What my clients say about their experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Ready to book your appointment? Contact me today to discuss your
                makeup needs
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      +91 9405220208
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Website</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      https://makeupartist-kappa.vercel.app/
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      At-Mangli Tah-Zari Jamni Dist-Yavatmal 445305
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Instagram</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      @jayant_makeup_artist
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Service
                    </label>
                    <select className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all">
                      <option>Select a service</option>
                      <option>Bridal Makeup</option>
                      <option>Party Makeup</option>
                      <option>Airbrush Makeup</option>
                      <option>Group Booking</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all"
                      placeholder="Tell me about your event and requirements"
                    ></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Palette className="w-6 h-6 text-pink-600" />
                <span className="text-lg font-bold">Jayant Makeup Artist</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional makeup services for all your special occasions
              </p>
              <p className="text-sm text-gray-500">
                © 2025 Jayant Makeup Artist. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;

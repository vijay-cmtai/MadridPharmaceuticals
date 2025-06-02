import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Image as ImageIcon,
  Play,
} from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "International Pharma Conference 2024",
      date: "March 15-17, 2024",
      location: "Mumbai Convention Center",
      description:
        "Join us at the leading Pharmaceuticals conference discussing innovations in drug development.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      attendees: "500+ Expected",
      color: "from-blue-500 to-blue-600",
      category: "Conference",
    },
    {
      title: "Healthcare Innovation Summit",
      date: "April 22-24, 2024",
      location: "Delhi Medical Center",
      description:
        "Exploring the future of healthcare through technological advancements and Pharmaceuticals breakthroughs.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
      attendees: "300+ Expected",
      color: "from-green-500 to-green-600",
      category: "Summit",
    },
    {
      title: "Medical Research Symposium",
      date: "May 10-12, 2024",
      location: "Bangalore Research Institute",
      description:
        "Presenting latest research findings in neurology, cardiology, and immunology.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
      attendees: "200+ Expected",
      color: "from-purple-500 to-purple-600",
      category: "Symposium",
    },
    {
      title: "Quality Standards Workshop",
      date: "June 5-6, 2024",
      location: "Pune Quality Center",
      description:
        "Workshop on maintaining international quality standards in Pharmaceuticals manufacturing.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      attendees: "150+ Expected",
      color: "from-orange-500 to-red-500",
      category: "Workshop",
    },
    {
      title: "Global Health Partnership Meet",
      date: "July 18-20, 2024",
      location: "Chennai Medical Campus",
      description:
        "Building partnerships for global health initiatives and accessible healthcare.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063",
      attendees: "400+ Expected",
      color: "from-teal-500 to-blue-500",
      category: "Partnership",
    },
    {
      title: "Future of Medicine Conference",
      date: "August 25-27, 2024",
      location: "Hyderabad Tech Hub",
      description:
        "Discussing emerging trends in personalized medicine and precision healthcare.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
      attendees: "350+ Expected",
      color: "from-pink-500 to-rose-500",
      category: "Conference",
    },
  ];

  const galleryImages = [
    {
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
      title: "Pharma Expo 2023",
      location: "Mumbai",
      category: "Conference",
    },
    {
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      title: "Medical Workshop 2023",
      location: "Delhi",
      category: "Workshop",
    },
    {
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
      title: "Health Summit 2023",
      location: "Bangalore",
      category: "Summit",
    },
    {
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
      title: "Research Symposium 2023",
      location: "Chennai",
      category: "Symposium",
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      title: "Innovation Meet 2023",
      location: "Hyderabad",
      category: "Innovation",
    },
    {
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      title: "Quality Standards 2023",
      location: "Pune",
      category: "Quality",
    },
    {
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      title: "Healthcare Expo 2023",
      location: "Kolkata",
      category: "Expo",
    },
    {
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      title: "Wellness Conference 2023",
      location: "Goa",
      category: "Wellness",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <TopBar />
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-40 right-40 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Events & Conferences
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-10">
            Join us at upcoming Pharmaceuticals events, conferences, and medical
            symposiums where innovation meets collaboration in the healthcare
            industry
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-semibold">
                20+ Annual Events
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-semibold">Global Reach</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-semibold">Industry Leaders</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Upcoming Events */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent mb-8">
              Upcoming Events
            </h2>
            <p className="text-gray-700 text-xl max-w-4xl mx-auto leading-relaxed">
              Stay updated with our latest events, conferences, and industry
              gatherings where we share knowledge, innovations, and connect with
              healthcare professionals worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map((event, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-20`}
                  ></div>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Category Badge */}
                  <div
                    className={`absolute top-4 right-4 bg-gradient-to-r ${event.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm`}
                  >
                    {event.category}
                  </div>

                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center border border-white/30">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-600">
                      <div
                        className={`bg-gradient-to-r ${event.color} rounded-xl w-10 h-10 flex items-center justify-center mr-4 shadow-lg`}
                      >
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <div
                        className={`bg-gradient-to-r ${event.color} rounded-xl w-10 h-10 flex items-center justify-center mr-4 shadow-lg`}
                      >
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <div
                        className={`bg-gradient-to-r ${event.color} rounded-xl w-10 h-10 flex items-center justify-center mr-4 shadow-lg`}
                      >
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium">{event.attendees}</span>
                    </div>
                  </div>

                  <button
                    className={`w-full bg-gradient-to-r ${event.color} text-white py-4 px-6 rounded-2xl font-bold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105`}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239333EA' fill-opacity='0.4'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent mb-8">
              Event Gallery
            </h2>
            <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
              Explore memorable moments from our previous events and conferences
              through our comprehensive gallery
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h4 className="text-white font-bold text-lg mb-2">
                      {item.title}
                    </h4>
                    <p className="text-white/80 text-sm flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.location}
                    </p>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                    {item.category}
                  </div>

                  {/* Gallery Icon */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ImageIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Statistics */}
          <div className="mt-20 grid md:grid-cols-4 gap-8">
            {[
              {
                number: "50+",
                label: "Events Conducted",
                color: "from-blue-500 to-blue-600",
              },
              {
                number: "10K+",
                label: "Attendees",
                color: "from-green-500 to-green-600",
              },
              {
                number: "25+",
                label: "Countries Reached",
                color: "from-purple-500 to-purple-600",
              },
              {
                number: "15+",
                label: "Years Experience",
                color: "from-pink-500 to-pink-600",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/50 hover:bg-white/80 transition-all duration-300"
              >
                <div
                  className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;

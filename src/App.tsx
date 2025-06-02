import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
import { useEffect } from "react"; // Import useEffect

// Import your pages
import Index from "./pages/Index";
import About from "./pages/About";
import VisionMission from "./pages/VisionMission";
import Quality from "./pages/Quality";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Therapies from "./pages/Therapies";
import TherapyDetail from "./pages/TherapyDetail";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Define the ScrollToTop component logic directly here
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array ensures this runs only when the pathname changes

  return null; // This component doesn't render anything itself
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />{" "}
        {/* Add the ScrollToTop component (defined above) here */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productName" element={<ProductDetail />} />
          <Route path="/therapies" element={<Therapies />} />
          <Route path="/therapies/:therapyName" element={<TherapyDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

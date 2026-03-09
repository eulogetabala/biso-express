import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import TargetAudience from "@/components/TargetAudience";
import DeliveryZone from "@/components/DeliveryZone";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import StickyFooter from "@/components/StickyFooter";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import BookingModal from "@/components/BookingModal";
import ContactModal from "@/components/ContactModal";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Services />
      <TargetAudience />
      <DeliveryZone />
      <Testimonials />
      <FAQ />
      <CallToAction />
      
      <Footer />
    
      <Chatbot />
      <BookingModal />
      <ContactModal />
    </main>
  );
}

import HeroAndAbout from "@/components/sections/HeroSection";
import ManagementSection from "@/components/sections/ManagementSection";
import SalesSection from "@/components/sections/SalesSection";
import OperationsSection from "@/components/sections/OperationsSection";
import ValuesSection from "@/components/sections/ValuesSection";
import StatsSection from "@/components/sections/StatsSection";
import MarketingSection from "@/components/sections/MarketingSection";
import AdminsSection from "@/components/sections/AdminsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";


export default function Home() {
  return (
    <>
      <HeroAndAbout />
      <ManagementSection />
      <SalesSection />
      <OperationsSection />
      <MarketingSection />
       <AdminsSection />
      <ValuesSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
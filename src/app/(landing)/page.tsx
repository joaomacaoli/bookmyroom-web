import Footer from "@/components/common/footer";
import ContactLandingPage from "@/components/landing-page/contact";
import FeaturesLandingPage from "@/components/landing-page/features";
import HeaderLandingPage from "@/components/landing-page/header";
import HeroLandingPage from "@/components/landing-page/hero";
import TestimonialsLandingPage from "@/components/landing-page/testimonials";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderLandingPage />

      <HeroLandingPage />

      <FeaturesLandingPage />

      <TestimonialsLandingPage />

      <ContactLandingPage />

      <Footer />
    </div>
  );
}

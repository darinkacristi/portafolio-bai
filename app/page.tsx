import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import FeaturedProjects from "@/components/FeaturedProjects";
import ClientsCarousel from "@/components/ClientsCarousel";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import { Divider } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedProjects />
      <Divider />
      <ClientsCarousel />
      <Testimonials />
      <ContactCTA />
    </>
  );
}

import { Cta } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesOverview />
      <Process />
      <Testimonials />
      <Cta />
    </>
  );
}

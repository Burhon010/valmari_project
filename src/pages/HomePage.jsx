import HeroSection from "../components/sections/HeroSection";
import EducationSection from "../components/sections/EducationSection";
import AdvantagesSection, { StatsSection } from "../components/sections/AdvantagesSection";
import TeachersSection from "../components/sections/TeachersSection";
import ReviewsSection from "../components/sections/ReviewsSection";
import MapSection from "../components/sections/MapSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EducationSection />
      <StatsSection />
      <AdvantagesSection />
      <TeachersSection />
      <ReviewsSection />
      <MapSection />
    </>
  );
}

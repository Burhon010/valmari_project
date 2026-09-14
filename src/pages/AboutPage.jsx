import EducationSection from "../components/sections/EducationSection";
import AboutCenterSection from "../components/sections/AboutCenterSection";
import { StatsSection } from "../components/sections/AdvantagesSection";
import TeachersSection from "../components/sections/TeachersSection";
import ReviewsSection from "../components/sections/ReviewsSection";

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-12 text-center md:pt-16">
        <h1 className="text-2xl font-semibold text-primary md:text-3xl">О нас</h1>
      </div>
      <AboutCenterSection />
      <EducationSection />
      <StatsSection />
      <TeachersSection />
      <ReviewsSection />
    </>
  );
}

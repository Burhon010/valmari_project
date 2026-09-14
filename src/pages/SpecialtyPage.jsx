import EducationSection from "../components/sections/EducationSection";
import TeachersSection from "../components/sections/TeachersSection";
import ReviewsSection from "../components/sections/ReviewsSection";

export default function SpecialtyPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-12 text-center md:pt-16">
        <h1 className="text-2xl font-semibold text-primary md:text-3xl">Специальность</h1>
      </div>
      <EducationSection />
      <TeachersSection />
      <ReviewsSection />
    </>
  );
}

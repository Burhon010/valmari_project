import HeroSection from "../components/sections/HeroSection";
import { StatsSection } from "../components/sections/AdvantagesSection";
import CoursesSection from "../components/sections/CoursesSection";
import AboutCenterSection from "../components/sections/AboutCenterSection";
import CosmetologyGridSection from "../components/sections/CosmetologyGridSection";
import ModelsSection from "../components/sections/ModelsSection";
import MasterclassesSection from "../components/sections/MasterclassesSection";
import AdvantagesSection from "../components/sections/AdvantagesSection";
import SpecialOffersSection from "../components/sections/SpecialOffersSection";
import CallbackFormSection from "../components/sections/CallbackFormSection";
import MapSection from "../components/sections/MapSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CoursesSection />
      <AboutCenterSection />
      <CosmetologyGridSection />
      <ModelsSection />
      <MasterclassesSection />
      <AdvantagesSection />
      <SpecialOffersSection />
      <CallbackFormSection />
      <MapSection />
    </>
  );
}

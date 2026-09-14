import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import BlogPostPage from "./pages/BlogPostPage";
import PricePage from "./pages/PricePage";
import SchedulePage from "./pages/SchedulePage";
import PromotionsPage from "./pages/PromotionsPage";
import WebinarsPage from "./pages/WebinarsPage";
import VideosPage from "./pages/VideosPage";
import BlogPage from "./pages/BlogPage";
import ShopPage from "./pages/ShopPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFoundPage from "./pages/NotFoundPage";
import { NAV_ITEMS } from "./constants/navigation";

const CUSTOM_PAGES = {
  "/about": AboutPage,
  "/courses": CoursesPage,
  "/price": PricePage,
  "/schedule": SchedulePage,
  "/promotions": PromotionsPage,
  "/webinars": WebinarsPage,
  "/videos": VideosPage,
  "/blog": BlogPage,
  "/shop": ShopPage,
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/courses/botulinoterapiya" element={<CourseDetailPage />} />
          <Route path="/blog/mezoterapiya-shei" element={<BlogPostPage />} />
          {NAV_ITEMS.map((item) => {
            const CustomPage = CUSTOM_PAGES[item.path];
            return (
              <Route
                key={item.path}
                path={item.path}
                element={
                  CustomPage ? <CustomPage /> : <PlaceholderPage title={item.label} />
                }
              />
            );
          })}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

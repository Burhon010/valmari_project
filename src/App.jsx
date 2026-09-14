import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import SpecialtyPage from "./pages/SpecialtyPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFoundPage from "./pages/NotFoundPage";
import { NAV_ITEMS } from "./constants/navigation";

const CUSTOM_PAGES = {
  "/specialty": SpecialtyPage,
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
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

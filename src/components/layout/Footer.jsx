import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/navigation";
import logoIcon from "../../assets/icons/ui/logo-icon.svg";

const [menuLinks, infoLinks] = [NAV_ITEMS.slice(0, 4), NAV_ITEMS.slice(4)];

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <Link to="/" className="mb-3 flex items-center gap-2 transition-opacity hover:opacity-80">
            <img src={logoIcon} alt="" className="h-9 w-9" />
            <span className="text-lg font-bold text-white">VALMARI</span>
          </Link>
          <a href="tel:+79995556677" className="block text-sm transition-colors hover:text-white">
            +7 (999) 555-66-77
          </a>
          <p className="text-sm">г. Красноярск, ул. Ленина, д. 1</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Меню</h4>
          <ul className="space-y-2 text-sm">
            {menuLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Информация</h4>
          <ul className="space-y-2 text-sm">
            {infoLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Мы в соцсетях</h4>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="h-8 w-8 rounded-full bg-gray-700 transition-colors hover:bg-primary"
            />
            <a
              href="#"
              aria-label="WhatsApp"
              className="h-8 w-8 rounded-full bg-gray-700 transition-colors hover:bg-primary"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} VALMARI. Все права защищены.
      </div>
    </footer>
  );
}

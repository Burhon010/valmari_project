import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/navigation";
import CallbackModal from "../ui/CallbackModal";
import SocialIcons from "../ui/SocialIcons";
import logo from "../../assets/icons/ui/logo-full.svg";

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
          <img src={logo} alt="VALMARI" className="h-8 w-auto md:h-9" />
        </Link>
        <a
          href="tel:+79995556677"
          className="hidden text-sm font-medium transition-colors hover:text-primary md:block"
        >
          +7 (999) 555-66-77
        </a>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setModalOpen(true)}
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover sm:block"
          >
            Написать
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Открыть меню"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-gray-200 lg:hidden"
          >
            <span className="h-0.5 w-5 bg-text" />
            <span className="h-0.5 w-5 bg-text" />
            <span className="h-0.5 w-5 bg-text" />
          </button>
        </div>
      </div>

      <nav className="hidden border-t border-gray-100 lg:block">
        <ul className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6 px-4 py-3 text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors hover:text-primary ${isActive ? "font-semibold text-primary" : ""}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Мобильное/планшетное меню */}
      <div
        className={`fixed inset-0 z-40 transition-opacity lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[280px] flex-col bg-white p-6 shadow-xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <a href="tel:+79995556677" className="text-sm font-semibold text-text">
              +7 (999) 555-66-77
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Закрыть меню"
              className="flex h-8 w-8 items-center justify-center rounded-full text-text/60 hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          <ul className="flex-1 space-y-5">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base transition-colors hover:text-primary ${
                      isActive ? "font-semibold text-primary" : "text-text"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={() => {
              setMenuOpen(false);
              setModalOpen(true);
            }}
            className="mb-6 w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Написать
          </button>

          <SocialIcons />
        </div>
      </div>

      <CallbackModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}

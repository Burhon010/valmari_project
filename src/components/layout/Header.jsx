import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/navigation";
import CallbackModal from "../ui/CallbackModal";

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-full bg-primary transition-transform group-hover:scale-105" />
          <span className="text-lg font-bold">VALMARI</span>
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
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Написать
          </button>
        </div>
      </div>
      <nav className="border-t border-gray-100">
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

      <CallbackModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}

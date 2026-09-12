export default function Header() {
  return (
    <header className="w-full border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-full bg-primary" />
          <span className="text-lg font-bold">VALMARI</span>
        </div>
        <a href="tel:+79995556677" className="hidden text-sm font-medium md:block">
          +7 (999) 555-66-77
        </a>
        <div className="flex items-center gap-3">
          <button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white">
            Написать
          </button>
        </div>
      </div>
      <nav className="border-t border-gray-100">
        <ul className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6 px-4 py-3 text-sm">
          {["Специальность", "Обучение", "Преподаватели", "Курсы", "Отзывы", "Оплата", "Акции", "Контакты"].map(
            (item) => (
              <li key={item}>
                <a href="#" className="hover:text-primary-dark">
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}

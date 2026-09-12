export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-9 w-9 rounded-full bg-primary" />
            <span className="text-lg font-bold text-white">VALMARI</span>
          </div>
          <p className="text-sm">+7 (999) 555-66-77</p>
          <p className="text-sm">г. Красноярск, ул. Ленина, д. 1</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Меню</h4>
          <ul className="space-y-2 text-sm">
            <li>Специальность</li>
            <li>Обучение</li>
            <li>Преподаватели</li>
            <li>Курсы</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Информация</h4>
          <ul className="space-y-2 text-sm">
            <li>Отзывы</li>
            <li>Оплата</li>
            <li>Акции</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Мы в соцсетях</h4>
          <div className="flex gap-3">
            <span className="h-8 w-8 rounded-full bg-gray-700" />
            <span className="h-8 w-8 rounded-full bg-gray-700" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} VALMARI. Все права защищены.
      </div>
    </footer>
  );
}

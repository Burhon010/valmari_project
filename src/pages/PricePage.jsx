const categories = [
  {
    title: "Мезотерапия",
    rows: [
      { num: "1.1", name: "Техники мезотерапии", days: 1, hours: 8, early: "3900 грн", full: "5900 грн" },
      { num: "1.3", name: "Липоскульптура тела", days: 2, hours: 14, early: "6900 грн", full: "9900 грн" },
      { num: "1.5", name: "Биоревитализация", days: 1, hours: 8, early: "3500 грн", full: "5500 грн" },
    ],
  },
  {
    title: "Контурная пластика иглой",
    rows: [
      { num: "2.1", name: "Базовый уровень", days: 2, hours: 16, early: "7900 грн", full: "11900 грн" },
      { num: "2.2", name: "Моделирование губ", days: 1, hours: 8, early: "4900 грн", full: "6900 грн" },
    ],
  },
  {
    title: "Канюльные техники",
    rows: [
      { num: "3.1", name: "Канюльные техники: базовый уровень", days: 4, hours: 32, early: "12900 грн", full: "16900 грн" },
    ],
  },
  {
    title: "Аппаратная косметология",
    rows: [
      { num: "4.1", name: "Лазерная эпиляция", days: 2, hours: 12, early: "5900 грн", full: "8900 грн" },
      { num: "4.2", name: "Ботулинотерапия: базовый уровень", days: 2, hours: 16, early: "8900 грн", full: "12900 грн" },
    ],
  },
];

export default function PricePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <h1 className="mb-10 text-center text-2xl font-semibold uppercase text-text md:text-[35px]">
        Стоимость обучения
      </h1>

      <div className="space-y-10">
        {categories.map((cat) => (
          <div key={cat.title} className="overflow-hidden rounded-2xl bg-white shadow-[0px_2px_20px_0px_rgba(66,66,66,0.1)]">
            <div className="bg-primary-light px-6 py-4">
              <h2 className="text-lg font-semibold text-primary">{cat.title}</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-text/60">
                    <th className="px-6 py-3 font-medium">Курс обучения</th>
                    <th className="px-6 py-3 font-medium">Дни</th>
                    <th className="px-6 py-3 font-medium">Часы</th>
                    <th className="px-6 py-3 font-medium">Ранняя регистрация</th>
                    <th className="px-6 py-3 font-medium">Полная цена</th>
                  </tr>
                </thead>
                <tbody>
                  {cat.rows.map((row) => (
                    <tr key={row.num} className="border-b border-gray-50 last:border-0">
                      <td className="px-6 py-4">
                        <span className="mr-2 text-text/40">{row.num}</span>
                        {row.name}
                      </td>
                      <td className="px-6 py-4">{row.days}</td>
                      <td className="px-6 py-4">{row.hours}</td>
                      <td className="px-6 py-4 font-semibold text-primary">{row.early}</td>
                      <td className="px-6 py-4 text-text/70">{row.full}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";

const CITIES = ["Харьков", "Полтава", "Днепр", "Львов", "Херсон", "Сумы"];
const TYPES = ["Курсы обучения", "Вебинары"];

const schedule = [
  { course: "Техники мезотерапии", city: "Харьков", type: "Курсы обучения", date: "1 - 2 мая", seats: "Свободно 5 из 15" },
  { course: "Контурная пластика иглой: базовый уровень", city: "Харьков", type: "Курсы обучения", date: "1 - 4 мая", seats: "Свободно 2 из 15" },
  { course: "Мезотерапия и биоревитализация", city: "Полтава", type: "Курсы обучения", date: "15 - 20 мая", seats: "Свободно 6 из 15" },
  { course: "Канюльные техники: базовый уровень", city: "Днепр", type: "Курсы обучения", date: "1 - 4 июня", seats: "Свободно 3 из 15" },
  { course: "Биогель - новое в косметологии", city: "Львов", type: "Курсы обучения", date: "2 - 5 августа", seats: "Свободно 4 из 15" },
  { course: "Профессия косметолог: бесплатный вебинар", city: "Харьков", type: "Вебинары", date: "3 ноября, 10:00", seats: "Свободно 20 из 30" },
  { course: "Актуальные техники в мезотерапии", city: "Сумы", type: "Вебинары", date: "20 ноября, 12:00", seats: "Свободно 15 из 30" },
];

export default function SchedulePage() {
  const [city, setCity] = useState("Все города");
  const [type, setType] = useState(TYPES[0]);

  const filtered = schedule.filter(
    (row) => (city === "Все города" || row.city === city) && row.type === type
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <h1 className="mb-10 text-center text-2xl font-semibold uppercase text-text md:text-[35px]">
        Расписание
      </h1>

      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {TYPES.map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
              type === t
                ? "border-primary bg-primary text-white"
                : "border-gray-200 text-text/70 hover:border-primary hover:text-primary"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {["Все города", ...CITIES].map((c) => (
          <button
            key={c}
            onClick={() => setCity(c)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
              city === c
                ? "border-badge bg-badge text-text"
                : "border-gray-200 text-text/60 hover:border-primary hover:text-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-2xl bg-white shadow-[0px_2px_20px_0px_rgba(66,66,66,0.1)]">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-text/60">
              <th className="px-6 py-4 font-medium">Программа</th>
              <th className="px-6 py-4 font-medium">Город</th>
              <th className="px-6 py-4 font-medium">Дата</th>
              <th className="px-6 py-4 font-medium">Места</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-10 text-center text-text/50">
                  Нет мероприятий по выбранным фильтрам
                </td>
              </tr>
            ) : (
              filtered.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0">
                  <td className="px-6 py-4 font-medium text-text">{row.course}</td>
                  <td className="px-6 py-4 text-text/70">{row.city}</td>
                  <td className="px-6 py-4 text-text/70">{row.date}</td>
                  <td className="px-6 py-4 text-primary">{row.seats}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

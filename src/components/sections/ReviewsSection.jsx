const reviews = [
  { name: "Дарья Иванова", date: "12.03.2025", text: "Отличный центр, преподаватели объясняют доступно, оборудование современное." },
  { name: "Мария Соколова", date: "02.02.2025", text: "Прошла курс повышения квалификации, осталась очень довольна." },
  { name: "Инна Волкова", date: "20.01.2025", text: "Рекомендую всем, кто хочет получить качественное образование в косметологии." },
];

export default function ReviewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <h2 className="mb-8 text-center text-xl font-bold text-primary-dark md:text-2xl">
        Отзывы
      </h2>
      <div className="space-y-4">
        {reviews.map((r) => (
          <div key={r.name} className="rounded-xl bg-primary-light p-5">
            <div className="mb-2 flex items-center justify-between text-sm font-semibold">
              <span>{r.name}</span>
              <span className="text-xs font-normal text-gray-500">{r.date}</span>
            </div>
            <p className="text-sm text-gray-700">{r.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white">
          Оставить отзыв
        </button>
      </div>
    </section>
  );
}

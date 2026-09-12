const reviewText =
  "Вчера была на карбокситерапии первый раз. Сомневалась в эффективности процедуры и очень зря! Цвет лица выровнялся и кожа подтянулась, воспаления стали не такими заметными. Эффект был сразу после процедуры и я планирую пройти весь курс. Алиночка профессионал своего дела и отличный собеседник, всегда рекомендует самые эффективные процедуры.";

const reviews = [
  { name: "Ирина Бубличенко", date: "15.09.2020", text: reviewText },
  { name: "Ирина Бубличенко", date: "15.09.2020", text: reviewText },
  { name: "Ирина Бубличенко", date: "15.09.2020", text: reviewText },
  { name: "Ирина Бубличенко", date: "15.09.2020", text: reviewText },
];

export default function ReviewsSection() {
  return (
    <section className="bg-primary-light py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-2xl font-semibold text-text md:text-2xl">
          Отзывы
        </h2>
        <div className="space-y-6 rounded-lg bg-white p-6 md:p-10">
          {reviews.map((r, i) => (
            <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold">{r.name}</span>
                <span className="text-xs text-text/80">{r.date}</span>
              </div>
              <p className="text-sm text-text/80">{r.text}</p>
            </div>
          ))}
          <div className="pt-2 text-center">
            <button className="rounded bg-primary px-8 py-3 text-sm font-semibold text-white">
              Оставить отзыв
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

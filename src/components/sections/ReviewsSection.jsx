import { useState } from "react";

const reviewText =
  "Вчера была на карбокситерапии первый раз. Сомневалась в эффективности процедуры и очень зря! Цвет лица выровнялся и кожа подтянулась, воспаления стали не такими заметными. Эффект был сразу после процедуры и я планирую пройти весь курс. Алиночка профессионал своего дела и отличный собеседник, всегда рекомендует самые эффективные процедуры.";

const reviews = [
  { name: "Ирина Бубличенко", date: "15.09.2020", text: reviewText },
  { name: "Ирина Бубличенко", date: "15.09.2020", text: reviewText },
  { name: "Ирина Бубличенко", date: "15.09.2020", text: reviewText },
  { name: "Ирина Бубличенко", date: "15.09.2020", text: reviewText },
];

export default function ReviewsSection() {
  const [formOpen, setFormOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

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

          {formOpen && !sent && (
            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <input
                type="text"
                required
                placeholder="Ваше имя"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <textarea
                required
                rows={3}
                placeholder="Ваш отзыв"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              <button
                type="submit"
                className="rounded bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Отправить отзыв
              </button>
            </form>
          )}

          {sent && (
            <p className="pt-2 text-center text-sm text-text/80">
              Спасибо за ваш отзыв! Он появится после модерации.
            </p>
          )}

          {!formOpen && !sent && (
            <div className="pt-2 text-center">
              <button
                onClick={() => setFormOpen(true)}
                className="rounded bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Оставить отзыв
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

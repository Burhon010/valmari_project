import { useState } from "react";

export default function CallbackFormSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
      <div className="rounded-2xl bg-primary-light px-6 py-12 text-center md:px-16 md:py-16">
        <h2 className="mb-3 text-2xl font-semibold text-primary md:text-[32px]">
          Закажите обратный звонок
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-sm text-text/80 md:text-base">
          Оставьте заявку в форме и наш менеджер свяжется с вами
        </p>

        {sent ? (
          <p className="text-sm font-medium text-primary">
            Спасибо! Мы свяжемся с вами в ближайшее время.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-2xl flex-col gap-4 sm:flex-row"
          >
            <input
              type="text"
              required
              placeholder="Ваше имя"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary sm:flex-1"
            />
            <input
              type="tel"
              required
              placeholder="Ваш номер телефона"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary sm:flex-1"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Отправить
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

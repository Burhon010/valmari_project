import { useState } from "react";

export default function CallbackModal({ open, onClose, title = "Закажите обратный звонок" }) {
  const [sent, setSent] = useState(false);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSent(false), 300);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-primary md:text-xl">{title}</h3>
          <button
            onClick={handleClose}
            aria-label="Закрыть"
            className="rounded-full p-1 text-text/60 transition-colors hover:bg-gray-100 hover:text-text"
          >
            ✕
          </button>
        </div>

        {sent ? (
          <p className="py-6 text-center text-sm text-text/80">
            Спасибо! Мы свяжемся с вами в ближайшее время.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              required
              placeholder="Имя"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
            <input
              type="tel"
              required
              placeholder="Телефон"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Отправить
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

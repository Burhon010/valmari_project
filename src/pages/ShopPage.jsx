import { useState } from "react";
import CallbackModal from "../components/ui/CallbackModal";

export default function ShopPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center md:py-28">
      <h1 className="mb-4 text-2xl font-semibold uppercase text-text md:text-[35px]">Магазин</h1>
      <p className="mb-8 max-w-lg text-sm text-text/70 md:text-base">
        Раздел с профессиональной косметикой и расходными материалами скоро
        откроется. Оставьте заявку — сообщим первыми, когда магазин заработает.
      </p>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
      >
        Узнать о запуске
      </button>

      <CallbackModal open={open} onClose={() => setOpen(false)} title="Уведомить об открытии магазина" />
    </div>
  );
}

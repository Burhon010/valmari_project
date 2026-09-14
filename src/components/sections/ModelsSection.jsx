import { useState } from "react";
import modelsPhoto from "../../assets/images/home/models.jpg";
import CallbackModal from "../ui/CallbackModal";

export default function ModelsSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mb-5 text-2xl font-bold leading-tight text-primary md:text-[40px]">
            ВЕДЕМ НАБОР МОДЕЛЕЙ
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-text/80 md:text-base">
            Мы предлагаем свои услуги для моделей.
            <br />
            <br />
            Выберите процедуру или несколько процедур, и наш менеджер
            проконсультирует вас и назовёт ближайшую дату, когда вы сможете
            получить эту процедуру.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Стать моделью
          </button>
        </div>
        <div className="aspect-[498/459] overflow-hidden rounded-2xl bg-badge">
          <img src={modelsPhoto} alt="Процедура" className="h-full w-full object-cover" />
        </div>
      </div>

      <CallbackModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

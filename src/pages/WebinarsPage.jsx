import { useState } from "react";
import CallbackModal from "../components/ui/CallbackModal";
import masterclass1 from "../assets/images/home/masterclass-1.jpg";
import masterclass2 from "../assets/images/home/masterclass-2.jpg";

const webinars = [
  {
    image: masterclass1,
    date: "3 ноября, 10:00-12:00",
    title: "10 возможностей неодимового лазера. Лазерный пилинг, удаление тату/татуажа",
    person: "Тренер: Юлия Щукина",
    price: "Бесплатно",
  },
  {
    image: masterclass2,
    date: "20 ноября, 12:00-17:00",
    title: "Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и какие существуют альтернативы?",
    person: "Тренер: Марина Спивак",
    price: "Бесплатно",
  },
];

export default function WebinarsPage() {
  const [openWebinar, setOpenWebinar] = useState(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <h1 className="mb-3 text-center text-2xl font-semibold uppercase text-text md:text-[35px]">
        Вебинары
      </h1>
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-text/70">
        Бесплатные онлайн-мероприятия для косметологов и всех, кто интересуется профессией
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {webinars.map((webinar) => (
          <div
            key={webinar.title}
            className="overflow-hidden rounded-xl bg-white shadow-[0px_2px_20px_0px_rgba(66,66,66,0.15)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={webinar.image} alt={webinar.title} className="h-full w-full object-cover" />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs text-text/80">
                {webinar.date}
              </span>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-base font-semibold text-text">{webinar.title}</h3>
              <p className="mb-4 text-xs text-text/70">{webinar.person}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">{webinar.price}</span>
                <button
                  onClick={() => setOpenWebinar(webinar.title)}
                  className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                  Зарегистрироваться
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CallbackModal
        open={Boolean(openWebinar)}
        onClose={() => setOpenWebinar(null)}
        title={openWebinar ? `Регистрация: ${openWebinar}` : undefined}
      />
    </div>
  );
}

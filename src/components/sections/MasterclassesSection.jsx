import Carousel from "../ui/Carousel";
import masterclass1 from "../../assets/images/home/masterclass-1.jpg";
import masterclass2 from "../../assets/images/home/masterclass-2.jpg";

const events = [
  {
    image: masterclass1,
    date: "3 ноября, 10:00-12:00",
    title: "10 возможностей неодимового лазера. Лазерный пилинг, удаление тату/татуажа",
    person: "Тренер: Юлия Щукина",
    price: "2000 грн",
  },
  {
    image: masterclass2,
    date: "20 ноября, 12:00-17:00",
    title: "Профессия косметолог. Семинар для новичков и профессионалов",
    person: "Спикеры: Марина Спивак, Алина Ядчишина, Елена Белогурова, Юлия Щукина",
    price: "Бесплатно",
  },
];

export default function MasterclassesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
      <h2 className="mb-3 text-center text-2xl font-semibold text-text md:text-[32px]">
        Мастер-классы
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-text/70 md:text-base">
        Мероприятия для повышения квалификации косметологов
      </p>
      <Carousel>
        {events.map((event) => (
          <div
            key={event.title}
            className="w-[320px] overflow-hidden rounded-xl bg-white shadow-[0px_2px_20px_0px_rgba(66,66,66,0.15)] sm:w-[420px]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs text-text/80">
                {event.date}
              </span>
            </div>
            <div className="p-5">
              <h3 className="mb-2 text-base font-semibold text-text">{event.title}</h3>
              <p className="mb-4 text-xs text-text/70">{event.person}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">{event.price}</span>
                <button className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-hover">
                  Записаться
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

import aboutPhoto from "../../assets/images/home/about-center.jpg";

export default function AboutCenterSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="aspect-[590/450] overflow-hidden rounded-2xl bg-badge">
          <img src={aboutPhoto} alt="Практическое занятие" className="h-full w-full object-cover" />
        </div>
        <div>
          <span className="mb-2 block text-sm font-medium text-text/50">О нас</span>
          <h2 className="mb-4 text-2xl font-bold leading-tight text-primary md:text-[35px]">
            VALMARI — ведущий учебный центр эстетической косметологии
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-text/80 md:text-base">
            Ведущий учебный центр эстетической косметологии. Более 5 лет мы
            проводим сертифицированные курсы профессионального образования в
            области косметологии и индустрии красоты, здоровья и молодости.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            Подробнее →
          </a>
        </div>
      </div>
    </section>
  );
}

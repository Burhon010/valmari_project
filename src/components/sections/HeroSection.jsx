import heroPhoto from "../../assets/images/home/hero-course.jpg";

export default function HeroSection() {
  return (
    <section className="bg-primary-light">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 md:items-center md:py-16">
        <div>
          <span className="mb-4 inline-block text-sm font-semibold text-text/80 md:text-base">
            Бесплатный вебинар
          </span>
          <h1 className="text-3xl font-bold leading-tight text-primary md:text-[52px] md:leading-[1.05]">
            ПРОФЕССИЯ КОСМЕТОЛОГ
          </h1>
          <p className="mt-5 max-w-md text-sm text-text/80 md:text-base">
            Приглашаем на бесплатный вебинар для профессиональных косметологов
            и интересующихся этой профессией
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">
              Зарегистрироваться
            </button>
            <button className="rounded-full border-2 border-primary px-8 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
              Узнать подробнее
            </button>
          </div>
        </div>
        <div className="aspect-[589/452] overflow-hidden rounded-2xl bg-badge">
          <img src={heroPhoto} alt="Практическое занятие" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

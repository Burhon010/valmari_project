export default function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 md:pt-16">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <h1 className="text-2xl font-semibold uppercase leading-tight text-primary md:text-[39px] md:leading-[57px]">
          Учебный центр эстетической косметологии VAlmari
        </h1>
        <div className="aspect-[589/452] overflow-hidden rounded-2xl bg-badge">
          <img
            src="/src/assets/images/hero/hero-main.jpg"
            alt="Практическое занятие"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-10 rounded-lg bg-white p-6 shadow-[0px_2px_20px_0px_rgba(66,66,66,0.15)] md:mt-16 md:p-14">
        <p className="text-sm leading-relaxed text-text/80 md:text-[25px] md:leading-[34px]">
          <span className="font-semibold">Ведущий учебный центр эстетической косметологии</span>
          <span className="font-medium">
            . Более 5 лет мы проводим сертифицированные курсы профессионального
            образования в области косметологии и индустрии красоты.
          </span>
          <br />
          <br />
          <span className="font-medium">В данный момент </span>
          <span className="font-semibold">
            в Харькове нет аналогов нашего учебного центра{" "}
          </span>
          <span className="font-medium">
            по уровню подготовки и разнообразию читаемых курсов. Все выпускники
            нашего учебного центра востребованы в: институтах омоложения и
            здоровья, Спа-центрах, салонах красоты, частных клиниках и других
            организация в сфере "красоты и здоровья".
          </span>
        </p>
      </div>
    </section>
  );
}

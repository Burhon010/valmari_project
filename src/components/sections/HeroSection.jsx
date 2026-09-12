export default function HeroSection() {
  return (
    <section className="bg-primary-light">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-2xl font-extrabold uppercase text-primary-dark md:text-3xl">
            Учебный центр эстетической косметологии VALMARI
          </h1>
          <p className="mt-4 text-sm text-gray-700 md:text-base">
            Ведущий учебный центр эстетической косметологии. Более 5 лет мы
            готовим сертифицированных специалистов в области профессиональной
            косметологии для салонов и частной практики.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl bg-gray-200">
          <img
            src="/src/assets/images/hero/hero-main.jpg"
            alt="Практическое занятие"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

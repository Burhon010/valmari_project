const teachers = [
  { name: "Марина Смирнова", role: "Ведущий преподаватель", image: "/src/assets/images/teachers/t1.jpg" },
  { name: "Елена Петрова", role: "Преподаватель", image: "/src/assets/images/teachers/t2.jpg" },
  { name: "Анна Кузнецова", role: "Преподаватель", image: "/src/assets/images/teachers/t3.jpg" },
  { name: "Ольга Орлова", role: "Преподаватель", image: "/src/assets/images/teachers/t4.jpg" },
];

export default function TeachersSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <h2 className="mb-8 text-center text-xl font-bold text-primary-dark md:text-2xl">
        Наши тренеры
      </h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {teachers.map((t) => (
          <div key={t.name} className="text-center">
            <div className="mx-auto mb-3 aspect-square w-28 overflow-hidden rounded-full bg-gray-200 md:w-32">
              <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
            </div>
            <h3 className="text-sm font-semibold">{t.name}</h3>
            <p className="text-xs text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

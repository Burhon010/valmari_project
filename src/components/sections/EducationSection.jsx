const items = [
  {
    title: "Удобный формат обучения",
    text: "Мы стараемся для вас создавать обучение вне зависимости от расписания.",
    image: "/src/assets/images/about/format.jpg",
  },
  {
    title: "Светлые аудитории",
    text: "Мы стараемся для вас создавать современные и комфортные учебные пространства.",
    image: "/src/assets/images/about/classrooms.jpg",
  },
  {
    title: "Обучение в маленьких группах",
    text: "Мы не занимаемся в больших группах, чтобы уделить внимание каждому студенту.",
    image: "/src/assets/images/about/groups.jpg",
  },
];

export default function EducationSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <h2 className="mb-10 text-center text-xl font-bold text-primary-dark md:text-2xl">
        Мы — это обучение с комфортом
      </h2>
      <div className="space-y-10">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`grid gap-6 md:grid-cols-2 md:items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="aspect-video overflow-hidden rounded-xl bg-gray-200">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

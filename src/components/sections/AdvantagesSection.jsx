const stats = [
  { value: "4000+", label: "Выпускников" },
  { value: "3500+", label: "Обучившихся" },
  { value: "1500+", label: "Специалистов" },
  { value: "5500+", label: "Довольных клиентов" },
];

const reasons = [
  { number: "01", title: "Преподаватели", highlight: false },
  { number: "02", title: "Сертификаты", highlight: true },
  { number: "03", title: "Повышение квалификации", highlight: false },
];

export function StatsSection() {
  return (
    <section className="bg-primary-light py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-2xl font-extrabold text-primary-dark md:text-3xl">{s.value}</div>
            <div className="mt-1 text-xs text-gray-600 md:text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AdvantagesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <h2 className="mb-8 text-center text-xl font-bold text-primary-dark md:text-2xl">
        Почему мы
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {reasons.map((r) => (
          <div
            key={r.number}
            className={`rounded-2xl p-6 ${
              r.highlight ? "bg-primary text-white" : "bg-gray-50"
            }`}
          >
            <div
              className={`mb-4 text-4xl font-extrabold ${
                r.highlight ? "text-white/40" : "text-gray-200"
              }`}
            >
              {r.number}
            </div>
            <h3 className="font-semibold">{r.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

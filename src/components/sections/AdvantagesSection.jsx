import CountUp from "../ui/CountUp";

const stats = [
  { value: "4000+", label: "Сертификатов мы выдали" },
  { value: "3500+", label: "Моделей в нашей базе" },
  { value: "1500+", label: "Специалистов мы обучили" },
  { value: "5500+", label: "Довольных клиентов" },
];

const reasons = [
  { number: "01", title: "Преподаватели", highlight: false },
  { number: "02", title: "Сертификаты", highlight: true },
  { number: "03", title: "Повышение квалификации", highlight: false },
];

export function StatsSection() {
  return (
    <section className="bg-primary-light py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-2xl font-semibold text-primary md:text-[35px]">
          Наши достижения
        </h2>
        <div className="grid grid-cols-2 gap-8 rounded md:grid-cols-4 md:bg-white md:p-14 md:shadow-[0px_2px_20px_0px_rgba(66,66,66,0.1)]">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-semibold text-primary md:text-[35px]">
                <CountUp value={s.value} />
              </div>
              <div className="mt-2 text-xs text-text md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AdvantagesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
      <h2 className="mb-8 text-center text-2xl font-semibold text-text md:text-2xl">
        Почему мы
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {reasons.map((r) => (
          <div
            key={r.number}
            className={`rounded p-6 shadow-[0px_2px_20px_0px_rgba(66,66,66,0.1)] ${
              r.highlight ? "bg-badge" : "bg-white"
            }`}
          >
            <div className="mb-4 text-4xl font-semibold text-primary">{r.number}</div>
            <h3 className="font-medium text-text/80">{r.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

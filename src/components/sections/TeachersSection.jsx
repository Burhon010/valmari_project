import marinaImg from "../../assets/images/teachers/marina.jpg";
import elenaImg from "../../assets/images/teachers/elena.jpg";
import alinaImg from "../../assets/images/teachers/alina.jpg";
import yuliaImg from "../../assets/images/teachers/yulia.jpg";

const teachers = [
  { name: "Марина Спивак", role: "Тренер", image: marinaImg },
  { name: "Елена Белогурова", role: "Тренер", image: elenaImg },
  { name: "Алина Ядчишина", role: "Тренер", image: alinaImg },
  { name: "Юлия Щукина", role: "Тренер", image: yuliaImg },
];

export default function TeachersSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
      <h2 className="mb-10 text-center text-2xl font-semibold text-text md:text-2xl">
        Наши тренера
      </h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {teachers.map((t) => (
          <div key={t.name}>
            <div className="mb-3 aspect-[285/396] overflow-hidden rounded-xl bg-badge">
              <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
            </div>
            <h3 className="text-sm font-semibold">{t.name}</h3>
            <p className="text-xs text-text/80">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

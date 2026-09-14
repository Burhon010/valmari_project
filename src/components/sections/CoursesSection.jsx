import Carousel from "../ui/Carousel";
import mannequin1 from "../../assets/images/home/course-mannequin-1.png";
import mannequin2 from "../../assets/images/home/course-mannequin-2.png";

const courses = [
  {
    badge: "Оффлайн",
    badgeColor: "#4340B4",
    label: "Курс для медиков",
    title: "Канюльные техники",
    titleColor: "text-text",
    image: mannequin1,
    date: "1 - 4 мая",
    seats: "Свободно 2 из 15 мест",
    accent: "#4340B4",
  },
  {
    badge: "Мастер-класс",
    badgeColor: "#00A896",
    label: null,
    title: "Биогель - новое в косметологии",
    titleColor: "text-[#1D8195]",
    image: mannequin2,
    date: null,
    seats: "Свободно 2 из 15 мест",
    accent: "#00A896",
  },
  {
    badge: "Онлайн",
    badgeColor: "#55A630",
    label: "Курс для медиков",
    title: "Мезотерапия и биоревитализация",
    titleColor: "text-primary",
    image: mannequin1,
    date: "15 - 20 мая",
    seats: "Свободно 2 из 15 мест",
    accent: "#55A630",
    description: "Краткое описание. Что-то о курсе. Пару фактов.",
  },
];

function CourseCard({ course }) {
  return (
    <div className="flex h-full w-[300px] flex-col rounded-xl bg-white p-4 shadow-[0px_2px_20px_0px_rgba(66,66,66,0.12)] sm:w-[340px]">
      <div className="mb-4 flex items-center justify-between">
        <span
          className="rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: course.badgeColor }}
        >
          {course.badge}
        </span>
        {course.label && <span className="text-xs text-text/70">{course.label}</span>}
      </div>

      <h3 className={`mb-3 text-lg font-semibold ${course.titleColor}`}>{course.title}</h3>

      <div className="mb-4 flex flex-1 items-center justify-center">
        <img src={course.image} alt={course.title} className="h-32 w-auto object-contain" />
      </div>

      {course.description && (
        <p className="mb-3 text-xs text-text/70">{course.description}</p>
      )}

      <div className="mb-4 space-y-1 text-xs text-text/70">
        {course.date && <p>{course.date}</p>}
        <p>{course.seats}</p>
      </div>

      <div className="mt-auto flex gap-2">
        <button
          className="flex-1 rounded-full border-2 py-2 text-xs font-semibold transition-colors"
          style={{ borderColor: course.accent, color: course.accent }}
        >
          Подробнее
        </button>
        <button
          className="flex-1 rounded-full py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: course.accent }}
        >
          Записаться
        </button>
      </div>
    </div>
  );
}

export default function CoursesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
      <h2 className="mb-10 text-center text-2xl font-semibold text-text md:text-[32px]">
        Курсы обучения
      </h2>
      <Carousel>
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </Carousel>
    </section>
  );
}

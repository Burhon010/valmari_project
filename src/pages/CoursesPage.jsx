import { useState } from "react";
import CallbackModal from "../components/ui/CallbackModal";
import mannequin1 from "../assets/images/home/course-mannequin-1.png";
import mannequin2 from "../assets/images/home/course-mannequin-2.png";

const FILTERS = ["Все направления", "Курсы по косметологии", "Онлайн обучение", "Мастер-классы"];

const courses = [
  {
    badge: "Оффлайн",
    badgeColor: "#4340B4",
    category: "Курсы по косметологии",
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
    category: "Мастер-классы",
    label: null,
    title: "Биогель - новое в косметологии",
    titleColor: "text-[#1D8195]",
    image: mannequin2,
    date: "2 - 5 августа",
    seats: "Свободно 2 из 15 мест",
    accent: "#00A896",
  },
  {
    badge: "Онлайн",
    badgeColor: "#55A630",
    category: "Онлайн обучение",
    label: "Курс для медиков",
    title: "Мезотерапия и биоревитализация",
    titleColor: "text-primary",
    image: mannequin1,
    date: "15 - 20 мая",
    seats: "Свободно 2 из 15 мест",
    accent: "#55A630",
  },
  {
    badge: "Оффлайн",
    badgeColor: "#4340B4",
    category: "Курсы по косметологии",
    label: "Курс для медиков",
    title: "Контурная пластика иглой",
    titleColor: "text-text",
    image: mannequin2,
    date: "16 часов / 2 дня",
    seats: "Свободно 3 из 15 мест",
    accent: "#4340B4",
  },
  {
    badge: "Мастер-класс",
    badgeColor: "#00A896",
    category: "Мастер-классы",
    label: null,
    title: "Липоскульптура тела",
    titleColor: "text-[#1D8195]",
    image: mannequin1,
    date: "10 - 12 июня",
    seats: "Свободно 4 из 15 мест",
    accent: "#00A896",
  },
  {
    badge: "Онлайн",
    badgeColor: "#55A630",
    category: "Онлайн обучение",
    label: "Курс для медиков",
    title: "Ботулинотерапия: базовый уровень",
    titleColor: "text-primary",
    image: mannequin2,
    date: "20 - 25 июня",
    seats: "Свободно 5 из 15 мест",
    accent: "#55A630",
  },
];

function CourseCard({ course, onEnroll }) {
  return (
    <div className="flex h-full flex-col rounded-xl bg-white p-4 shadow-[0px_2px_20px_0px_rgba(66,66,66,0.12)]">
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

      <div className="mannequin-spin mb-4 flex flex-1 items-center justify-center">
        <img src={course.image} alt={course.title} className="h-32 w-auto object-contain" />
      </div>

      <div className="mb-4 space-y-1 text-xs text-text/70">
        <p>{course.date}</p>
        <p>{course.seats}</p>
      </div>

      <div className="mt-auto flex gap-2">
        <button
          className="flex-1 rounded-full border-2 py-2 text-xs font-semibold transition-colors hover:text-white"
          style={{ borderColor: course.accent, color: course.accent }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = course.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          Подробнее
        </button>
        <button
          onClick={() => onEnroll(course.title)}
          className="flex-1 rounded-full py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: course.accent }}
        >
          Записаться
        </button>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);
  const [enrollCourse, setEnrollCourse] = useState(null);

  const filtered =
    activeFilter === FILTERS[0] ? courses : courses.filter((c) => c.category === activeFilter);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <h1 className="mb-3 text-center text-2xl font-semibold uppercase text-text md:text-[35px]">
        Курсы обучения
      </h1>
      <p className="mb-10 text-center text-sm text-text/70">
        − курсы с возможностью ранней регистрации
      </p>

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
              activeFilter === filter
                ? "border-badge bg-badge text-text"
                : "border-gray-200 text-text/70 hover:border-primary hover:text-primary"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <CourseCard key={course.title} course={course} onEnroll={setEnrollCourse} />
        ))}
      </div>

      <CallbackModal
        open={Boolean(enrollCourse)}
        onClose={() => setEnrollCourse(null)}
        title={enrollCourse ? `Запись на курс: ${enrollCourse}` : undefined}
      />
    </div>
  );
}

import { useState } from "react";
import CallbackModal from "../components/ui/CallbackModal";
import format from "../assets/images/about/format.jpg";
import classrooms from "../assets/images/about/classrooms.jpg";
import groups from "../assets/images/about/groups.jpg";
import about from "../assets/images/home/about-center.jpg";

const lessons = [
  { image: format, title: "Массаж лица", person: "Спикер: Елена Белогурова", price: "450 грн" },
  { image: classrooms, title: "Уход за проблемной кожей", person: "Спикер: Алина Ядчишина", price: "390 грн" },
  { image: groups, title: "Базовые техники чистки лица", person: "Спикер: Юлия Щукина", price: "350 грн" },
  { image: about, title: "Введение в мезотерапию", person: "Спикер: Марина Спивак", price: "500 грн" },
];

export default function VideosPage() {
  const [openLesson, setOpenLesson] = useState(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <h1 className="mb-10 text-center text-2xl font-semibold uppercase text-text md:text-[35px]">
        Видео-уроки
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {lessons.map((lesson) => (
          <div
            key={lesson.title}
            className="overflow-hidden rounded-xl bg-white shadow-[0px_2px_20px_0px_rgba(66,66,66,0.12)]"
          >
            <div className="group relative aspect-[4/3] overflow-hidden">
              <img
                src={lesson.image}
                alt={lesson.title}
                className="h-full w-full object-cover brightness-[0.65] transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg">
                  ▶
                </span>
              </span>
            </div>
            <div className="p-4">
              <h3 className="mb-1 text-sm font-semibold text-text">Видео урок: {lesson.title}</h3>
              <p className="mb-4 text-xs text-text/70">{lesson.person}</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-primary">{lesson.price}</span>
                <button
                  onClick={() => setOpenLesson(lesson.title)}
                  className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                  Купить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CallbackModal
        open={Boolean(openLesson)}
        onClose={() => setOpenLesson(null)}
        title={openLesson ? `Покупка: ${openLesson}` : undefined}
      />
    </div>
  );
}

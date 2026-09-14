import { Link } from "react-router-dom";
import tileCourses from "../../assets/images/home/tile-courses.jpg";
import tileOnline from "../../assets/images/home/tile-online.jpg";
import tileMasterclasses from "../../assets/images/home/tile-masterclasses.jpg";
import tileSchedule from "../../assets/images/home/tile-schedule.jpg";
import tilePromo from "../../assets/images/home/tile-promo.jpg";

const tiles = [
  {
    title: "Курсы косметологии",
    image: tileCourses,
    to: "/courses",
    span: "md:col-span-3",
    lines: ["эстетическая косметология", "инъекционная косметология", "лазерная косметология"],
  },
  {
    title: "Онлайн обучение",
    image: tileOnline,
    to: "/education",
    span: "md:col-span-3",
  },
  {
    title: "Мастер-классы",
    image: tileMasterclasses,
    to: "/education",
    span: "md:col-span-2",
  },
  {
    title: "Расписание",
    image: tileSchedule,
    to: "/education",
    span: "md:col-span-2",
  },
  {
    title: "Акции",
    image: tilePromo,
    to: "/promotions",
    span: "md:col-span-2",
  },
];

export default function CosmetologyGridSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
      <h2 className="mb-10 text-center text-2xl font-semibold text-text md:text-[32px]">
        Обучение косметологов
      </h2>
      <div className="grid gap-4 md:grid-cols-6">
        {tiles.map((tile) => (
          <Link
            key={tile.title}
            to={tile.to}
            className={`group relative block aspect-[4/3] overflow-hidden rounded-xl md:aspect-auto md:h-64 ${tile.span}`}
          >
            <img
              src={tile.image}
              alt={tile.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
            <div className="absolute inset-0 flex flex-col justify-center p-6 text-white">
              <h3 className="text-lg font-semibold uppercase md:text-xl">{tile.title}</h3>
              {tile.lines && (
                <ul className="mt-3 space-y-1 text-sm text-white/90">
                  {tile.lines.map((line) => (
                    <li key={line}>— {line}</li>
                  ))}
                </ul>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

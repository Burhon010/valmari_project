import { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "../components/ui/Accordion";
import CallbackModal from "../components/ui/CallbackModal";
import heroImage from "../assets/images/home/about-center.jpg";
import marina from "../assets/images/teachers/marina.jpg";

const day1 = [
  "Виды токсинов на рынке. Преимущества и особенности",
  "Показания, противопоказания применения для разных возрастов, в зависимости от особенностей строения лица",
  "Показания к применению БТА в зависимости от анатомических и физиологических особенностей",
  "Анатомия лица по зонам. Геометрия точек и дозы для безопасного введения БТА",
  "Созависимость возраста и доз",
  "Техники разведения на разные виды токсинов",
  "Все виды осложнений и методы их коррекции",
  "Условия хранения БТА",
];

const day2 = [
  "Геометрия точек",
  "Техники разведения БТА",
  "Постановка руки",
  "Самостоятельные инъекции под чутким руководством тренера",
];

const bio = [
  "врач дерматовенеролог",
  "соосновательница центра эстетической косметологии ValMari",
  "ведущий специалист косметолог-инъекционист",
  "главный тренер учебного центра ValMari",
  "более 10 лет опыта работы врачом-инъекционистом",
  "более 8-ми лет опыта работы тренером",
  "в 2016 году вошла в пятерку лучших косметологов Украины",
];

const otherCourses = [
  { title: "Канюльные техники", to: "/courses" },
  { title: "Мезотерапия и биоревитализация", to: "/courses" },
  { title: "Биогель - новое в косметологии", to: "/courses" },
];

export default function CourseDetailPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <span className="mb-4 inline-block text-base font-medium text-primary">
              Старт курса: 10 января
            </span>
            <h1 className="text-2xl font-medium uppercase leading-tight text-text md:text-[42px] md:leading-[1.28]">
              Ботулинотерапия для косметологов
            </h1>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setModalOpen(true)}
                className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Зарегистрироваться
              </button>
              <button className="rounded-full border-2 border-primary px-8 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
                Узнать подробнее
              </button>
            </div>
          </div>
          <div className="aspect-[590/588] overflow-hidden rounded-2xl bg-badge">
            <img src={heroImage} alt="Ботулинотерапия для косметологов" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-2xl bg-primary-light p-8 md:p-14">
          <p className="whitespace-pre-line text-sm leading-loose text-text/80 md:text-base">
            Процедура ботулинотерапия — это инъекционная методика для устранения и профилактики морщин. Также процедура помогает бороться с опущением уголков рта, потерей чёткости овала лица, гипергидрозом.
            {"\n\n"}
            На курсе вы научитесь тщательно подбирать препарат, а также отработаете на практике техники введения и безопасные разметки точек для разных анатомических типов лица. Вы будете эффективно и безопасно применять навыки в работе со своими клиентами.
            {"\n\n"}
            Курс по ботулинотерапии необходим, чтобы вы были уверены в своих знаниях и приносили желаемый результат своим клиентам.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-text md:text-[35px]">
          Программа курса
        </h2>
        <div className="rounded-2xl bg-white px-6 shadow-[0px_2px_20px_0px_rgba(66,66,66,0.1)] md:px-10">
          <Accordion title="Коррекция ботулотоксином типа А верхней и средней трети лица" items={day1} badge="1 день · Теория" />
          <Accordion title="Коррекция нижней трети лица, особенности лечения гипергидроза, понятие техники мезоботокса" items={day2} badge="2 день · Практика" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="aspect-[406/511] overflow-hidden rounded-2xl bg-badge">
            <img src={marina} alt="Марина Спивак" className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="mb-2 block text-sm font-medium text-text/50">Тренер</span>
            <h2 className="mb-6 text-2xl font-semibold text-primary md:text-[35px]">Марина Спивак</h2>
            <ul className="space-y-3 text-sm text-text/80 md:text-base">
              {bio.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-primary">—</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-center text-white md:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="mb-4 text-2xl font-medium uppercase md:text-[42px]">Ранняя регистрация</h2>
          <p className="mb-8 text-base font-semibold md:text-2xl">
            При регистрации на курс до 15 декабря стоимость обучения — 7000 грн
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Зарегистрироваться
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-text md:text-[32px]">
          Другие курсы
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {otherCourses.map((course) => (
            <Link
              key={course.title}
              to={course.to}
              className="rounded-xl bg-white p-6 text-center font-medium text-text shadow-[0px_2px_20px_0px_rgba(66,66,66,0.1)] transition-colors hover:text-primary"
            >
              {course.title}
            </Link>
          ))}
        </div>
      </section>

      <CallbackModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Запись на курс: Ботулинотерапия для косметологов"
      />
    </div>
  );
}

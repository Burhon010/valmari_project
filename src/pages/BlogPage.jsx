import format from "../assets/images/about/format.jpg";
import classrooms from "../assets/images/about/classrooms.jpg";
import groups from "../assets/images/about/groups.jpg";

const posts = [
  {
    image: format,
    title: "Как выбрать первый курс косметологии",
    excerpt: "Разбираем, с чего начать новичку: базовые курсы, необходимые сертификаты и на что обратить внимание при выборе учебного центра.",
    date: "02.09.2026",
  },
  {
    image: classrooms,
    title: "Мезотерапия: 5 мифов, в которые пора перестать верить",
    excerpt: "Развенчиваем популярные заблуждения о процедуре и рассказываем, как она работает на самом деле.",
    date: "18.08.2026",
  },
  {
    image: groups,
    title: "Повышение квалификации: зачем это нужно практикующему косметологу",
    excerpt: "Индустрия красоты быстро меняется. Рассказываем, как регулярное обучение помогает оставаться востребованным специалистом.",
    date: "05.08.2026",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <h1 className="mb-10 text-center text-2xl font-semibold uppercase text-text md:text-[35px]">
        Блог
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="overflow-hidden rounded-xl bg-white shadow-[0px_2px_20px_0px_rgba(66,66,66,0.12)]"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <span className="text-xs text-text/50">{post.date}</span>
              <h2 className="mb-2 mt-1 text-base font-semibold text-text">{post.title}</h2>
              <p className="mb-4 text-sm text-text/70">{post.excerpt}</p>
              <a href="#" className="text-sm font-semibold text-primary transition-colors hover:text-primary-hover">
                Читать далее →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

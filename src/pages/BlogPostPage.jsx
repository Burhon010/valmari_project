import { Link } from "react-router-dom";
import cover from "../assets/images/home/masterclass-2.jpg";

export default function BlogPostPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <div className="mb-10 grid gap-8 md:grid-cols-2 md:items-center">
        <h1 className="text-2xl font-semibold leading-snug text-text md:text-[35px] md:leading-[50px]">
          Актуальна ли мезотерапия в коррекции шеи, декольте, кистей рук и
          какие существуют альтернативы?
        </h1>
        <div className="aspect-[590/547] overflow-hidden rounded-2xl bg-badge">
          <img src={cover} alt="" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="space-y-6 rounded-2xl bg-primary-light p-6 text-sm leading-loose text-text/80 md:p-14 md:text-base">
        <p>Можно написать любое количество текста, лирического описания компании.</p>
        <p>
          <strong>Ведущий учебный центр эстетической косметологии.</strong> Более
          5 лет мы проводим сертифицированные курсы профессионального
          образования в области косметологии и индустрии красоты.
        </p>
        <p>
          В данный момент <strong>в Харькове нет аналогов нашего учебного центра</strong> по
          уровню подготовки и разнообразию читаемых курсов. Все выпускники
          нашего учебного центра востребованы в: институтах омоложения и
          здоровья, Спа-центрах, салонах красоты, частных клиниках и других
          организациях в сфере «красоты и здоровья».
        </p>
        <p>
          Мы проводим повышения квалификации, уникальные мастер-классы.{" "}
          <strong>Курсы косметолог Харьков</strong> — это хорошее вложение,
          инвестиция в будущий заработок специалиста, получившего наши
          документы, окончив обучение и получив практические знания.
        </p>
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/blog"
          className="font-semibold text-primary transition-colors hover:text-primary-hover"
        >
          ← Вернуться ко всем статьям
        </Link>
      </div>
    </article>
  );
}

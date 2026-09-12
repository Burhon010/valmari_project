import formatImg from "../../assets/images/about/format.jpg";
import classroomsImg from "../../assets/images/about/classrooms.jpg";
import groupsImg from "../../assets/images/about/groups.jpg";

const items = [
  {
    title: "Удобный формат обучения",
    text: "Мы стараемся для вас и делаем обучение еще комфортнее!\n\nУ нас вы можете обучаться в формате оффлайн или выбирать онлайн формат обучения. Наши мастер-классы дублируются в двух форматах",
    image: formatImg,
    reverse: false,
  },
  {
    title: "Светлые аудитории",
    text: "Мы стараемся для вас и делаем обучение еще комфортнее.\n\nУ нас вы можете обучаться в формате оффлайн или выбирать онлайн формат обучения. Наши мастер-классы дублируются в двух форматах",
    image: classroomsImg,
    reverse: true,
  },
  {
    title: "Обучение в маленьких группах",
    text: "Мы стараемся для вас и делаем обучение еще комфортнее!\n\nУ нас вы можете обучаться в формате оффлайн или выбирать онлайн формат обучения. Наши мастер-классы дублируются в двух форматах",
    image: groupsImg,
    reverse: false,
  },
];

export default function EducationSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <h2 className="mb-12 text-center text-2xl font-semibold text-primary md:mb-16 md:text-[35px]">
        Мы - это обучение с комфортом
      </h2>
      <div className="space-y-14 md:space-y-20">
        {items.map((item) => (
          <div
            key={item.title}
            className={`grid gap-6 md:grid-cols-2 md:items-center ${
              item.reverse ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="aspect-[488/396] overflow-hidden rounded-xl bg-badge">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium text-text/80">{item.title}</h3>
              <div className="mb-4 h-[2px] w-[133px] bg-primary" />
              <p className="whitespace-pre-line text-sm leading-relaxed text-text/80 md:text-[19px] md:leading-[25px]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

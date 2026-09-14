import { useState } from "react";
import heroWomen from "../../assets/images/home/hero-women.png";
import moneyBill from "../../assets/images/home/money-bill.jpg";

export default function HeroSection() {
  const [grabbed, setGrabbed] = useState(false);

  return (
    <section className="overflow-hidden bg-primary-light">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 md:items-end md:py-0">
        <div className="md:py-16">
          <span className="mb-4 inline-block text-sm font-semibold text-text/80 md:text-base">
            Бесплатный вебинар
          </span>
          <h1 className="text-3xl font-bold leading-tight text-primary md:text-[52px] md:leading-[1.05]">
            ПРОФЕССИЯ КОСМЕТОЛОГ
          </h1>
          <p className="mt-5 max-w-md text-sm text-text/80 md:text-base">
            Приглашаем на бесплатный вебинар для профессиональных косметологов
            и интересующихся этой профессией
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">
              Зарегистрироваться
            </button>
            <button className="rounded-full border-2 border-primary px-8 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
              Узнать подробнее
            </button>
          </div>
        </div>

        <div
          className="flex justify-center md:justify-end"
          onMouseEnter={() => setGrabbed(true)}
          onMouseLeave={() => setGrabbed(false)}
          onClick={() => setGrabbed((v) => !v)}
        >
          <div className="relative aspect-[1000/817] max-h-[320px] w-auto cursor-pointer md:max-h-[500px]">
            <img
              src={heroWomen}
              alt="Косметологи VALMARI"
              className="h-full w-full object-contain drop-shadow-xl"
            />

            {/* Рука достаёт купюру из кармана */}
            <img
              src={moneyBill}
              alt=""
              aria-hidden="true"
              className={`pointer-events-none absolute w-16 rounded-sm shadow-lg transition-all ease-out md:w-24 ${
                grabbed
                  ? "opacity-100 duration-500"
                  : "opacity-0 duration-300"
              }`}
              style={{
                left: "76%",
                bottom: grabbed ? "38%" : "13%",
                transform: grabbed
                  ? "translate(-50%, 0) rotate(-18deg) scale(1)"
                  : "translate(-50%, 0) rotate(2deg) scale(0.15)",
                transformOrigin: "bottom center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

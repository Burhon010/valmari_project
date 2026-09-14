import Carousel from "../ui/Carousel";
import promo1 from "../../assets/images/home/promo-1.jpg";
import promo2 from "../../assets/images/home/promo-2.jpg";
import promo3 from "../../assets/images/home/promo-3.jpg";

const offers = [promo1, promo2, promo3];

export default function SpecialOffersSection() {
  return (
    <section className="bg-primary-light py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-2xl font-semibold text-text md:text-[32px]">
          Специальные предложения
        </h2>
        <Carousel>
          {offers.map((src, i) => (
            <div key={i} className="h-[280px] w-[280px] overflow-hidden rounded-2xl shadow-[0px_2px_20px_0px_rgba(66,66,66,0.15)] sm:h-[340px] sm:w-[340px]">
              <img src={src} alt={`Акция ${i + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

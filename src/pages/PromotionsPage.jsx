import { useState } from "react";
import CallbackModal from "../components/ui/CallbackModal";
import promo1 from "../assets/images/home/promo-1.jpg";
import promo2 from "../assets/images/home/promo-2.jpg";
import promo3 from "../assets/images/home/promo-3.jpg";

const offers = [
  { image: promo1, title: "Акция! −15% / −20%", text: "от 3 и от 5 препаратов" },
  { image: promo2, title: "Акция −10% / −15%", text: "на 2 и на 3 единицы" },
  { image: promo3, title: "Акция MEDIFEEL −25%", text: "действует до 29.06" },
];

export default function PromotionsPage() {
  const [openOffer, setOpenOffer] = useState(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <h1 className="mb-10 text-center text-2xl font-semibold uppercase text-text md:text-[35px]">
        Акции
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer, i) => (
          <button
            key={i}
            onClick={() => setOpenOffer(i + 1)}
            className="group relative block aspect-square overflow-hidden rounded-2xl shadow-[0px_2px_20px_0px_rgba(66,66,66,0.15)]"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-left text-white">
              <p className="font-semibold">{offer.title}</p>
              <p className="text-xs text-white/80">{offer.text}</p>
            </div>
          </button>
        ))}
      </div>

      <CallbackModal
        open={Boolean(openOffer)}
        onClose={() => setOpenOffer(null)}
        title={openOffer ? `Заявка по акции №${openOffer}` : undefined}
      />
    </div>
  );
}

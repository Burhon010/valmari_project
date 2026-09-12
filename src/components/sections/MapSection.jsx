export default function MapSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14">
      <div className="grid overflow-hidden rounded-2xl md:grid-cols-3">
        <div className="col-span-2 h-64 bg-gray-200 md:h-auto">
          <iframe
            title="map"
            src="https://yandex.ru/map-widget/v1/?ll=92.868%2C56.010&z=14"
            className="h-full w-full"
            loading="lazy"
          />
        </div>
        <div className="bg-dark p-6 text-gray-300">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-9 w-9 rounded-full bg-primary" />
            <span className="font-bold text-white">+7 (999) 555-66-77</span>
          </div>
          <p className="text-sm">г. Красноярск, ул. Ленина, д. 1</p>
          <div className="mt-4 flex gap-3">
            <span className="h-8 w-8 rounded-full bg-gray-700" />
            <span className="h-8 w-8 rounded-full bg-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
}

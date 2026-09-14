export default function PlaceholderPage({ title }) {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-2xl font-semibold text-primary md:text-3xl">{title}</h1>
      <p className="mt-3 text-sm text-text/70">Страница в разработке</p>
    </div>
  );
}

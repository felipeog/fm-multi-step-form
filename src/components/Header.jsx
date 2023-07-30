export function Header({ title, subtitle }) {
  return (
    <header className="mb-8 cursor-default">
      <h1 className="text-3xl font-bold text-primary-400">{title}</h1>
      <h2 className="mt-2 text-neutral-500">{subtitle}</h2>
    </header>
  );
}

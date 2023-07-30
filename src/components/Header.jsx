import { tv } from "tailwind-variants";

const card = tv({
  slots: {
    base: "mb-8",
    title: "text-3xl font-bold text-primary-400",
    subtitle: "mt-2 text-neutral-500",
  },
});
const slots = card();

export function Header({ className, title, subtitle }) {
  return (
    <header className={slots.base({ className })}>
      <h1 className={slots.title()}>{title}</h1>
      <h2 className={slots.subtitle()}>{subtitle}</h2>
    </header>
  );
}

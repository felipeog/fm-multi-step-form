import { tv } from "tailwind-variants";

const card = tv({
  slots: {
    base: "",
    title: "text-3xl font-bold text-primary-400",
    subtitle: "mt-2 text-neutral-500",
  },
});
const slots = card();

export function Header({ className, title, subtitle, ...props }) {
  return (
    <header className={slots.base({ className })} {...props}>
      <h1 className={slots.title()}>{title}</h1>
      <h2 className={slots.subtitle()}>{subtitle}</h2>
    </header>
  );
}

import { tv } from "tailwind-variants";

const card = tv({
  base: "rounded-lg border border-neutral-400 transition-all cursor-pointer hover:border-primary-400 hover:opacity-90 active:opacity-80",
  variants: {
    active: {
      true: "border-primary-400 bg-neutral-200",
    },
  },
});

export function Card({ children, className, active, onClick }) {
  const isActive = Boolean(active);

  return (
    <button className={card({ active: isActive, className })} onClick={onClick}>
      {children}
    </button>
  );
}

import { tv } from "tailwind-variants";

const card = tv({
  slots: {
    base: "flex items-center gap-4 uppercase transition-all cursor-default",
    text: "flex flex-col text-left text-neutral-100",
    step: "text-xs text-primary-100",
    name: "text-sm font-bold",
  },
});
const slots = card();
const circle = tv({
  base: "flex h-8 w-8 items-center justify-center rounded-full border border-neutral-100 text-neutral-100 transition-all",
  variants: {
    active: {
      true: "border-primary-100 bg-primary-100 text-primary-400",
    },
  },
});

export function StepIndicator({ className, number, name, active }) {
  const isActive = Boolean(active);

  return (
    <div className={slots.base({ className })}>
      <div className={circle({ active: isActive })}>{number}</div>

      <div className={slots.text()}>
        <span className={slots.step()}>Step {number}</span>
        <span className={slots.name()}>{name}</span>
      </div>
    </div>
  );
}

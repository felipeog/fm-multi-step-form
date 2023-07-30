import { tv } from "tailwind-variants";

import checkmark from "../assets/icon-checkmark.svg";

const checkbox = tv({
  base: "transition-all overflow-hidden w-5 h-5 bg-neutral-100 border border-neutral-400 rounded flex items-center justify-center relative",
  variants: {
    active: {
      true: "bg-primary-300 border-primary-300",
    },
  },
});
const icon = tv({
  base: "transition-all absolute translate-y-8",
  variants: {
    active: {
      true: "translate-y-0",
    },
  },
});

export function Checkbox({ active }) {
  const isActive = Boolean(active);

  return (
    <div className={checkbox({ active: isActive })}>
      <img className={icon({ active: isActive })} src={checkmark} alt="" />
    </div>
  );
}

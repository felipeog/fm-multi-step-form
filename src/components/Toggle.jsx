import { tv } from "tailwind-variants";

const label = tv({
  base: "transition-all text-neutral-500 text-sm font-bold",
  variants: {
    active: {
      true: "text-primary-400",
    },
  },
});
const toggle = tv({
  base: "transition-all w-10 h-6 bg-primary-400 rounded-full relative before:transition-all before:block before:w-4 before:h-4 before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 before:bg-neutral-100",
  variants: {
    direction: {
      left: "before:left-1",
      right: "before:left-5",
    },
  },
});

export function Toggle({ left, right, selected, setSelected }) {
  function setLeft() {
    setSelected(left);
  }

  function setRight() {
    setSelected(right);
  }

  function reverse() {
    setSelected(selected.id === left.id ? right : left);
  }

  return (
    <div className="flex gap-4">
      <button
        className={label({ active: left.id === selected.id })}
        onClick={setLeft}
      >
        {left.name}
      </button>

      <button
        className={toggle({
          direction: selected.id === left.id ? "left" : "right",
        })}
        onClick={reverse}
      ></button>

      <button
        className={label({ active: right.id === selected.id })}
        onClick={setRight}
      >
        {right.name}
      </button>
    </div>
  );
}

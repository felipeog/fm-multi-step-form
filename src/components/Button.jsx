import { tv } from "tailwind-variants";

const button = tv({
  variants: {
    variant: {
      solid:
        "rounded-md px-4 py-2 text-neutral-100 hover:opacity-80 active:opacity-90",
      link: "py-2 hover:text-primary-400 active:opacity-80",
    },
    scheme: {
      regular: "",
      highlight: "",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      scheme: "regular",
      className: "bg-primary-400",
    },
    {
      variant: "solid",
      scheme: "highlight",
      className: "bg-primary-300",
    },
    {
      variant: "link",
      scheme: "regular",
      className: "text-neutral-500",
    },
    {
      variant: "link",
      scheme: "highlight",
      className: "text-primary-300",
    },
  ],
  defaultVariants: {
    variant: "solid",
    scheme: "regular",
  },
});

export function Button({ children, className, variant, scheme, ...props }) {
  return (
    <button className={button({ variant, scheme, className })} {...props}>
      {children}
    </button>
  );
}

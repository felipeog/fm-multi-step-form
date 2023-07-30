import { tv } from "tailwind-variants";

const input = tv({
  base: "w-full rounded-lg border border-neutral-400 px-4 py-2 outline-none transition-all focus:border-primary-400",
  variants: {
    error: {
      true: "border-secondary focus:border-secondary",
    },
  },
});

export function Input({
  onChange,
  label,
  error,
  id,
  type,
  value,
  placeholder,
}) {
  const hasError = Boolean(error);

  return (
    <div className="">
      <div className="mb-1 flex justify-between">
        <label className="text-sm text-primary-400" htmlFor={id}>
          {label}
        </label>

        {hasError && (
          <span className="text-sm font-bold text-secondary">{error}</span>
        )}
      </div>

      <input
        className={input({ error: hasError })}
        id={id}
        name={id}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

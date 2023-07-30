import { tv } from "tailwind-variants";

import { Header } from "../components/Header";
import { priceFormatter } from "../helpers/priceFormatter";
import { store$ } from "../store";

const table = tv({
  slots: {
    row: "text-primary-400 flex justify-between items-center",
    key: "text-sm text-neutral-500",
    value: "text-sm text-primary-400",
  },
});
const slots = table();

export function Step4() {
  const selectedPlan = store$.plan.use();
  const selectedAddons = store$.addons.use();
  const selectedRecurrence = store$.recurrence.use();
  const priceKey = selectedRecurrence.id;
  const hasAddons = Boolean(selectedAddons.length);

  function getTotal() {
    const planPrice = selectedPlan[priceKey];
    const addonsPrice = selectedAddons.reduce(
      (acc, cur) => acc + cur[priceKey],
      0,
    );

    return priceFormatter.format(planPrice + addonsPrice);
  }

  return (
    <div>
      <Header
        title="Finishing up"
        subtitle="Double-check everything looks OK before confirming."
      />

      <div className="rounded-lg bg-neutral-200 p-4 text-left">
        <div className={slots.row()}>
          <p className="text-primary-400">
            {selectedPlan.name} ({selectedRecurrence.name})
          </p>
          <p className="font-bold text-primary-400">
            {priceFormatter.formatWithRecurrence(
              selectedPlan,
              selectedRecurrence,
            )}
          </p>
        </div>

        {hasAddons && (
          <ul className="mt-4 flex flex-col gap-2 border-t border-t-neutral-400 pt-4">
            {selectedAddons.map((selectedAddon) => (
              <li className={slots.row()} key={selectedAddon.id}>
                <p className={slots.key()}>{selectedAddon.name}</p>
                <p className={slots.value()}>
                  +
                  {priceFormatter.formatWithRecurrence(
                    selectedAddon,
                    selectedRecurrence,
                  )}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex items-center justify-between p-4 text-primary-400">
        <p className={slots.key()}>Total ({selectedRecurrence.description})</p>
        <p className="text-lg font-bold text-primary-300">
          {getTotal()}/{selectedRecurrence.shorthand}
        </p>
      </div>
    </div>
  );
}

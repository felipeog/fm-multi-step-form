import { Checkbox } from "../components/Checkbox";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { ADDONS_LIST } from "../constants/addons";
import { store$ } from "../store";
import { priceFormatter } from "../helpers/priceFormatter";

export function Step3() {
  const selectedAddons = store$.addons.use();
  const selectedRecurrence = store$.recurrence.use();

  function getClickHandler(addon) {
    return () => {
      store$.addons.set((prevAddons) => {
        const hasAddon = prevAddons.some(
          (prevAddon) => prevAddon.id === addon.id,
        );

        if (hasAddon) {
          return prevAddons.filter((prevAddon) => prevAddon.id !== addon.id);
        } else {
          return [...prevAddons, addon];
        }
      });
    };
  }

  return (
    <div>
      <Header
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      />

      <ul className="flex flex-col gap-4">
        {ADDONS_LIST.map((addon) => {
          const active = selectedAddons.find(
            (selectedAddon) => selectedAddon.id === addon.id,
          );

          return (
            <li key={addon.id}>
              <Card
                className="flex w-full items-center gap-4 p-4 text-left"
                onClick={getClickHandler(addon)}
                active={active}
              >
                <Checkbox active={active} />

                <div className="flex-grow">
                  <p className="text-primary-400">{addon.name}</p>
                  <p className="text-sm text-neutral-500">
                    {addon.description}
                  </p>
                </div>

                <p className="text-sm text-primary-300">
                  +
                  {priceFormatter.formatWithRecurrence(
                    addon,
                    selectedRecurrence,
                  )}
                </p>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

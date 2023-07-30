import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { PLANS_LIST } from "../constants/plans";
import { RECURRENCES } from "../constants/recurrences";
import { store$ } from "../store";
import advanced from "../assets/icon-advanced.svg";
import arcade from "../assets/icon-arcade.svg";
import pro from "../assets/icon-pro.svg";
import { priceFormatter } from "../helpers/priceFormatter";
import { Toggle } from "../components/Toggle";

const icons = {
  advanced,
  arcade,
  pro,
};

export function Step2() {
  const selectedPlan = store$.plan.use();
  const selectedRecurrence = store$.recurrence.use();

  function setRecurrence(recurrence) {
    store$.recurrence.set(recurrence);
  }

  return (
    <div>
      <Header
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      />

      <ul className="grid grid-cols-3 gap-4">
        {PLANS_LIST.map((plan) => (
          <li key={plan.id}>
            <Card
              onClick={() => store$.plan.set(plan)}
              active={plan.id === selectedPlan.id}
              className="w-full p-4 text-left"
            >
              <img src={icons[plan.id]} alt={plan.name} />

              <p className="mt-10 text-primary-400">{plan.name}</p>

              <p className="text-sm text-neutral-500">
                {priceFormatter.formatWithRecurrence(plan, selectedRecurrence)}
              </p>

              {selectedRecurrence.id === RECURRENCES.yearly.id && (
                <p className="text-xs text-primary-400">
                  {plan.yearlyFreeMonths} month
                  {plan.yearlyFreeMonths === 1 ? "" : "s"} free
                </p>
              )}
            </Card>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex h-10 items-center justify-center rounded-lg bg-neutral-200 p-2">
        <Toggle
          left={RECURRENCES.monthly}
          right={RECURRENCES.yearly}
          selected={selectedRecurrence}
          setSelected={setRecurrence}
        />
      </div>
    </div>
  );
}

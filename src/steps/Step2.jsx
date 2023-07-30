import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { PLANS } from "../constants";
import { store$ } from "../store";
import advanced from "../assets/icon-advanced.svg";
import arcade from "../assets/icon-arcade.svg";
import pro from "../assets/icon-pro.svg";
import { formatPrice } from "../helpers/formatPrice";

const icons = {
  advanced,
  arcade,
  pro,
};

export function Step2() {
  const selectedPlan = store$.plan.use();
  const selectedRecurrence = store$.recurrence.use();

  return (
    <div>
      <Header
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      />

      <ul className="grid grid-cols-3 gap-4">
        {PLANS.map((plan) => (
          <li key={plan.id}>
            <Card
              onClick={() => store$.plan.set(plan)}
              active={plan.id === selectedPlan.id}
              className="w-full p-4 text-left"
            >
              <img src={icons[plan.id]} alt={plan.name} />
              <p className="mt-10 text-primary-400">{plan.name}</p>
              <p className="text-sm text-neutral-500">
                {formatPrice(plan.monthly)}/{selectedRecurrence.shorthand}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

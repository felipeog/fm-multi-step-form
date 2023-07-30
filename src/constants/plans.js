const ONE_YEAR = 12;

export const PLANS = {
  arcade: {
    id: "arcade",
    name: "Arcade",
    monthly: 9,
    yearlyFreeMonths: 1,
    get yearly() {
      return this.monthly * (ONE_YEAR - this.yearlyFreeMonths);
    },
  },
  advanced: {
    id: "advanced",
    name: "Advanced",
    monthly: 12,
    yearlyFreeMonths: 2,
    get yearly() {
      return this.monthly * (ONE_YEAR - this.yearlyFreeMonths);
    },
  },
  pro: {
    id: "pro",
    name: "Pro",
    monthly: 15,
    yearlyFreeMonths: 3,
    get yearly() {
      return this.monthly * (ONE_YEAR - this.yearlyFreeMonths);
    },
  },
};

export const PLANS_LIST = Object.values(PLANS);

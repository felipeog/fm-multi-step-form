const ONE_YEAR = 12;

export const ADDONS = {
  "online-service": {
    id: "online-service",
    name: "Online service",
    monthly: 1,
    get yearly() {
      return this.monthly * ONE_YEAR;
    },
    description: "Access to multiplayer games",
  },
  "larger-storage": {
    id: "larger-storage",
    name: "Larger storage",
    monthly: 2,
    get yearly() {
      return this.monthly * ONE_YEAR;
    },
    description: "Extra 1TB of cloud save",
  },
  "customizable-profile": {
    id: "customizable-profile",
    name: "Customizable profile",
    monthly: 2,
    get yearly() {
      return this.monthly * ONE_YEAR;
    },
    description: "Custom theme on your profile",
  },
};

export const ADDONS_LIST = Object.values(ADDONS);

const PriceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function format(price) {
  return PriceFormatter.format(price);
}

function formatWithRecurrence(item, recurrence) {
  const price = item[recurrence.id];

  return `${PriceFormatter.format(price)}/${recurrence.shorthand}`;
}

export const priceFormatter = {
  format,
  formatWithRecurrence,
};

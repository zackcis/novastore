// Reuse the same price formatting everywhere.
export function formatPrice(amount) {
  return `${amount.toLocaleString('en-GB', { maximumFractionDigits: 2 })} MAD`;
}

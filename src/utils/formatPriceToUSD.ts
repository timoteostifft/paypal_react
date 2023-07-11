export function formatPriceToUSD(price: string) {
  return parseFloat(price).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}
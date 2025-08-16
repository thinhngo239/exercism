export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const monthlyRate = dayRate(ratePerHour) * 22;
  const discountedMonthRate = monthlyRate * (1 - discount);
  const fullMonths = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;

  return Math.ceil(
    fullMonths * discountedMonthRate + remainingDays * dayRate(ratePerHour)
  );
}


console.log('Debug message');
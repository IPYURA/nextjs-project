export default function calcNextPaymentDate(firstPayment: Date) {
  const today = new Date(2024, 1, 5);
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth(); // 0~11 => 1~12
  const nextYear = todayMonth === 11 ? todayYear + 1 : todayYear;
  const nextMonth = todayMonth === 11 ? 0 : todayMonth + 1;

  const nextMonthLastDate = new Date(nextYear, nextMonth + 1, 0).getDate();

  if (!firstPayment) {
    throw new Error("first payment date is wrong!");
  }
  const firstPaymentDate = firstPayment.getDate();

  if (firstPaymentDate > 0 && firstPaymentDate < 29) {
    return new Date(nextYear, nextMonth, firstPaymentDate);
  } else if (firstPaymentDate === 29 || firstPaymentDate === 30) {
    if (nextMonth === 1)
      return new Date(nextYear, nextMonth, nextMonthLastDate);
    else return new Date(nextYear, nextMonth, firstPaymentDate);
  } else if (firstPaymentDate === 31) {
    if (
      nextMonth === 1 ||
      nextMonth === 3 ||
      nextMonth === 5 ||
      nextMonth === 8 ||
      nextMonth === 10
    )
      return new Date(nextYear, nextMonth, nextMonthLastDate);
    else return new Date(nextYear, nextMonth, firstPaymentDate);
  } else {
    throw new Error("first payment date is wrong!");
  }
}

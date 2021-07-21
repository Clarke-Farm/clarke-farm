import * as date from './date';

export const incoming = (arr) => {
  const incomingArr = [];
  arr.forEach((order) => {
    const deliveryDate = date.extractDate(order.estimatedDelivery);
    const todayDate = date.today().date;
    const todayMonth = date.today().month;
    const createdAtMonth = date.extractMonth(order.estimatedDelivery);
    const difference = todayDate - deliveryDate;
    if (createdAtMonth === todayMonth) {
      if (difference >= 0 && difference <= 3) {
        incomingArr.push(order);
      }
    }
  });
  // Sort array in ascending order.
  incomingArr.sort((a, b) => {
    const orderA = date.extractDate(a.estimatedDelivery);
    const orderB = date.extractDate(b.estimatedDelivery);
    return orderB - orderA;
  });
  return incomingArr;
};

export const delivered = (arr) => {
  const deliveredArr = [];
  const pendingDeliveryArr = [];
  arr.forEach((order) => {
    if (order.delivered) {
      deliveredArr.push(order);
    } else {
      pendingDeliveryArr.push(order);
    }
  });
  return { deliveredArr, pendingDeliveryArr };
};

export const currentWeekOrders = (arr) => {
  const currentDay = date.today().day;
  const currentDate = date.today().date;
  const currentDayInText = date.dayInText(currentDay);
  const weekStart = currentDayInText === 'Sun' ? currentDate : currentDayInText === 'Sat'
    ? currentDate - 6 : currentDate - currentDay;
  const weekEnd = currentDayInText === 'Sun' ? weekStart + 6 : currentDayInText === 'Sat'
    ? currentDate : currentDate + (6 - currentDay);
  return arr.filter((order) => {
    const checkin = date.extractDate(order.estimatedDelivery);
    return checkin >= weekStart && checkin <= weekEnd;
  });
};

export const orderTotalByDay = (arr) => {
  const summary = {
    Sun: 0,
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
  };
  arr.forEach((order) => {
    const day = date.extractDay(order.estimatedDelivery);
    summary[day] += Number(order.order);
  });
  return summary;
};

export const currentMonthOrders = (arr) => {
  const currentMonth = date.today().month;
  const currentYear = date.today().year;
  return arr.filter((order) => {
    const orderMonth = date.extractMonth(order.estimatedDelivery);
    const orderYear = date.extractYear(order.estimatedDelivery);
    return currentMonth === orderMonth && currentYear === orderYear;
  });
};

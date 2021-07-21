import * as date from './date';

export const checkout = (arr) => {
  const checkoutArr = [];
  arr.forEach((booking) => {
    const checkout = date.extractDate(booking.checkout);
    const todayDate = date.today().date;
    const todayMonth = date.today().month;
    const visitMonth = date.extractMonth(booking.checkin);
    const difference = checkout - todayDate;
    if (visitMonth === todayMonth) {
      if (difference === 0) {
        checkoutArr.push(booking);
      }
    }
  });
  return checkoutArr;
};

export const incoming = (arr) => {
  const incomingArr = [];
  arr.forEach((booking) => {
    const checkin = date.extractDate(booking.checkin);
    const todayDate = date.today().date;
    const todayMonth = date.today().month;
    const visitMonth = date.extractMonth(booking.checkin);
    const difference = checkin - todayDate;
    if (visitMonth === todayMonth) {
      if (difference >= 0 && difference < 2) {
        incomingArr.push(booking);
      }
    }
  });
  // Sort array in ascending order.
  incomingArr.sort((a, b) => {
    const checkinA = date.extractDate(a.checkin);
    const checkinB = date.extractDate(b.checkin);
    return checkinA - checkinB;
  });
  return incomingArr;
};

export const currentWeekGuests = (arr) => {
  const currentDay = date.today().day;
  const currentDate = date.today().date;
  const currentDayInText = date.dayInText(currentDay);
  const weekStart = currentDayInText === 'Sun' ? currentDate : currentDayInText === 'Sat'
    ? currentDate - 6 : currentDate - currentDay;
  const weekEnd = currentDayInText === 'Sun' ? weekStart + 6 : currentDayInText === 'Sat'
    ? currentDate : currentDate + (6 - currentDay);
  return arr.filter((guest) => {
    const checkin = date.extractDate(guest.checkin);
    return checkin >= weekStart && checkin <= weekEnd;
  });
};

export const guestTotalByDay = (arr) => {
  const summary = {
    Sun: 0,
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
  };
  arr.forEach((guest) => {
    const day = date.extractDay(guest.checkin);
    summary[day] += Number(guest.guestNumber);
  });
  return summary;
};

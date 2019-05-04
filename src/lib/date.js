const isLeapYear = (year) => {
  return (
    (year % 100 === 0 && year % 400 === 0) ||
    (year % 4 === 0 && year % 100 !== 0)
  )
}

const getTotalDateByYear = (year) => {
  if (year < 1900) {
    return 0;
  }
  if (isLeapYear(year)) {
    return 366 + getTotalDateByYear(year - 1);
  } else {
    return 365 + getTotalDateByYear(year - 1);
  }
}

const getTotalDateByMonth = (m, year) => {
  let day = 0;
  const feb = (isLeapYear(year)) ? 29 : 28;
  const dateByMonth = [0, 31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  for (let i = 0; i <= m; i++) {
    day = dateByMonth[i] + day;
  }
  return day;
}

export {
  getTotalDateByYear,
  isLeapYear,
  getTotalDateByMonth
};

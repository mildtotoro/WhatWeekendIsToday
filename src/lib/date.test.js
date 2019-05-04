import { getTotalDateByYear, getTotalDateByMonth, isLeapYear } from './date.js';

describe('isLeapYear', () => {
  test('year 2000 is leap year ', () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  test('year 1990 isn\'t leap year ', () => {
    expect(isLeapYear(1990)).toBe(false);
  });
});

test('year 1900 getTotalDateByYear', () => {
  expect(getTotalDateByYear(1900)).toBe(365);
});

test('march in year 2000 getTotalDateByMonth', () => {
  expect(getTotalDateByMonth(3, 2000)).toBe(91);
});

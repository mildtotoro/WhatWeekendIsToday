import { getTotalDateByYear, getTotalDateByMonth, isLeapYear } from './date.js';


describe('isLeapYear', () => {
    test('year 2000 is leap year ', () => {
        expect(isLeapYear(2000)).toBe(true);
    });

    test('year 1990 isn\'t leap year ', () => {
        expect(isLeapYear(1990)).toBe(false);
    });
});

test('getTotalDateByYear', () => {
    expect(getTotalDateByYear(1900)).toBe(365);
});

test('getTotalDateByMonth', () => {
    expect(getTotalDateByMonth(3, 2000)).toBe(91);
});






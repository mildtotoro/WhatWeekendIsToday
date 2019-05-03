import React, { Component } from 'react';

class WhatDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      year: 0,
      month: 0,
      day: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ]
    }
  }

  getTotalDateByYear = (year) => {
    try {
      if (year < 1900) {
        return 0;
      }
      if (this.isYearLeap(year)) {
        return 366 + this.getTotalDateByYear(year - 1);
      } else {
        return 365 + this.getTotalDateByYear(year - 1);
      }
    } catch (e) {
      // for maximum loop
      console.error("error", e);
    }
  }

  isYearLeap(year) {
    return (
      (year % 100 === 0 && 400 === 0) ||
      (year % 4 === 0 && year % 100 !== 0)
    )
  }

  getTotalDateByMonth = (m, year) => {
    let day = 0;
    const feb = (this.isYearLeap(year)) ? 29 : 28;
    const dateByMonth = [0, 31, feb, 31, 30, 31, 30, 31, 31, 30, 30, 31]

    for (let i = 0; i <= m; i++) {
      day = dateByMonth[i] + day;
    }

    return day;
  }

  handleInput = (e) => {
    const { day } = this.state;

    const dates = e.target.value.split("-");
    if (dates.length === 3) {
      const year = parseInt(dates[0]);
      const month = parseInt(dates[1]);
      const date = parseInt(dates[2]);

      if (year >= 1900) {
        const totalYear = this.getTotalDateByYear(year - 1);
        const totalMonth = this.getTotalDateByMonth(month - 1, year);
        const dateOfWeek = day[(totalMonth + totalYear + date) % 7];

        this.setState({
          year,
          month,
          date: dateOfWeek
        });
      }
    }
  }

  render() {
    return (
      <div>
        <input type="date" onChange={this.handleInput} />
        <h2>{this.state.date}</h2>
      </div>
    );
  }
}

export default WhatDay;

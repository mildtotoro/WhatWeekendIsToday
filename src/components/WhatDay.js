import React, { Component } from 'react';
import { getTotalDateByYear, getTotalDateByMonth } from '../lib/date.js';

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
      ],
      errorMessage: "",
    }
  }

  handleInput = (e) => {
    try {
      const { day } = this.state;
      const dates = e.target.value.split("-");
      if (dates.length === 3) {
        const year = parseInt(dates[0]);
        const month = parseInt(dates[1]);
        const date = parseInt(dates[2]);

        if (year >= 1900) {
          const totalYear = getTotalDateByYear(year - 1);
          const totalMonth = getTotalDateByMonth(month - 1, year);
          const dateOfWeek = day[(totalMonth + totalYear + date) % 7];

          this.setState({
            year,
            month,
            date: dateOfWeek,
            errorMessage: "",
          });
        } else {
          this.setState({
            errorMessage: "Year must be over 1899"
          });
        }
      }
    } catch (e) {
      this.setState({
        errorMessage: e.message
      });
    }
  }

  render() {
    return (
      <div>
        <input type="date" onChange={this.handleInput} />
        <h2>{this.state.date}</h2>
        <div>{this.state.errorMessage}</div>
      </div>
    );
  }
}

export default WhatDay;

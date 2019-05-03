import React, {Component} from 'react';

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

  calNumberByYear = (year) => {
    try{
      if(year < 1900) {
        return 0;
      }
      if(
        (year%100 ===0 && 400 === 0) ||
        (year%4 === 0 && year%100 !== 0)
      ) {
          return 366+this.calNumberByYear(year-1);
        } else {
          return 365+this.calNumberByYear(year-1);
        }
    } catch(e) {
      console.error("error");
    }
    
  }

  isYearLeap(year = null) {
    if(year === null){
      year = this.state.year;
    }
    return (
      (year%100 ===0 && 400 === 0) ||
      (year%4 === 0 && year%100 !== 0)
      ) 
  }

  calDateByMonth = (m) => {
    let day = 0;
    const feb = (this.isYearLeap)? 29 : 28;
    switch(m) {
      case 0:
        day = 0;
        break;
      case 1: 
        day = 31;
        break;
      case 2:
        day = 31 + feb;
        break;
      case 3:
        day = 31*2 + feb;
        break;
      case 4:
        day = 31*2 + 30 + feb;
        break;
      case 5:
        day = 31*3 + 30 + feb;
        break;
      case 6:
        day = 31*3 + 30*2 + feb;
        break;
      case 7:
        day= 31*4 + 30*2 + feb;
        break;
      case 8:
        day= 31*5 + 30*2 + feb;
        break;
      case 9:
        day= 31*5 + 30*3 + feb;
        break;
      case 10:
        day= 31*6 + 30*3 + feb;
        break;
      case 11:
        day= 31*6 + 30*4 + feb;
        break;
      case 12:
        day= 31*7 + 30*4 + feb;
        break;
      default:
        return;
    }
    return day;
  }

  handleInput = (e) => {
    const {day} = this.state;
  
    const dates = e.target.value.split("-");
    if(dates.length === 3) {
      const year = parseInt(dates[0]);
      const month = parseInt(dates[1]);
      const date = parseInt(dates[2]);
      
      if(year >= 1900) {
        const totalYear = this.calNumberByYear(year-1);
        const totalMonth = this.calDateByMonth(month-1);
        const dateOfWeek = day[(totalMonth+totalYear+date) %7];
    
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
        <input type="date" onChange={this.handleInput}/>
        <h2>{this.state.date}</h2>
      </div>
    );
  }
}

export default WhatDay;

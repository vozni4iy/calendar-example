import React, { Component } from 'react';
import moment from 'moment';
import CurrentDay from './CurrentDay';
import CalendarHeader from './CalendarHeader';
import WeekDays from './WeekDays';
import classNames from 'classnames';

export default class CurrentMonth extends Component {

  renderMonth() {
    let curMonth = [];
    for (let i=0; i<6; i++) {
      let curWeek = ::this.renderWeek(i);
      curMonth.push(<div key={i} className="current__week">{curWeek}</div>);
    }
    return curMonth;
  }

  renderWeek(i) {
    let curWeek = [];
    let today = this.props.today;
    let curDay = ::this.firstMonday();
    curDay.add(7*i,'days');
    for (let j=0; j<7; j++) {
      let isCurMonth = (today.month() === curDay.month());
      let isForbidden = false;
      if (this.props.forbiddenDate) {
        let forbiddenDate = this.props.forbiddenDate.date;
        let direction = this.props.forbiddenDate.direction;
        if (direction) {
          isForbidden = (+forbiddenDate) > (+curDay);
        } else {
          isForbidden = (+forbiddenDate) < (+curDay);
        }
      }
      let savedDay = moment(curDay);
      let selectedDate = this.props.selectedDate;
      let isSelected = false;
      if (savedDay.format("DD.MM.YYYY") === selectedDate.format("DD.MM.YYYY")) {
        isSelected = true;
      }
      curWeek.push(<CurrentDay
         key={j}
         isSelected={isSelected}
         isCurMonth={isCurMonth}
         isForbidden={isForbidden}
         savedDay={savedDay}
         onSelect={(isForbidden) ? (null) : (this.props.onSelect)}
      />);
      curDay.add(1,'days');
    }
    return curWeek;
  }

  firstMonday() {
    let today = this.props.today;
    let currentDate = moment(today);
    let day = currentDate.date();
    let firstDay = currentDate.subtract(day-1,'days');
    let weekDay = currentDate.day();
    let firstMonday;
    if (weekDay !== 0) {
      firstMonday = currentDate.subtract(weekDay-1,'days');
    } else {
      firstMonday = currentDate.subtract(6,'days');
    }
    return firstMonday;
  }

  render() {

    let today = this.props.today;
    let todayToString = today.format("MMMM YYYY");
    let curMonth = ::this.renderMonth();

    return(
      <div className="calendar__main">
        <CalendarHeader
          btnChangeYear={this.props.btnChangeYear}
          onLastYear={::this.props.onLastYear}
          onLastMonth={::this.props.onLastMonth}
          onNextYear={::this.props.onNextYear}
          onNextMonth={::this.props.onNextMonth}
          today={todayToString}
        />
       <WeekDays />
       <div className="calendar__body">
         {curMonth}
       </div>
      </div>
    );
  }

}

import React, { Component } from 'react';
import moment from 'moment';
import CurrentMonth from './CurrentMonth';
import './calendar.css';

export default class Calendar extends Component {

  constructor() {
    super();
    this.state = {
      today: null,
      selectedDate: null
    }
  }

  componentDidMount() {
    let forbiddenDate = this.props.forbiddenDate;
    let selectDefault = moment();
    if (forbiddenDate) {
      let direction = forbiddenDate.direction;
      if (direction) {
        selectDefault = moment(forbiddenDate.date);
      } else {
        selectDefault = moment(forbiddenDate.date);
      }
    }
    this.setState({
      today: selectDefault,
      selectedDate: selectDefault
    });
  }

  onSelect(e) {
    let selectedDate = moment(+e.target.value);
    this.setState({
      selectedDate: selectedDate
    });
    this.props.onSelect(selectedDate);
  }

  onLastYear() {
    let today = this.state.today;
    today.subtract(1,'years');
    this.setState({
      today: today
    });
  }

  onLastMonth() {
    let today = this.state.today;
    today.subtract(1,'months');
    this.setState({
      today: today
    });
  }

  onNextYear() {
    let today = this.state.today;
    today.add(1,'years');
    this.setState({
      today: today
    });
  }

  onNextMonth() {
    let today = this.state.today;
    today.add(1,'months');
    this.setState({
      today: today
    });
  }

  render() {
    let now = moment();
    let today = this.state.today;
    let currentDate = (today) ? (today) : (now);
    let selectedDay = this.state.selectedDate;
    let selectedDate = (selectedDay) ? (selectedDay) : (now);

    return(
      <CurrentMonth
        today={currentDate}
        selectedDate={selectedDate}
        forbiddenDate={this.props.forbiddenDate}
        btnChangeYear={this.props.btnChangeYear}
        onSelect={::this.onSelect}
        onLastYear={::this.onLastYear}
        onLastMonth={::this.onLastMonth}
        onNextYear={::this.onNextYear}
        onNextMonth={::this.onNextMonth}
      />
    );
  }

}

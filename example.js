import React, { Component } from 'react';
import moment from 'moment';
import Calendar from './index.js';

export default class CalendarExample extends Component {
  onSelect(value) {
    console.log('in example');
    console.log('selected date: ' + value.format("DD.MM.YYYY"));
  }

  render() {

    const styles = {
      wrapper: {
        padding: '100px 40px'
      }
    }

    const today = moment();
    let forbiddenDate = {
      date: today,
      direction: false
    };

    return(
      <div style={styles.wrapper}>
        <Calendar
          btnChangeYear={true}
          onSelect={::this.onSelect}
          forbiddenDate={forbiddenDate}
        />
      </div>
    );
  }
}

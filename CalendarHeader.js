import React, { Component } from 'react';

export const CalendarHeader = ({
  btnChangeYear, onLastYear, onLastMonth, onNextYear, onNextMonth, today}) => (
  <div className="calendar__header">
    {(btnChangeYear) ? <button onClick={onLastYear}>LY</button> : null}
    <button onClick={onLastMonth}>LM</button>
    <div>{today}</div>
    <button onClick={onNextMonth}>NM</button>
    {(btnChangeYear) ? <button onClick={onNextYear}>NY</button> : null}
  </div>
);

export default CalendarHeader;

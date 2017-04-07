import React, { Component } from 'react';
import classNames from 'classnames';
import moment from 'moment';

export const CurrentDay =
  ({isCurMonth, isForbidden, savedDay, isSelected, onSelect}) => (
    <button className={classNames({
      'cell': true,
      'valid__day': !isForbidden,
      'forbidden__day': isForbidden,
      'selected__date': isSelected,
      'current__month': isCurMonth
    })}
      onClick={onSelect}
      value={savedDay}>
      {savedDay.date()}
    </button>
);

export default CurrentDay;

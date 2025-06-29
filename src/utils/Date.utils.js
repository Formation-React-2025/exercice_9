import {
  format,
  parse,
  startOfDay,
  endOfDay,
  isValid,
  getHours,
  getMinutes,
} from 'date-fns';

const BACK_FORMAT = "yyyy-MM-dd"
const BACK_TIMESTAMP_FORMAT = "yyyy-MM-dd HH:mm:ss"
const DATE_STRING_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const TIMESTAMP_STRING_PATTERN = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

const DATE_DISPLAY_FORMAT = 'dd/MM/yyyy';

const startEnd = (data, atStartOfDay, atEndOfDay) => {
  if (atStartOfDay) {
    return startOfDay(data);
  }

  if (atEndOfDay) {
    return endOfDay(data);
  }

  return data;
};

const stringToDate = (dateString, atStartOfDay, atEndOfDay) => {
  const dateTrimed = dateString?.trim() ?? '';
  if (!dateTrimed) {
    return null;
  }

  if (!DATE_STRING_PATTERN.test(dateTrimed)) {
    return null;
  }

  return startEnd(parse(dateTrimed, BACK_FORMAT, new Date()), atStartOfDay, atEndOfDay);
};

const stringToTimestamp = (dateString, atStartOfDay, atEndOfDay) => {
  const dateTrimed = dateString?.trim() ?? '';
  if (!dateTrimed) {
    return null;
  }

  if (!TIMESTAMP_STRING_PATTERN.test(dateTrimed)) {
    return null;
  }

  return startEnd(parse(dateTrimed, BACK_TIMESTAMP_FORMAT, new Date()), atStartOfDay, atEndOfDay);
};

const dateToString = (date) => {
  return format(date, BACK_FORMAT);
};

const timestampToString = (date) => {
  return format(date, BACK_TIMESTAMP_FORMAT);
};

const toString = (data) => {
  if (!data) {
    return null;
  }

  if (typeof data === 'string') {
    return toString(stringToDate(data));
  }

  if (data instanceof Date && isValid(data)) {
    return dateToString(data);
  }

  return null;
};

const toTimestampString = (data) => {
  if (!data) {
    return null;
  }

  if (typeof data === 'string') {
    return toTimestampString(stringToTimestamp(data));
  }

  if (data instanceof Date && isValid(data)) {
    return timestampToString(data);
  }

  return null;
};

const toTimestamp = (data, atStartOfDay, atEndOfDay) => {
  if (!data) {
    return null;
  }

  if (data instanceof Date && isValid(data)) {
    return startEnd(data, atStartOfDay, atEndOfDay);
  }

  if (typeof data === 'string') {
    return stringToTimestamp(data, atStartOfDay, atEndOfDay);
  }

  return null;
};

const toDate = (data, atStartOfDay, atEndOfDay) => {
  if (!data) {
    return null;
  }

  if (data instanceof Date && isValid(data)) {
    return startEnd(data, atStartOfDay, atEndOfDay);
  }

  if (typeof data === 'string') {
    return stringToDate(data, atStartOfDay, atEndOfDay);
  }

  return null;
};

const display = (data) => {
  if (!data) {
    return '';
  }

  if (data instanceof Date && isValid(data)) {
    return format(data, DATE_DISPLAY_FORMAT);
  }

  return display(toDate(data));
};

const displayHoursMinues = (data) => {
  return `${getHours(data)}h${getMinutes(data)}`;
};

const displayTimestamp = (data) => {
  if (!data) {
    return '';
  }

  if (data instanceof Date && isValid(data)) {
    return `Le ${display(data)} à ${displayHoursMinues(data)}`;
  }

  return display(toDate(data));
}

const DateUtils = {
  toDate,
  toTimestamp,
  toString,
  display,
  toTimestampString,
  displayTimestamp,
};

export default DateUtils;

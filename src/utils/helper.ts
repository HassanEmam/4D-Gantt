import { createVerify } from "crypto";
import { data } from "../classes/data";

/**
 * This function draws a line given its coordinates and colour
 * @param {CanvasRenderingContext2D} ctx the canvas context
 * @param {number} startX the starting point of the line on the x axis
 * @param {number} startY the starting point of the line on the y axis
 * @param {number} endX the ending point of the line on the x axis
 * @param {number} endY the ending point of the line on the y axis
 * @param {string} color the color of the line
 */
export function drawLine(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  color: string
) {
  // ctx.globalCompositeOperation = "destination-over";
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.restore();
}

export function drawBar(
  ctx: CanvasRenderingContext2D,
  upperLeftCornerX: number,
  upperLeftCornerY: number,
  width: number,
  height: number,
  color: string,
  text?: string
) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
  if (text) {
    // ctx.globalCompositeOperation = "source-over";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    let fontSize = Math.min(12);
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = "black";
    ctx.fillText(
      text,
      upperLeftCornerX + width / 2,
      upperLeftCornerY + height / 2,
      width
    );
  }
  ctx.restore();
}

/**
 *
 * @param {data} data the data to be processes
 * @returns an array containing the min and max date
 */
export function minmax(data: data[]) {
  let max = new Date(0);
  let min = data[0].start;
  data.forEach((element) => {
    if (element.end && element.end > max) {
      max = element.end;
    }
    if (element.start && element.start < min && element.start > new Date(0)) {
      min = element.start;
    }
  });
  return [min, max];
}

/**
 * compares two dates and returns the difference in months
 * @param {Date} firstMonth the first date of the period to compare
 * @param {Date} lastMonth the last date of the period to compare
 * @returns {number} a number representing the number of months between the two dates
 */
export function monthDiff(firstMonth: any, lastMonth: any) {
  let months;
  months = (lastMonth.getFullYear() - firstMonth.getFullYear()) * 12;
  months -= firstMonth.getMonth();
  months += lastMonth.getMonth();
  return months <= 0 ? 0 : months;
}

/**
 * Compares two dates and returns the difference in days
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns
 */
export function dayDiff(startDate: Date, endDate: Date) {
  const difference = endDate.getTime() - startDate.getTime();
  const days = Math.ceil(difference / (1000 * 3600 * 24)) + 1;
  return days;
}

/**
 * This function returns the number of days in a given month
 * @param year the year number
 * @param month the month number
 * @returns {number} the number of days in the given month
 */
export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}
/**
 * This function the symbol of a day of the week given the year, month and day
 * @param year the year number
 * @param month the month number
 * @param day day number
 * @returns {string} day symbol as single character
 */
export function getDayOfWeek(year: number, month: number, day: number) {
  const daysOfTheWeekArr = ["M", "T", "W", "T", "F", "S", "S"];
  const dayOfTheWeekIndex = new Date(year, month, day).getDay();
  return daysOfTheWeekArr[dayOfTheWeekIndex];
}

/**
 * Create a formatted date string
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @returns {string} a formatted date string
 */
export function createFormattedDateFromStr(
  year: number,
  month: number,
  day: number
) {
  let monthStr = month.toString();
  let dayStr = day.toString();

  if (monthStr.length === 1) {
    monthStr = `0${monthStr}`;
  }
  if (dayStr.length === 1) {
    dayStr = `0${dayStr}`;
  }
  return `${year}-${monthStr}-${dayStr}`;
}

/**
 * Formats a date object to a string
 * @param {Date}date the date to be formatted
 * @returns {string} a formatted date string
 */
export function createFormattedDateFromDate(date: Date) {
  let monthStr = (date.getMonth() + 1).toString();
  let dayStr = date.getDate().toString();

  if (monthStr.length === 1) {
    monthStr = `0${monthStr}`;
  }
  if (dayStr.length === 1) {
    dayStr = `0${dayStr}`;
  }
  return `${date.getFullYear()}-${monthStr}-${dayStr}`;
}

/**
 * Adds number of days to a date and return new date
 * @param date the original date
 * @param days number of days to be added
 * @returns {Date} the new date
 */
export function addDays(date: Date, days: number) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * this function solve the issue of scrolling within a div and getting correction for mouse events
 * @param aobj the elemeent hosting the event
 * @returns
 */
export function recursive_offset(aobj: any) {
  var currOffset = {
    x: 0,
    y: 0,
  };
  var newOffset = {
    x: 0,
    y: 0,
  };

  if (aobj !== null) {
    if (aobj.scrollLeft) {
      currOffset.x = aobj.scrollLeft;
    }

    if (aobj.scrollTop) {
      currOffset.y = aobj.scrollTop;
    }

    if (aobj.offsetLeft) {
      currOffset.x -= aobj.offsetLeft;
    }

    if (aobj.offsetTop) {
      currOffset.y -= aobj.offsetTop;
    }

    if (aobj.parentNode !== undefined) {
      newOffset = recursive_offset(aobj.parentNode);
    }

    currOffset.x = currOffset.x + newOffset.x;
    currOffset.y = currOffset.y + newOffset.y;
  }
  return currOffset;
}

export function toUTF16(codePoint: any) {
  var TEN_BITS = parseInt("1111111111", 2);
  function u(codeUnit: any) {
    return "\\u" + codeUnit.toString(16).toUpperCase();
  }

  if (codePoint <= 0xffff) {
    return u(codePoint);
  }
  codePoint -= 0x10000;

  // Shift right to get to most significant 10 bits
  var leadSurrogate = 0xd800 + (codePoint >> 10);

  // Mask to get least significant 10 bits
  var tailSurrogate = 0xdc00 + (codePoint & TEN_BITS);

  return u(leadSurrogate) + u(tailSurrogate);
}

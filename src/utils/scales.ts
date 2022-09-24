/**
 * Gets a date and returns a scaled value
 * @param  {Date} dateToSclae the date to convert into a scaled value
 * @param  {Date} minDate the min date of the chart
 * @param {Date} maxDate the max date of the chart
 * @param {number} canvasWidth the width of the canvas
 * @return {number} the scaled value
 */
export function scaleX(
  dateToSclae: Date,
  minDate: Date,
  maxDate: Date,
  width: number
) {
  const min = minDate.getTime();
  const max = maxDate.getTime();
  const overallDuration = max - min;
  if (dateToSclae && dateToSclae instanceof Date) {
    const date = dateToSclae.getTime();
    const scale = Math.ceil((date - min) * (width / overallDuration));
    return scale;
  }
  return 0;
}

export function scaleY() {
  // TODO
}

/**
 *
 * @param x the x coordinate of the point
 * @param minStart
 * @param overallDuration
 * @param canvasWidth
 * @returns the date corresponding to the x coordinate
 */
export function scaleDate(
  x: number,
  minStart: Date,
  overallDuration: number,
  canvasWidth: number
) {
  let retDate = new Date(
    Math.ceil(minStart.getTime() + x * (overallDuration / canvasWidth))
  );
  return retDate;
}

import { data } from "./../types/data";

/**
 *
 * @param ctx the canvas context
 * @param startX the starting point of the line on the x axis
 * @param startY the starting point of the line on the y axis
 * @param endX the ending point of the line on the x axis
 * @param endY the ending point of the line on the y axis
 * @param color the color of the line
 */
export function drawLine(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  color: string
) {
  ctx.save();
  ctx.strokeStyle = color;
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
  color: string
) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
  ctx.restore();
}

export function minmax(data: data[]) {
  let max = new Date(0);
  let min = data[0].start;
  data.forEach((element) => {
    if (element.end > max) {
      max = element.end;
    }
    if (element.start < min) {
      min = element.start;
    }
  });
  return [min, max];
}

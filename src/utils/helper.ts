import { Context } from "vm";

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
  // ctx.lineWidth = 10;
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

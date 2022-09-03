export class Recatangle {
  width: number;
  height: number;
  x: number;
  y: number;
  color: string;
  fontColor: string;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color?: string,
    fontColor?: string
  ) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.fontColor = fontColor;
  }

  draw(context: CanvasRenderingContext2D, color?: string, fontColor?: string) {
    color
      ? (this.color = color)
      : this.color
      ? this.color
      : (this.color = "blue");
    fontColor
      ? (this.fontColor = fontColor)
      : this.fontColor
      ? this.fontColor
      : (this.fontColor = "white");
    console.log(this.fontColor);
    context.textAlign = "center";
    context.textBaseline = "middle";
    let fontSize = Math.min(this.width / 2, this.height / 2);
    context.font = `{fontSize}px Arial`;
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fillStyle = this.fontColor;
    // context.fillStyle = "black";
    context.fillText(
      "Task1",
      this.x + this.width / 2,
      this.y + this.height / 2
    );
  }

  update(context: CanvasRenderingContext2D, x: number, y: number) {
    this.draw(context);
    this.x = x;
    this.y = y;
  }
}

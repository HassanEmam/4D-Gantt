import { options } from "../classes/options";

export class Task {
  width: number;
  height: number;
  x: number;
  y: number;
  color: string;
  fontColor: string;
  name: string;
  context: CanvasRenderingContext2D;
  hoverColor: string;
  options: options;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    context: CanvasRenderingContext2D,
    color?: string,
    fontColor?: string,
    name?: string,
    options?: options
  ) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.fontColor = fontColor;
    this.name = name;
    this.context = context;
    this.options = options;
    this.color = this.options.barColor;
    this.hoverColor = this.options.barColorHover;
  }

  draw(color?: string, fontColor?: string, name?: string) {
    color
      ? (this.color = color)
      : this.color
      ? this.color
      : (this.color = "lightgreen");
    fontColor
      ? (this.fontColor = fontColor)
      : this.fontColor
      ? this.fontColor
      : (this.fontColor = "white");
    name ? (this.name = name) : this.name ? this.name : (this.name = "Task");
    if (this.name) {
      this.context.globalCompositeOperation = "source-over";
      this.context.textAlign = "center";
      this.context.textBaseline = "middle";
      let fontSize = Math.min(this.width / 1.5, this.height / 1.5);
      this.context.font = `${fontSize}px Arial`;
      this.context.fillStyle = this.color;
      this.context.fillRect(this.x, this.y, this.width, this.height);
      this.context.fillStyle = this.fontColor;
      // this.context.fillStyle = "black";

      this.context.fillText(
        this.name,
        this.x + this.width / 2,
        this.y + this.height / 2
      );
    }
  }

  update(x: number, y: number) {
    this.draw();
    this.x = x;
    this.y = y;
  }

  collision(x: number, y: number) {
    if (
      x >= this.x - this.options.timeLineColumnWidth / 2 &&
      x <= this.x + this.width - this.options.timeLineColumnWidth / 2 &&
      y >= this.y &&
      y <= this.y + this.height
    ) {
      this.color = this.options.barColorHover;
      this.draw();
      return true;
    } else {
      this.color = this.options.barColor;
      this.draw();
      return false;
    }
  }
}

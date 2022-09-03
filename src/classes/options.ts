import { data } from "./data";

export interface options {
  canvas: HTMLCanvasElement;
  padding: number;
  gridScale: number;
  gridColor: string;
  data: data[];
  titleOptions: string;
  colors: string[];
}

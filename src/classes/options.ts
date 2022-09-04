import { data } from "./data";

export interface options {
  canvas: HTMLCanvasElement;
  padding: number;
  gridScale: number;
  gridColor: string;
  data: data[];
  titleOptions: string;
  rowHeight?: number;
  timeLineColumnWidth?: number;
  timeLineBackgroundColor?: string;
  timeLineHeight?: number;
  tableWidth?: number;
  barColor?: string;
  barColorHover?: string;
  colors?: string[];
}

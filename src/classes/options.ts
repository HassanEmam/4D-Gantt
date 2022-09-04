import { data } from "./data";

export interface options {
  barColor?: string;
  barColorHover?: string;
  canvas: HTMLCanvasElement;
  colors?: string[];
  data: data[];
  dataDate?: Date;
  focusTime?: Date;
  gridColor: string;
  gridScale: number;
  padding: number;
  rowHeight?: number;
  tableWidth?: number;
  timeLineColumnWidth?: number;
  timeLineBackgroundColor?: string;
  timeLineHeight?: number;
  titleOptions: string;
}

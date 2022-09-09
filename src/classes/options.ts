import { data } from "./data";

export interface tableHeader {
  fontSize?: number;
  fontColor?: string;
  backgroundColor?: string;
}
export interface tableOptions {
  width: number;
  header?: tableHeader;
}
export interface options {
  barColor?: string;
  barColorHover?: string;
  container: HTMLElement;
  colors?: string[];
  data: data[]; // TODO: data could be removed from options
  dataDate?: Date;
  focusTime?: Date;
  gridColor: string;
  gridScale: number;
  rowHeight?: number;
  tableWidth: number;
  table: tableOptions;
  timeLineColumnWidth?: number;
  timeLineBackgroundColor?: string;
  timeLineHeight?: number;
  titleOptions: string;
}

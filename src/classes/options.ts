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

//TODO: restructure options to be more modular
// {
//  barchart: { width: 100, height: 100, bar: { width: 10, height: 10 } },
//  table: { width: 100, header: { fontSize: 10, fontColor: 'red', backgroundColor: 'blue' } },
//  timeline: { width: 100, height: 100, bar: { width: 10, height: 10 } },
//  grid: { width: 100, height: 100, bar: { width: 10, height: 10 } },
//  dataDate: Date,
//  focusTime: Date,
// }
export interface options {
  barColor?: string;
  barColorHover?: string;
  showBaseline?: boolean;
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

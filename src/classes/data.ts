export interface data {
  name: string;
  id: number;
  start: Date;
  end: Date;
  parent?: number;
  progress?: number;
  level?: number;
  [key: string]: any;
}

export interface nestedData {
  name: string;
  id: number;
  start: Date;
  end: Date;
  parent?: number;
  progress?: number;
  children?: nestedData[];
  level?: number;
  [key: string]: any;
}

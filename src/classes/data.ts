export interface data {
  name: string;
  id: number;
  start: Date;
  end: Date;
  parent?: number;
  progress?: number;
  level?: number;
  visible?: boolean;
  hasChildren?: boolean;
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
  expanded?: boolean;
  visible?: boolean;
  [key: string]: any;
}

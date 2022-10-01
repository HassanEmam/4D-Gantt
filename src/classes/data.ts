export interface data {
  name: string;
  id: string;
  start: Date;
  baselineStart?: Date;
  end: Date;
  baselineEnd?: Date;
  parent?: string | null;
  progress?: number;
  level?: number;
  visible?: boolean;
  hasChildren?: boolean;
  [key: string]: any;
}

export interface nestedData {
  name: string;
  id: string;
  start: Date;
  end: Date;
  parent?: string;
  progress?: number;
  children?: nestedData[];
  level?: number;
  expanded?: boolean;
  visible?: boolean;
  [key: string]: any;
}

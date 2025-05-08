
export interface Field {
  name: string;
  type: string;
  table: string;
}

export interface Table {
  name: string;
  fields: Field[];
}

export type JoinType = 'INNER' | 'LEFT' | 'RIGHT' | 'FULL';

export interface Join {
  id: string;
  type: JoinType;
  table: string;
  leftField: Field;
  rightField: Field;
}

export type Operator = '=' | '!=' | '>' | '<' | '>=' | '<=' | 'LIKE' | 'IN' | 'NOT IN';

export interface Condition {
  id: string;
  field: Field;
  operator: Operator;
  value: string;
}

export interface ConditionGroup {
  id: string;
  type: 'AND' | 'OR';
  conditions: Condition[];
}

export interface QueryState {
  selectedTable: string;
  selectedFields: Field[];
  joins: Join[];
  conditionGroups: ConditionGroup[];
}
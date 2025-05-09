
export interface Field {
  name: string;
  type: string;
  table: string;
}
export interface Column {
  name: string;
  type: 'string' | 'number' | 'date' | 'boolean';
  required?: boolean;
}

export interface TableDefinition {
  columns: Column[];
}

export type DataRecord = {
  [key: string]: string | number | boolean | Date;
}

type InferTableData<T extends TableDefinition> = {
  [K in T['columns'][number]['name']]:
  T['columns'][number] extends { name: K, type: 'string' } ? string :
      T['columns'][number] extends { name: K, type: 'number' } ? number :
          T['columns'][number] extends { name: K, type: 'boolean' } ? boolean :
              T['columns'][number] extends { name: K, type: 'date' } ? Date :
                  never;
};


export interface Table {
  id: string;
  name: string;
  definition: TableDefinition;
  data: DataRecord[] | InferTableData<TableDefinition>[];
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
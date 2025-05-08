
import {QueryState, Field, Join, Condition, JoinType, ConditionGroup} from '~/types/queryBuilder';

export interface IQueryBuilderService {
    generateSQL(state: QueryState): string;
    validateJoin(join: Join): boolean;
    validateCondition(condition: Condition): boolean;
}

export class QueryBuilderService implements IQueryBuilderService {
    generateSQL(state: QueryState): string {
        const selectClause = this.generateSelectClause(state.selectedFields);
        const fromClause = this.generateFromClause(state.selectedTable);
        const joinClause = this.generateJoinClause(state.joins);
        const whereClause = this.generateWhereClause(state.conditionGroups);

        return `${selectClause}\n${fromClause}\n${joinClause}\n${whereClause};`;
    }

    private generateSelectClause(fields: Field[]): string {
        const fieldList = fields
            .map(field => `${field.table}.${field.name}`)
            .join(', ');
        return `SELECT ${fieldList}`;
    }

    private generateFromClause(tableName: string): string {
        if (!tableName) {
            throw new Error('Table name is required');
        }

        // Sanitize table name to prevent SQL injection
        // In a real application, you should use proper SQL escaping
        const sanitizedTableName = tableName.replace(/[^a-zA-Z0-9_]/g, '');

        return `FROM ${sanitizedTableName}`;
    }

    private generateJoinClause(joins: Join[]): string {
        if (!joins || joins.length === 0) {
            return '';
        }

        // Validate join types
        const validJoinTypes: JoinType[] = ['INNER', 'LEFT', 'RIGHT', 'FULL'];

        return joins.map(join => {
            // Validate join object
            if (!join.table || !join.leftField || !join.rightField) {
                throw new Error('Invalid join configuration: missing required fields');
            }

            // Validate join type
            if (!validJoinTypes.includes(join.type)) {
                throw new Error(`Invalid join type: ${join.type}`);
            }

            try {
                // Sanitize all inputs
                const sanitizedTable = this.sanitizeIdentifier(join.table);
                const sanitizedLeftTable = this.sanitizeIdentifier(join.leftField.table);
                const sanitizedLeftField = this.sanitizeIdentifier(join.leftField.name);
                const sanitizedRightField = this.sanitizeIdentifier(join.rightField.name);

                // Build the JOIN clause
                return [
                    join.type,
                    'JOIN',
                    sanitizedTable,
                    'ON',
                    `${sanitizedLeftTable}.${sanitizedLeftField}`,
                    '=',
                    `${sanitizedTable}.${sanitizedRightField}`
                ].join(' ');
            } catch (error) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                throw new Error(`Failed to generate JOIN clause: ${error.message}`);
            }
        }).join('\n');
    }

// Helper method for sanitizing SQL identifiers
    private sanitizeIdentifier(identifier: string): string {
        if (!identifier) {
            throw new Error('Invalid identifier: value is empty');
        }

        const sanitized = identifier.replace(/[^a-zA-Z0-9_]/g, '');
        if (sanitized !== identifier) {
            throw new Error(`Invalid identifier: "${identifier}" contains invalid characters`);
        }

        return sanitized;
    }

    private generateWhereClause(conditionGroups: ConditionGroup[]): string {
        if (!conditionGroups || conditionGroups.length === 0) {
            return '';
        }

        const whereConditions = conditionGroups.map(group => {
            const conditions = group.conditions.map(condition => {
                // Sanitize inputs
                const sanitizedTable = this.sanitizeIdentifier(condition.field.table);
                const sanitizedField = this.sanitizeIdentifier(condition.field.name);

                // Handle different operator types and values
                const value = this.formatValue(condition.value, condition.field.type);

                // Special handling for IN and NOT IN operators
                if (condition.operator === 'IN' || condition.operator === 'NOT IN') {
                    return `${sanitizedTable}.${sanitizedField} ${condition.operator} (${value})`;
                }

                // Special handling for LIKE operator
                if (condition.operator === 'LIKE') {
                    return `${sanitizedTable}.${sanitizedField} LIKE ${value}`;
                }

                return `${sanitizedTable}.${sanitizedField} ${condition.operator} ${value}`;
            });

            // Join conditions within a group with AND
            return `(${conditions.join(' AND ')})`;
        });

        // Join groups with their respective types (AND/OR)
        return `WHERE ${whereConditions.join(' OR ')}`;
    }

// Helper method to format values based on field type
    private formatValue(value: string, type: string): string {
        if (value === null || value === undefined) {
            return 'NULL';
        }

        switch (type.toLowerCase()) {
            case 'number':
            case 'integer':
            case 'float':
            case 'decimal':
                // Validate if the value is actually a number
                if (isNaN(Number(value))) {
                    throw new Error(`Invalid numeric value: ${value}`);
                }
                return value;

            case 'boolean':
                return value.toLowerCase() === 'true' ? 'TRUE' : 'FALSE';

            case 'date':
            case 'datetime':
                // Validate date format and escape
                if (!this.isValidDate(value)) {
                    throw new Error(`Invalid date value: ${value}`);
                }
                return `'${value}'`;

            case 'string':
            default:
                // Escape string values
                return `'${this.escapeString(value)}'`;
        }
    }

// Helper method to validate dates
    private isValidDate(dateString: string): boolean {
        const date = new Date(dateString);
        return !isNaN(date.getTime());
    }

// Helper method to escape string values
    private escapeString(value: string): string {
        return value.replace(/'/g, "''");
    }


    // Implement other private methods...

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validateJoin(_join: Join): boolean {
        // Implement join validation logic
        return true;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validateCondition(_condition: Condition): boolean {
        // Implement condition validation logic
        return true;
    }

}
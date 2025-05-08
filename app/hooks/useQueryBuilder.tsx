// app/hooks/useQueryBuilder.ts

import { useState, useCallback } from 'react';
import {
    QueryState,
    Field,
    Join,
    ConditionGroup,
    Condition,
    Operator
} from '~/types/queryBuilder';
import { QueryBuilderService } from '~/services/queryBuilderService';
import { v4 as uuidv4 } from 'uuid'; // Make sure to install uuid package

export function useQueryBuilder() {
    const [queryState, setQueryState] = useState<QueryState>({
        selectedTable: '',
        selectedFields: [],
        joins: [],
        conditionGroups: []
    });

    const queryService = new QueryBuilderService();

    // Field Management Methods
    const addField = useCallback((field: Field) => {
        setQueryState(prev => ({
            ...prev,
            selectedFields: [...prev.selectedFields, field]
        }));
    }, []);

    const removeField = useCallback((fieldToRemove: Field) => {
        setQueryState(prev => ({
            ...prev,
            selectedFields: prev.selectedFields.filter(
                field => !(field.name === fieldToRemove.name && field.table === fieldToRemove.table)
            )
        }));
    }, []);

    const updateFields = useCallback((fields: Field[]) => {
        setQueryState(prev => ({
            ...prev,
            selectedFields: fields
        }));
    }, []);

    // Condition Group Management Methods
    const addConditionGroup = useCallback((type: 'AND' | 'OR' = 'AND') => {
        const newGroup: ConditionGroup = {
            id: uuidv4(),
            type,
            conditions: []
        };

        setQueryState(prev => ({
            ...prev,
            conditionGroups: [...prev.conditionGroups, newGroup]
        }));

        return newGroup.id;
    }, []);

    const removeConditionGroup = useCallback((groupId: string) => {
        setQueryState(prev => ({
            ...prev,
            conditionGroups: prev.conditionGroups.filter(group => group.id !== groupId)
        }));
    }, []);

    const updateConditionGroupType = useCallback((groupId: string, type: 'AND' | 'OR') => {
        setQueryState(prev => ({
            ...prev,
            conditionGroups: prev.conditionGroups.map(group =>
                group.id === groupId ? { ...group, type } : group
            )
        }));
    }, []);

    // Condition Management Methods
    const addCondition = useCallback((
        groupId: string,
        field: Field,
        operator: Operator = '=',
        value: string = ''
    ) => {
        const newCondition: Condition = {
            id: uuidv4(),
            field,
            operator,
            value
        };

        setQueryState(prev => ({
            ...prev,
            conditionGroups: prev.conditionGroups.map(group =>
                group.id === groupId
                    ? { ...group, conditions: [...group.conditions, newCondition] }
                    : group
            )
        }));

        return newCondition.id;
    }, []);

    const removeCondition = useCallback((groupId: string, conditionId: string) => {
        setQueryState(prev => ({
            ...prev,
            conditionGroups: prev.conditionGroups.map(group =>
                group.id === groupId
                    ? {
                        ...group,
                        conditions: group.conditions.filter(
                            condition => condition.id !== conditionId
                        )
                    }
                    : group
            )
        }));
    }, []);

    const updateCondition = useCallback((
        groupId: string,
        conditionId: string,
        updates: Partial<Omit<Condition, 'id'>>
    ) => {
        setQueryState(prev => ({
            ...prev,
            conditionGroups: prev.conditionGroups.map(group =>
                group.id === groupId
                    ? {
                        ...group,
                        conditions: group.conditions.map(condition =>
                            condition.id === conditionId
                                ? { ...condition, ...updates }
                                : condition
                        )
                    }
                    : group
            )
        }));
    }, []);

    // Utility Methods
    const clearConditions = useCallback(() => {
        setQueryState(prev => ({
            ...prev,
            conditionGroups: []
        }));
    }, []);

    const clearFields = useCallback(() => {
        setQueryState(prev => ({
            ...prev,
            selectedFields: []
        }));
    }, []);

    const getAvailableFields = useCallback(() => {
        return queryState.selectedFields;
    }, [queryState.selectedFields]);

    // FOR FUTURE IMPLEMENTATION

    // const getAvailableFields = useCallback(() => {
    //     // Return selected fields directly without spreading
    //     const fields = queryState.selectedFields;
    //
    //     // Add fields from joined tables
    //     queryState.joins.forEach(join => {
    //         // Example implementation (needs to be adjusted based on your data structure)
    //         const joinedTableFields = getTableFields(join.table); // You'll need to implement this
    //         fields.push(...joinedTableFields);
    //     });
    //
    //     return fields;
    // }, [queryState.selectedFields, queryState.joins]);


    const addJoin = useCallback((join: Join) => {
        if (queryService.validateJoin(join)) {
            setQueryState(prev => ({
                ...prev,
                joins: [...prev.joins, join]
            }));
        }
    }, []);

    // Generate SQL
    const generateSQL = useCallback(() => {
        return queryService.generateSQL(queryState);
    }, [queryState]);

    return {
        // State
        queryState,

        // Field Methods
        addField,
        removeField,
        updateFields,
        clearFields,

        // Join Methods
        addJoin,

        // Condition Group Methods
        addConditionGroup,
        removeConditionGroup,
        updateConditionGroupType,

        // Condition Methods
        addCondition,
        removeCondition,
        updateCondition,
        clearConditions,

        // Utility Methods
        getAvailableFields,
        generateSQL
    };
}
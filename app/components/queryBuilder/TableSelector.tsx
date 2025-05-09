import { Table } from '~/types/queryBuilder';
import { TableIcon } from "~/components/icons/TableIcon";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";

interface TableSelectorProps {
    tables: Table[];
    onSelect: (tableName: string) => void;
}

export function TableSelector({ tables, onSelect }: TableSelectorProps) {
    const [selected, setSelected] = useState("");

    const handleSelect = (tableName: string) => {
        setSelected(tableName);
        onSelect(tableName);
    };

    return (
        <div className="p-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className="bg-orange-100 text-orange-600 hover:bg-orange-200 px-3 py-1 text-sm font-medium rounded flex items-center gap-1"
                    >
                        <span className="flex items-center gap-1 bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm">
                                <TableIcon className="w-4 h-4" />
                            {selected || "Select Table"}
                        </span>
                        <svg
                            className="ml-1 h-4 w-4 text-orange-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                    {tables.map((table) => (
                        <DropdownMenuItem
                            key={table.name}
                            onClick={() => handleSelect(table.name)}
                            className="cursor-pointer"
                        >
                            <span className="flex items-center gap-1 bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm">
                                <TableIcon className="w-4 h-4" />
                                {table.name}
                            </span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
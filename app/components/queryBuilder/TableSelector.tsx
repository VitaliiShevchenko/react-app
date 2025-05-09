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
import {DropDowmArrow} from "~/components/icons/DropDowmArrow";

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
                        <DropDowmArrow/>
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

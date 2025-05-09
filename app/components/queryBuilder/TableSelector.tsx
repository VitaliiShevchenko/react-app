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
import {DropDownArrow} from "~/components/icons/DropDownArrow";

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
        <div className="justify-items-start items-start p-0 h-5 bg-white">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className="bg-fields text-base font-medium flex items-center gap-1 border-0 p-0 h-5 rounded-none shadow-none"
                    >
                        <span className="flex items-center gap-1 color-accent-orange bg-fields text-base h-5 rounded-none">
                                <TableIcon className="" />
                            {selected || "Select Table"}
                        </span>
                        <DropDownArrow className="rounded-none" color="text-base"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                    {tables.map((table) => (
                        <DropdownMenuItem
                            key={table.name}
                            onClick={() => handleSelect(table.name)}
                            className="cursor-pointer"
                        >
                            <span className="flex items-center gap-1 color-accent-orange bg-fields text-base h-5 rounded-none">
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

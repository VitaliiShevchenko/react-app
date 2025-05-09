import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { Table } from "~/types/queryBuilder";

import {useState} from "react";
import {DropDownArrow} from "~/components/icons/DropDownArrow";
import { getColumnIcon } from "~/utils/columnIcons";

interface FieldSelectorProps {
    selectedTable: Table;
    onFieldSelect: (field: string) => void;
}

export function FieldSelector({
                                  selectedTable,
                                  onFieldSelect,
                              }: FieldSelectorProps) {
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);

    const handleSelect = (columnName: string) => {
        setSelected(columnName);
        onFieldSelect(columnName);
        setOpen(false);
    };

    // Get the icon component for the selected field
    const SelectedIconComponent = getColumnIcon(selected)

    return (
        <div className="">
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className="flex bg-select hover:bg-gray hover:border-none px-3 py-3.5 text-sm font-medium rounded-lg border-none  items-center gap-1 h-12"
                    >
                        <span className="flex items-center gap-1 bg-select color-text-dark rounded text-sm  tracking-wider leading-4 ">
                            Select Field
                        </span>
                        <DropDownArrow/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                    <DropdownMenuLabel className="color-text-tertiary text-xs leading-5 tracking-wider uppercase font-medium ">
                        {selectedTable.name} Fields
                    </DropdownMenuLabel>
                    {selectedTable?.definition.columns?.map((column) => {
                        const IconComponent = getColumnIcon(column.name);
                        return (
                            <DropdownMenuItem
                                key={column.name}
                                onSelect={() => handleSelect(column.name)}
                                className="cursor-pointer"
                            >
                                <span className="flex items-center gap-1 bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm">
                                    <IconComponent className="w-4 h-4" />
                                    {column.name}
                                </span>
                            </DropdownMenuItem>
                        );
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default FieldSelector;
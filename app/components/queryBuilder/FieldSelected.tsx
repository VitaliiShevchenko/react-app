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
import {camelCaseToHuman} from "~/utils/textTransformUtils";

interface FieldSelectedProps {
    selectedTable: Table;
    selectedField: string;
    onFieldSelect: (field: string) => void;
}

export function FieldSelected({
                                  selectedTable,
                                  selectedField,
                                  onFieldSelect,
                              }: FieldSelectedProps) {
    const [selected, setSelected] = useState(selectedField);
    const [open, setOpen] = useState(false);

    const handleSelect = (columnName: string) => {
        setSelected(columnName);
        onFieldSelect(columnName);
        setOpen(false);
    };

    // Get the icon component for the selected field
    const SelectedIconComponent = getColumnIcon(selected)

    return (
        <div className="p-0 m-0 bg-fields">
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className="bg-fields hover:bg-orange-200 text-sm font-medium rounded-none flex items-center gap-1 p-0 border-none h-5 shadow-none"
                    >
                        <span className="flex items-center gap-1 bg-fields color-accent-primary  rounded text-sm">
                            <SelectedIconComponent />
                            {camelCaseToHuman(selected) || "Select Field"}
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
                                <span className="flex items-center gap-1 bg-white color-accent-dark px-2 py-1 rounded text-sm">
                                    <IconComponent className="w-4 h-4" />
                                    {camelCaseToHuman(column.name)}
                                </span>
                            </DropdownMenuItem>
                        );
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default FieldSelected;
import {
    EmailIcon,
    PhoneIcon,
    HashIcon,
    TypeIcon,
    LocationIcon,
    DefaultColumnIcon,
} from "~/components/icons/ColumnIcons";

export const getColumnIcon = (columnName: string) => {
    // Convert the column name to lowercase for case-insensitive matching
    const name = columnName.toLowerCase();

    if (name.includes('email')) return EmailIcon;
    if (name.includes('phone')) return PhoneIcon;
    if (name.includes('id') || name.includes('code')) return HashIcon;
    if (name.includes('name') ||
        name.includes('first') ||
        name.includes('last') ||
        name.includes('country') ||
        name.includes('address') ||
        name.includes('user')) return TypeIcon;
    if (name.includes('location') ||
        name.includes('city')) return LocationIcon;

    return DefaultColumnIcon;
};
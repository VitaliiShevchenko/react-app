export const camelCaseToHuman = (text: string): string => {
    // Handle empty or null cases
    if (!text) return '';
    
    // Add space before capital letters and ensure first letter is capital
    const result = text
        // Add space before capital letters
        .replace(/([A-Z])/g, ' $1')
        // Handle consecutive capital letters (like "ID" in "userID")
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
        // Trim any extra spaces and capitalize first letter
        .trim();
    
    return result.charAt(0).toUpperCase() + result.slice(1);
};
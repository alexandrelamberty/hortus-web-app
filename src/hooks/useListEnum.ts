/**
 * Return an Array of key/value object to represent an enum in a list
 * 
 * @param classEnum The enum you want to listify
 * @returns 
 */
export function useListEnum(classEnum: any): any {
    const data = Object.entries(classEnum).map(([key, value]) => ({
        key: value,
        text: key,
        value: value,
    }));
    return data
}

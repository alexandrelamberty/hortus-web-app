/**
 * An object that contains an _id key
 */
interface Identifiable {
  _id: string;
}

/**
 * Take an array of Identifiable and return an array with only
 * the _id propeperty.
 * @param array A collection of Identifiable
 * @returns The ids
 */
export const useSelectedIds = (array: Identifiable[]): string[] => {
  return array.map((o) => {
    return o._id;
  });
};

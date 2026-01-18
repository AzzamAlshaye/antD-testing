/**
 * "If the condition is true, return the item, otherwise return null."
 * @param {boolean} condition - boolean
 * @param {Type} item - The item to be added to the object.
 * @returns A function that takes a
 * condition and an item and returns the item if
 * the condition is true otherwise null.
 */
export function conditionalInObject<Type>(
  condition: boolean,
  item: Type,
): Type | null {
  return condition ? item : null;
}

/**
 * If the item is not undefined, return the item.
 * @param {Type | undefined} item - Type | undefined
 * @returns A function that takes a generic type and returns a boolean.
 */
export const isNotUndefined = <Type>(item: Type | undefined): item is Type => {
  return !!item;
};

export const deepCopy = <T = any>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};
export const isAllTrue: (booleans: boolean[]) => boolean = (booleans) => {
  return booleans.every((b) => b);
};
export const isOneTrue: (booleans: boolean[]) => boolean = (booleans) => {
  return booleans.some((b) => b);
};

export const translate = (
  ar: string | undefined,
  en: string | undefined,
  lang: string,
) => {
  if (lang == 'ar') {
    return ar;
  }
  return en;
};

export const isEmpty = (obj: any | any[]) => {
  if (Array.isArray(obj)) {
    return obj.length == 0;
  }
  return !obj;
};

/**
 * Filters an array of items (tabs, columns, etc.) based on key-to-condition mapping.
 * If the condition is true, the item will be hidden.
 */

export interface ItemWithKey {
  key: string;
  [key: string]: any;
}

export function filterByKeyConditions<T extends ItemWithKey>(
  items: T[],
  hiddenConditions: Record<string, boolean>,
): T[] {
  return items.filter((item) => !hiddenConditions[item.key]);
}

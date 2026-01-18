export const conditionalBasedData = (
  condition: boolean | undefined,
  firstParam: any,
  secondParam: any,
) => {
  return condition ? firstParam : secondParam;
};

export const percentage = (v?: number): string | undefined => {
  if (v) {
    return Intl.NumberFormat('en', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
      .format(v / 100)
      .replace('%', '');
  }
};

export const parseNumber = (v?: string | number): number => {
  if (!isNaN(Number(v))) {
    return Number(v);
  }
  return 0;
};

export const formattedNumber = (value: number) => {
  const decimalPlaces = value?.toString()?.split('.')[1]?.length || 0;
  return Intl.NumberFormat('en', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(value);
};

export const numberOnly = (value: string): string => {
  const numberOnly = value.replace(/[^0-9,]/g, ''); // Keep digits only and commas
  return numberOnly;
};

export const shortNumber = (value: number): string => {
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  return formattedNumber(value);
};

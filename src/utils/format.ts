export const formatCurrencyNGN = (amount: number) => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount);
};

export const formatDateLong = (isoDate: string | Date) => {
  const d = typeof isoDate === 'string' ? new Date(isoDate) : isoDate;
  return d.toLocaleDateString('en-NG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
};

export const formatShortDate = (isoDate: string | Date) => {
  const d = typeof isoDate === 'string' ? new Date(isoDate) : isoDate;
  return d.toLocaleDateString('en-NG', { year: 'numeric', month: 'short', day: 'numeric' });
};

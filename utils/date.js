const MON = ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug","Sep","Oct","Nov","Dec"];
/**
 * @param {string} dateStr A date to be formatted. If not provided; work with current date
 * @returns {string|null} Returns formatted date as string, or a null of `dateStr` cannot be pasred by `Date` class
 */
export function formatDate(dateStr) {
  const date = dateStr ? new Date(dateStr) : new Date();
  if (!date) return null;

  const day   = date.getDate();
  const month = MON[date.getMonth()];
  const year  = date.getFullYear();
  
  return `${month} ${day}, ${year}`;
}
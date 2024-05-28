export function dateFormat(date: Date) {
  const day = ("0" + date.getDay()).slice(-2);
  const month = ("0" + date.getMonth()).slice(-2);
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

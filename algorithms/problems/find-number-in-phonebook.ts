export const findNumberByName = (phoneBook: any, name: string) => {
  if (phoneBook.length === 0) return null;
  let start = 0,
    end = phoneBook.length - 1;
  while (start <= end) {
    const mid = Math.trunc((end + start) / 2);
    if (name === phoneBook[mid]?.name) {
      return phoneBook[mid]?.number;
    } else if (name < phoneBook[mid]?.name) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return null;
};
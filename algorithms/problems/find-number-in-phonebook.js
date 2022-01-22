const phoneBook = [
  { name: "Alex Bowman", number: "48-2002" },
  { name: "Aric Almirola", number: "10-1001" },
  { name: "Bubba Wallace", number: "23-1111" },
];

const findNumberByName = (phoneBook, name) => {
  if (phoneBook.length === 0) return null;
  let start = 0,
    end = phoneBook.length - 1;
  while (start <= end) {
    const mid = Math.trunc((end + start) / 2);
    if (name === phoneBook[mid]?.name) {
      console.log(phoneBook[mid]?.number);
      return phoneBook[mid]?.number;
    } else if (name < phoneBook[mid]?.name) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return null;
};

export default findNumberByName;

findNumberByName(phoneBook, "Alex Bowman"); // '48-2002'

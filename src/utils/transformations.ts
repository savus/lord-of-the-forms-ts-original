export const capitalize = (word: string) =>
  `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`;

export const formatPhoneNumber = (phoneNumber: string, format: number[]) => {
  // todo: build this function
  // `formatPhoneNumber("1234567")` should be `"12-34-56-7"`
  let strCopy = phoneNumber;
  let result = "";

  for (let i = 0; i < format.length; i++) {
    const isLast = i === format.length - 1;
    result += `${strCopy.slice(0, format[i])}`;
    if (!isLast) result += "-";
    strCopy = strCopy.slice(format[i]);
  }

  return result;
};

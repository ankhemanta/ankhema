import {
  arrayToOneString
} from '../array/array.merge.js'

export function emailHideWithSymbol(
  email = '',
  hideNum = 2,
) {
  let symbol = "*";

  if (email && hideNum) {

    let splitEmail = email.split('@');
    const firstSplit = splitEmail[0] || "";
    const seccendSplit = splitEmail[1] || "";
    const textLength = !splitEmail ? 0 : splitEmail[0]?.length;

    const starCount = (textLength - hideNum) || 0;
    const charArray = Array.from(firstSplit);

    let arraySlice = charArray.slice(0, hideNum);
    let replaceStar = charArray.slice(hideNum, textLength).map((_, index) => symbol)

    let marge = [
      ...arraySlice,
      ...replaceStar
    ];

    var result = arrayToOneString(marge);
    return `${result}@${seccendSplit}`;
  } else {
    return email;
  };
};

export function emailHide(
  email = '',
  hideNum = 2,
  symbol = "*",
  end = false
) {

  if (email && hideNum) {

    let splitEmail = email.split('@');
    const firstSplit = splitEmail[0] || "";
    const seccendSplit = splitEmail[1] || "";
    const textLength = !splitEmail ? 0 : splitEmail[0]?.length;

    const starCount = (textLength - hideNum) || 0;
    const charArray = Array.from(firstSplit);

    let arraySlice = charArray.slice(0, hideNum);
    let replaceStar = charArray.slice(hideNum, textLength).map((_, index) => symbol)

    let marge = [
      ...arraySlice,
      ...replaceStar
    ];

    var result = arrayToOneString(marge);
    return `${result}@${seccendSplit}`;
  } else {
    return email;
  };
};

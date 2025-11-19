


export const arrayFindBoolean = (arr, arrayKey, value) => {
  if (!arr || !arrayKey || !value) {
    return false
  } else {
    let res = arr.findIndex(item => item[arrayKey] === value) > -1;
    return res
  }
};



export const capatilcapitizeFirstLetter = (str = '') => {
  if (!str) {
    return '';
  } else {
    return str?.charAt(0)?.toUpperCase() + str?.slice(1);
  };
};
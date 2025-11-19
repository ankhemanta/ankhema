import {
  generatRandomUserId,
  generatRandomId,
  randomNumberInRange,
  generatRandomText,
  genRandomKey
} from './generator/number.generator.js';
import {
  emailHideWithSymbol,
  arrayToOneString,
  emailHide
} from './hide/hideemail.js'



export {
  generatRandomUserId,
  generatRandomId,
  randomNumberInRange,
  generatRandomText,
  genRandomKey,

  generatRandomUserId as getRandomUserId,
  generatRandomId as getRandomId,
  randomNumberInRange as getNumInRange,
  generatRandomText as getRandomText,
  genRandomKey as getRamdomKey,

  arrayToOneString,
  emailHideWithSymbol,
  emailHide,
}
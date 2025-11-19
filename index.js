import {
  generatRandomUserId,
  generatRandomId,
  randomNumberInRange,
  generatRandomText,
  genRandomKey
} from './generator/number.generator.js';
import {
  emailHideWithSymbol,
  emailHide
} from './hide/hideemail.js'
import {
  arrayToOneString,

} from './array/array.merge.js'
import {
  arrayFindBoolean
} from './array/array.find.js'

import {
  capatilcapitizeFirstLetter
} from './text/name.js'





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

  arrayFindBoolean
}
## 🔌 🖥️ How To Install 
```brush
   npm install ankhema 
   or
   yarn add ankhema
```
___
### 💾📀 current avilable function 
1.  **generatRandomUserId,**
2.  **generatRandomId,**
3.  **randomNumberInRange,**
4.  **generatRandomText,**
5. **genRandomKey**

6.  **getRandomUserId,**
7.  **getRandomId,**
8.  **getNumInRange,**
9.  **getRandomText,**
10. **getRamdomKey**
11. **emailHideWithSymbol,**
12. **emailHide,**
13. **arrayToString**
-----


## 🖥️ How to use
  ### 🧾 import
```javascript
import {
  generatRandomUserId,
  generatRandomId,
  randomNumberInRange,
  generatRandomText,
  genRandomKey,

  getRandomUserId,
  getRandomId,
  getNumInRange,
  getRandomText,
  getRamdomKey,
  emailHideWithSymbol,
  arrayToString
  emailHide,
} from 'ankhema';
```

### 🔧 Genaret Random User Id With Number 
<details>
<summary><b>Click And  View How To Use Random User Id</b></summary>

  ```javascript 
  generatRandomUserId(20) //20 is length of number 
  //OUTPUT : 12345678901234567890 UNIQUE RANDOM NUMBER 

getRandomUserId(20) //20 is length of number 
//OUTPUT : 12345678901234567890 UNIQUE RANDOM NUMBER 

randomNumberInRange(1000000000, 10000000);
//OUTPUT : 686254156 UNIQUE RANDOM NUMBER 

getNumInRange(1000000000, 10000000);
//OUTPUT : 686254156 UNIQUE RANDOM NUMBER
``` 
</details>  
<br/>
<br/>

### 🔧 Genaret Rendom Text Like Link 
<details>
<summary>
  <b>Click And  View How To Use Random Text</b>
</summary>

```javascript
generatRandomText(20) // text length 
//OUTPUT :  "uBlY2wtCvFRm5ryqnJtJ" GET RANDOM TEXT STRING [A-Z]

getRandomText(20) // text length 
//OUTPUT :  "uBlY2wtCvFRm5ryqnJtJ" GET RANDOM TEXT STRING  [A-Z]


genRandomKey(20) // text length 
//OUTPUT :  "NH9dnXbP0w5A5kRvFsKW" GET RANDOM TEXT STRING [A-Z WITH SYMBOL ]
getRamdomKey(20) // text length 
//OUTPUT :  "gOC1cQbI3vxgqE_PI_A5igOyFNC6Vi" GET RANDOM TEXT STRING [ A-Z WITH SYMBOL]
```
</details>

<br/>
<br/>


### 🔧 E-mail 📩 id hide
 <b>example lik ✉️ exa***@email.com</b>
  
<details>
<summary><b>Click And  View How To Use Random User Id</b></summary>
  emailHide("example@email.con", 2, *, false);
  //OUTPUT : 
</details>






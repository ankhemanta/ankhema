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
13. **arrayToOneString**
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
  emailHide,
  arrayToOneString
} from 'ankhema';
```



### 🔧 Genaret Random User Id With Number 
<details>
<summary>
<b>
Click And  View How To Use Random User Id
</b>
</summary>

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



___

### 🔧 Genaret Rendom Text Like Link 
<details>
<summary>
<b>
Click And  View How To Use Random Text
</b>
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





___

### 🔧 E-mail 📩 id hide
<details>
<summary>
<b>
Click And  View How To Use
example lik ✉️ exa***@email.com
</b>
</summary>

  ```javascript 
        emailHide(
        "example@email.con", // email id
        2,  // how match remove 
        *,  //replacement symbol [you can use any symbol ex "#" ,"&", "-", ]
      );
      //OUTPUT : ex*****@email.com (* system use then)
      //OUTPUT : ex###@email.com ( # symbol use then);
      
     // seme function You can not change symbol
      emailHideWithSymbol(
        "example@email.con", // email id
        2,  // how match remove 
      );
      //OUTPUT : ex*****@email.com (* system use then)
      //OUTPUT : ex###@email.com ( # symbol use then);
  ``` 
</details>  


___

### 🔧 Array To String 
<details>
<summary>
<b>
Click And  View How To Use
</b>
</summary>

  ```javascript 
        const array =["apple", "orange", "watermelon", ["lemon"]] ✔️ //working 
       
        //but this array not working 
        // const array =[{ "key":apple"}, "orange", "watermelon", ["lemon"]] ✖️ not working 
      
      
      arrayToOneString(array)
      //OUTPUT : appleorangewatermelonlemon
      //onw string 
      // note : array object not supported 
  ``` 
</details>  

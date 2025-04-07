 // Primitive

 // 7 types : String ,NUmber,Boolean,Null ,undefined,symbol,BigInt

 // it is dynamic 

 const id  = Symbol('123')
  const anotherId = Symbol('123')

  console.log(id===anotherId);

  const bigInt = 15416463163113n
  
 // Non-primitive or reference types 

 //Arrays,objects ,functions 

 const hero = ["shaktiman","naagraj"];
 let myobj = {
    name : "yashpal",
    age:89
 }
  
 const myFun = function () {
      console.log("hello world ");
      
 }

 console.log(typeof hero);
 

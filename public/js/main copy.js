Dictionary (Key-Value) Data Structure:
let person:{firstName:string , lastName: string , age:number , email:string ,deleted:boolean, scores :number[] } ={
    firstName : "mahoor",
    lastName : "shams",
    age: 24,
    email:"mahurshams94@gmail.com",
    deleted : false,
    scores :[10,20,16,12.75 , 19]
}
console.log("test")
console.log(`Hello I Am ${person.firstName} ${person.lastName} . I'm ${person.age} Years Old. My Email Is ${person.email} And My Scores Are ${person.scores.sort()}`)
----------------------------------------------------------------------------

List (Aray) Data Structure:
let numberAray: number[] = [4, 8, 2, 3, 10, 9, 7, 5, 6, 1];
console.log(numberAray);
let sortArray: number[] = numberAray.sort(); //this func only compares first digite from left...
console.log(sortArray);
let assendingSort: number[] = numberAray.sort((a, b) => a - b); //this way we can compare whole number(Assending)
console.log(assendingSort);
let desendingSort: number[] = numberAray.sort((a, b) => b - a); //Desending
console.log(desendingSort);
let deepCopy = numberAray.map((item) => item); //for Deep Copy (Copy By Value) . it is like a for loop that unpacks every element in array and put it to new one
console.log("map func :",deepCopy);
let fromFunc = Array.from(numberAray);
console.log("form func:", fromFunc);

----------------------------------------------------------------------------

let x:number = Number(prompt("enter x:"))
let y:number = Number(prompt("enter y:"))
for(let i=1 ; i <= x ; i++){
for(let j=1 ; j<=x ;j++){
   if(i===j){
document.write(`<span class ='inline-block p-[15px] font-bold bg-[deeppink]'>${i}</span>`)
   }else if(i + j - 1 === x){
    document.write(`<span class ='inline-block p-[15px] font-bold bg-[lime]'>${i}</span>`)
   }else{
    document.write(`<span class ='inline-block p-[15px] font-bold bg-[grey]'>${i}</span>`)
   }
}
}
------------------------------------------------------------------------------
let x:number = Number(prompt("enter x:"))
for(let i=1 ; i <= x ; i++){
    for(let j=1 ; j<=x ;j++){
        document.write(`<span class ='inline-block p-[15px] font-bold bg-[deeppink]'>${j}</span>`)
    }
    document.write(`<span class ='inline-block p-[15px] font-bold bg-[deeppink]'>${i}</span>`)
}
------------------------------------------------------------------------------------------
js function
function matrix(): void {
  console.log("test matris");
}
matrix();
---------------------------------------------------------------------------------------
call back function :
let adder = (x: number): number => {
  if (x === 1) {
    return 1;
  } else {
    return x + adder(x - 1);
  }
};
console.log(adder(100));
---------------------------------------------------------------------------------------
alias fo types :
type Mahoor = string | null;
let data = (x: Mahoor): string | null => x;
console.log(data("testString"));
---------------------------------------------------------------------------------------
Named function in js:
function add(x, y) {
   return x + y;
  }
---------------------------------------------------------------------------------------
Anonymous function in js:
let myAdd = function (x, y) {
    return x + y;
  };
--------------------------------------------------------------------------------
let person: any[] = [
  {
    name: "mahoor",
  },
  {
    name: "siavash",
  },
];
  let result:any = person.filter((item: { name: string }) => item.name == "mahoor");
  console.log(result);
--------------------------------------------------------------------------------
let school: {
  student: object;
  grades: number[];
  year: number;
  calc: Function;
} = {
  student: {
    firstName: "mahoor",
    lastName: "shams",
    age: 24,
  },
  grades: [1, 2, 3, 4, 5],
  year: 1395,
  calc() {
    console.log("it calculates somthing!");
  },
};
console.log(school.calc());
---------------------------------------------------------------------------------
OOP in EcmaScript:
class Person{
    fullName;
    age;
    email;
    constructor(fullName,age,email){
    this.fullName = fullName;
    this.age = age;
    this.email = email
    }

    fullData(){
        return `${this.fullName}--${this.age}--${this.email}`
    }
}

let testInstance = new Person("mahoor-shams" , 24 , "m@s.com");
console.log(testInstance.fullData());

---------------------------------------------------------------------------------

class Calculator {
  x;
  y;
  operand;
  constructor(x, y, operand) {
    this.x = x;
    this.y = y;
    this.operand = operand;
  }

  calc(x, y, operand) {

    switch (operand) {
      case "+": {
        return x + y;
        break;
      }
      case "-": {
        return x - y;
        break;
      }
      case "*": {
        return x * y;
        break;
      }
      case "/": {
        return x / y;
        break;
      }
      default: {
        return "Not Valid Prompt !!!";
      }
    }
  }
}

let test = new Calculator(1, 3, "+");
console.log(test);

console.log(test.calc(1, 3 , "+"));

---------------------------------------------------
DOM ( Document Object odel ):
All elements or tag are "object" (HTML Collection) .
---------------------------------------------------

SELECTORS
By Tag Name:

let div = document.getElementsByTagName("div");
console.log(div, div.length, typeof div);
div[0].style.width = "30%";
div[0].style.backgroundColor = "#2b2b2b";
div[0].style.margin = "50px auto";
div[0].style.boxSizing = "5px 5px 25px #2b2b2b";

---------------------------------------------------

SELECTORS
By class Name :
we cast it to Aray so we can use the forEach method .

let div = [...document.getElementsByTagName("div")];
console.log(div, div.length, typeof div);

div.forEach((elem) => {
  elem.style.width = "30%";
  elem.style.margin = "50px auto";
  elem.style.padding = "30px";
  elem.style.boxShadow = "5px 5px 25px #2b2b2b";
  elem.style.backgroundColor = `rgb(${Math.round(
    Math.random() * 255
  )}, ${Math.round(Math.random() * 255)} , ${Math.round(
    Math.random() * 255
  )})  `;
  elem.style.color = "whitesmoke";
});

---------------------------------------------------

SELECTORS
By Identifier :
It only returns first and only one result so there is no need to cast it (deep copy) to Array .

let parentDiv = document.getElementById("parent");
console.log(parentDiv , typeof parentDiv);
parentDiv.style.width = "30%";
parentDiv.style.margin = "50px auto";
parentDiv.style.padding = "30px";
parentDiv.style.boxShadow = "5px 5px 25px #2b2b2b";
parentDiv.backgroundColor = `rgb(${Math.round(
    Math.random() * 255
  )}, ${Math.round(Math.random() * 255)} , ${Math.round(
    Math.random() * 255
  )})  `
parentDiv.style.color = "whitesmoke"

---------------------------------------------------

SELECTORS
By Query :
it returns a NodeList and it has forEach method so there is no need to cast it to array .

let root = document.querySelectorAll("div.parent");
root.forEach((elem) => {
  elem.style.width = "30%";
  elem.style.margin = "50px auto";
  elem.style.padding = "30px";
  elem.style.boxShadow = "5px 5px 25px #2b2b2b";
  elem.style.backgroundColor = `rgb(${Math.round(
    Math.random() * 255
  )}, ${Math.round(Math.random() * 255)} , ${Math.round(
    Math.random() * 255
  )})  `;
  elem.style.color = "whitesmoke";
});

---------------------------------------------------

let parentDiv = document.querySelector(".parent");
parentDiv.style.width = "30%";
parentDiv.style.margin = "50px auto";
parentDiv.style.padding = "40px";
parentDiv.boxSizing = "border-box";
parentDiv.style.boxShadow = "5px 5px 25px #2b2b2b";
parentDiv.style.backgroundColor = "#2b2b2b";
parentDiv.style.color = "whitesmoke";

###


let linkParentDiv = document.querySelector(".parent a");
console.dir(linkParentDiv);

linkParentDiv.style.display = "block";
linkParentDiv.style.width = "100px";
linkParentDiv.style.height = "30px";
linkParentDiv.style.backgroundColor = "green";
linkParentDiv.style.color = "whitesmoke";
linkParentDiv.style.fontWeight = "bold";
linkParentDiv.style.textAlign = "center";
linkParentDiv.style.lineHeight = "30px";
linkParentDiv.style.textTransform = "capitalize";

###



let paraParentDiv = document.querySelector(".parent p");
console.dir(paraParentDiv);  // for seeing attributes

paraParentDiv.style.margin = "30px";
paraParentDiv.style.color = "whitesmoke";

---------------------------------------------------
let product = document.querySelector(".product");
console.log(product.dataset.discount);

[...product.children].forEach((elem) => {
  if (elem.nodeName.toLowerCase() === "h1") {
    price = parseInt(elem.textContent);
  }
  if (elem.classList.contains("discount")) {
    discount = parseInt(product.dataset.discount);
    calc = price - (price * discount) / 100;
    elem.textContent = calc;
  }
});
------------------------------------------------------




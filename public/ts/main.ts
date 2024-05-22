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



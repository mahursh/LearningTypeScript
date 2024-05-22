// let clickMe = document.querySelector("#clickMe");
// let modal = document.querySelector(".modal");
// let flag = true;
// clickMe.addEventListener("click", function () {
//   if (flag) {
//     modal.classList.remove("scale-x-0", "scale-y-0");
//     modal.classList.add("scale-x-[1]", "scale-y-[1]");
//     flag = false;
//   } else {
//     modal.classList.add("scale-x-0", "scale-y-0");
//     modal.classList.remove("scale-x-[1]", "scale-y-[1]");
//     flag = true;
//   }
// });
//--------------------------------------------------------------------

// function data(firstName, lastName, fatherName, ...karim) {
//   return firstName + lastName + fatherName + karim;
// }

// console.log(data("m", "sh", "a", "36", 23, 43, true));
//--------------------------------------------------------------------
// let laptop = [
//   { brand: "asus", price: 1000 },
//   { brand: "dell", price: 1000 },
//   { brand: "macbook", price: 1000 },
// ];

// function create() {
//   setTimeout(function () {
//     laptop.push({ brand: "hp", price });
//   } , 1000;);
//
// }

// function get() {
//   console.log(laptop);
// }

// create();
// get();

//------------------------------------------------------------

//callBack

// let laptop = [
//     { brand: "asus", price: 1000 },
//     { brand: "dell", price: 1000 },
//     { brand: "macbook", price: 1000 },
//   ];

//   function create(callback) {
//     setTimeout(function () {
//       laptop.push({ brand: "hp", price });
//     }, callback()
//     1000;);
//
//   }

//   function get() {
//     console.log(laptop);
//   }

//   create(get);

//------------------------------------------------------------

//promise(2015 ecmaScript)
//fuctions are in heap but when they get callback(recursive) they go into the stack.

// let laptop = [
//   { brand: "asus", price: 1000 },
//   { brand: "dell", price: 1000 },
//   { brand: "macbook", price: 1000 },
// ];

// function create(callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       laptop.push({ brand: "hp", price: 2999 });

//       let flag = true;
//       if (flag) {
//         resolve(callback());
//       } else {
//         reject("not-ok");
//       }
//     }, 1000);
//   });
// }

// function get() {
//   return laptop;
// }

// create(get)
//   .then((res) => {
//     console.log(res);
//   })

//   .catch((error) => {
//     console.log(error);
//   });

//------------------------------------------------------------

//async and await in api
//we can use await only and only in a async method
//when we use a aynct and await , the delay time in the setTimeout has no meaning.

// let laptop = [
//   { brand: "asus", price: 1000 },
//   { brand: "dell", price: 1000 },
//   { brand: "macbook", price: 1000 },
// ];

// function create(callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       laptop.push({ brand: "hp", price: 2999 });

//       let flag = true;
//       if (flag) {
//         resolve(callback());
//       } else {
//         reject("not-ok");
//       }
//     }, 1000);
//   });
// }

// function deleteElem(callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       laptop.pop();

//       let flag = true;
//       if (flag) {
//         resolve(callback());
//       } else {
//         reject("not-ok");
//       }
//     }, 2000);
//   });
// }

// function get() {
//   console.log(laptop);
// }

// async function result() {
//   await deleteElem(get);
//   await create(get);
// }
// result();

//------------------------------------------------------------

let fetchPOsts = ()=>{
    fetch().then(data => data.json()).then(res=>
        (product = res.map(elem))=>{
            return
        })
}
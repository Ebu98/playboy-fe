// import React from 'react'

// function Test() {
//     const result = "mxzxhcvbn"

//     if (result && "Helper") {
//         console.log("I will help you!")
//     }else{
//         console.log("You are wrong!")
//     }
//   return (
//     <div>

//     </div>
//   )
// }

// export default Test
// import React, { useState, useEffect } from "react";
// function Counter() {
//     const [counter, setCounter] = useState(0)

//     const increment=()=>{
//         setCounter(count => count + 1);
//     }

//     const decrement=()=>{
//         setCounter(count => count - 1);
//     }
//     const Reset=()=>{
//         setCounter(0);
//     }

//     return (
//         <div>
//             <button onClick={increment}>increment</button>
//             <h3>{counter}</h3>
//             <button onClick={decrement}>decrement</button>
//             <button onClick={Reset}>reset</button>
//         </div>
//     )
// }

// export default Counter;
// const nums = [1,2,3,5]
// const result =nums.reduce((a, b) => a+b)

// console.log(result)


// function person(name,bod,) {
//     this.name=name;
//     this.birthday= new Date(bod);
//     this.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1980);
// }
// }
// const brand = new person('brand','1-12-1999')
// // const john = new person('john', '6-08-2016')
// console.log(brand.calculateAge())
// // console.log(john)
// const name1 = 'chuks';
// const name2 = new String('chuks');
// console.log(name2)

// function fetchData() {
//     const [data, setData] = useState([]);
//     const url = "http://"

//     useEffect(() =>{
//         fetch(url)
//         .then(response => response.json())
//         .then((data )=> {
//             setData(data);
//             console.log(data)
//         });
//     }, [])

// export default fetchData;

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const increment = () => {
//       setCount((count) => count + 1);
//     };
//     setInterval(increment, 1000);
//   }, []);
//   return (
//     <div
//       style={{
//         backgroundColor: count === 8 ? "red" : "blue",
//         margin: "10px",
//         width: "400px",
//         padding: "20px",
//       }}
//     >
//       <p>I have render {count} times </p>
//     </div>
//   );
// }
// export default Timer;


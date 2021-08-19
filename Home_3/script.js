// let arr = [1,2,3,4,5];

// arr[1] = 12;
// console.log(arr);

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let weekDay = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let seconds = date.getSeconds();

let months = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentabr",
  "Oktabr",
  "Noyabr",
  "Dekabr",
];

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// 2021 yil Avgust Oyi Haftaning Juma Kuni 6 avgust soat 21:30:00

alert(
  ` Today is ${days[weekDay]} \n Current time is: ${hour} : ${minute} : ${seconds}`
);

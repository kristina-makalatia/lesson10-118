// შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

function sum(...numbers) {
  let newSum = 0;
  for (let item of numbers ){
      if (item > 0) {
          newSum += item;
          // newSum = newSum + item;
      }      
  }
  console.log(newSum);
}

sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);


// 2.ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9

function sum(...args) {
  let numbersSum = 0; //თავიდან იქნება 0
  for (let item of args) {
      numbersSum = numbersSum + item;
  }
  console.log(numbersSum);
}

sum(10, 50, 6, 7, 8, 11, 6, 3, 9);


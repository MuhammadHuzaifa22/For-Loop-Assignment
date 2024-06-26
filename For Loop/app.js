//           For Loops
//            Question 1
// 1.  Write a program to display the message “Hello World” 5 times 
// in your browser using for loop. 




// Solution :
// let space = ' '
// for(let i = 1; i < 5;i++){
//     document.write(`Hello World.  ${space} `);
// }
// let string = 'Hello World';
// const div = document.querySelector('div');
// for(i = 0; i < 5 ;i++){
//     div.innerHTML += `<li style="list-style:none">
//     ${string}</li>`
// }




//               Question 2
// 2.  Write a program to print numeric counting from 1 to 10.


// Solution :
// for(let i = 1;i <= 10;i++){
//     document.write(`<div><li style="list-style:none">${i}</li></div>`)
// }


//               Question 3
// 3. Write a program to print multiplication table of any number 
// using for loop. Table number & length should be taken as an 
// input from user. 


// Solution :
// const h2 = document.querySelector('h2');
// const newH2 = document.getElementById('h2');
// const num = +prompt('Enter Number');
// const length = +prompt('Enter length');
// const div = document.querySelector('.question3');
// const mulltiplySign = 'x'
// h2.innerHTML += `Multiplication table of `+ num
// newH2.innerHTML +=`Length ${length}`
// for(i = 1;i <= length;i++){
//     div.innerHTML += `<li style="list-style:none">${num} ${mulltiplySign} ${i} = ${num * i}</li>`
// }








//               Question 4
// 4. You have an array 
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”] 
// Write each element on new line with the help of for loop.



// Solution :
//  let A = ['Nokia','Samsung','Apple','Sony','Huawei'];
//  const div =document.querySelector('.divforQuestion4');
// for(let i = 0;i < A.length;i++){
//     div.innerHTML += `<li style="list-style:none">${A[i]}</li>`
// }





//                Question 5
// 5. Write a program to print items of the following array using for 
// loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]


// Solution :
// let fruits = ['apple','banana','mango','orange','straberry'];
// const newDiv = document.querySelector('.newDiv');
// const div = document.querySelector('.question5');
// for(let i = 0;i < fruits.length;i++){
//     div.innerHTML += `<li style="list-style:none">${fruits[i]}</li>`
//     newDiv.innerHTML+=`<li style="list-style:none">Element at index ${i} is ${fruits[i]}</li>`
    
// }


//              Question 6
// 6. Write a program to initialize an array of N items by using 
// prompt. Where N is number of items as entered by the user.


// Solution :
// const h2 = document.querySelector('h2');
// const newH2 = document.getElementById('newH2');
// const div = document.querySelector('.question6')
// let array = [];
// let N = +prompt('Enter number of Items');
// const newarray = [];
// h2.innerHTML = `Number of items: ${N}`;
// newH2.innerHTML = 'Items:'
// for(let i = 0;i < N;i++){
//     const newPrompt = prompt(`Enter value of index ${i}`);
//      array.push(newPrompt)
//     div.innerHTML += `<li style="list-style:none">${array[i]}</li>`;
// }






//                    Question 7
// 7. Generate the following series in your browser. See example 
// output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k






// Solution :
// const count = document.querySelector('.count');
// const h2 = document.querySelector('h2');
// h2.innerHTML += 'Counting:'
// for(let i = 1; i <= 15;i++){
//     count.innerHTML += `<div class="ul">${i},</div>`
// }
// const secondh2 = document.querySelector('#secondh2');
// secondh2.innerHTML += `Reverse Counting:`
// const reverse = document.querySelector('.reverse')
// for(let i = 10; i >= 1;i--){
// reverse.innerHTML += `<div>${i},</div>`
// }
// const  thirdh2 = document.querySelector('#thirdh2');
// const even = document.querySelector('.even');
// thirdh2.innerHTML += `Even:`
// for(let i = 0; i <= 20; i++){
//     even.innerHTML += `<div>${i++},</div>`
// }
// const fourthh2 = document.querySelector('#fourthH2');
// const odd = document.querySelector('.odd');
// fourthh2.innerHTML += `Odd:`
// for(let i = 1; i < 20;i++){
//     odd.innerHTML += `<div>${i++},</div>`
// }
// const fifthh2 = document.querySelector('#fifthH2');
// const series = document.querySelector('.series');
// fifthh2 .innerHTML += `Series:`
// for(let i = 2;i <= 20 ;i++){
//     series.innerHTML+= `
//     <div>${i++}K,</div>`
// }




//                 Question 8
// 8. You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is 
// found in the list or not. Example:





// Solution :
// const A = ['cake','apple pie','cookie','chips','patties'];
// const h1 = document.querySelector('h1');
// const userInput = prompt('Enter item name');
// if(A.includes(userInput.toLowerCase())){
//     for(let i = 0; i < 1; i++){
//         const findIndex = A.indexOf(userInput);
//     h1.innerHTML += `${userInput} is <b>available</b> in our shop at index ${findIndex}`
//     }
// }else{
//     h1.innerHTML += `We are sorry ${userInput} is <b>not available</b> in our shop`
// }




//                Question 9
// 9. Write a program to identify the largest number in the given 
// array. 
// A = [24, 53, 78, 91, 12]

// Solution :
// const A = [ 24,53,78,91,12];
// for(let i = 0; i < Array.length;i++){
//     if(A[i] > )
// }
// /?????????????????????????????????????           Solution did not complete





//               Question 10
// 10. Write a program to identify the smallest number in the given 
// array.  
// A = [24, 53, 78, 91, 12] 



// Solution :
// ????????????????????????????????????????          Solution did not complete





//                    Question 11
// 11. Write a program to identify the largest & the smallest 
// number in the given array.  
// A = [24, 53, 78, 91, 12]


// Solution :
// /?///////////////////////////////////        Solution did not complete




//             Question 12
// 12. Write a program to print multiples of 5 ranging 1 to 100 
// Solution :
// const div = document.querySelector('.div_Q12');
// for(let i = 1; i <= 20; i++){
//     div.innerHTML += `<div>${5* i},</div>`
// }





//                 Question 13
// 13. You have given the following arrays: 
// var students = ["Ali", "Sami", "Taha", "Inam"]; 
// var scores  = [58, 73, 89, 90];
// Write a program to generate the following HTML table in your 
// browser using JS.


// Solution :
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores  = [58, 73, 89, 90];
// const div = document.querySelector('.tableDiv');
// const td = document.querySelectorAll('td');
// const th = document.querySelectorAll('th');
// const nkaa = document.querySelectorAll('tr');
// const new1 = document.querySelector('.new');
// for(let i = 0; i < students.length;i++){
// new1.innerHTML += `<table class="styl">
// <tr class="styl">
// <th class="styl">Students</th>
// <th class="styl">Scores</th>
// </tr>
// <tr>
//     <td class="styl">${students[i]}</td>
//     <td class="styl">${scores[i]}</td>
//     </tr>
// </table>`
// }


//                            Question 14
// 14. Write a program that prints number from start of the array 
// to desired stop value. Given array: 
// var scores  = [12, 45, 3, 22, 34, 50]; 
// (Hint: take stop value from user) 
// E.g. if user gives 3 as input value print 12, 45, 3 
// if user gives 34 as input value print 12, 45, 3, 22, 34




//    Solution :
// const scores = [12,45,3,22,34,50];
// stopValue = +prompt('Enter stop value from the array');
// const div = document.querySelector('.div')
// for(let i =0;i <= scores.length;i++){
// div.innerHTML += `<div>${scores[i]}</div>`
//     if(scores[i] === stopValue){
//         break;
//     }
// }
// if(scores[i] !== stopValue){
//     div.innerHTML += `<div>Your value is not available in the array</div>`
// }




//                          Question 15
// 15. You have an array 
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ] 
// Write each element on new line with the help of nested for 
// loops.



//Solution :
// const div = document.querySelector('.div')
// const A = [[1,2,3],[4,5,6],[7,8,9]]
// for(let i = 0;i < A.length;i++){
//  for(let j = 0;j < A[i].length;j++ ){
//     div.innerHTML += `<div>${A[i][j]}</div>`
//  }
// }






//                  Question 16
// 16. Write a program to repeatedly print the value of the variable 
// num which is input by user. Value should be decreasing by 0.5 
// each time, as long as x Value remains positive.



// Solution :
// const div = document.querySelector('.div');
// const value = +prompt("Enter value");
// for(let i =value;i >= 0;i-= 0.5){
// div.innerHTML += `<div>${i},</div>`
// }




//               Question 17
// 17. The even/odd reporter 
// Write a for loop that will iterate from 0 to 20. For each 
// iteration, it will check if the current number is even or odd, and 
// report that to the screen (e.g. "2 is even").



// Solution :
// const div = document.querySelector('.div');
// for(let i = 0;i <= 20;i++){
//     if(i % 2 === 0){
//         div.innerHTML +=`<div>${i} is even</div>`
//     }else{
//         div.innerHTML +=`<div>${i} is odd</div>`
//     }
// }




//            Question 18 
// 18. Write a program to calculate the product of the odd integers 
// from 1 to 7. 



//   Solution :
// var product = 1;
// for(let i = 1;i <= 7;i++){
//     if(i % 2 !== 0){
//         product *= i;
//     }
// }
// document.write(`The product of odd integer from 1 to 7 is ${product}`)




//          Question 19
// 19. Write a program that will write out a wedge of stars. The user 
// will enter the initial number of stars, and the program will write 
// out lines of stars where each line has one few star than the 
// previous line. Initial number of stars: 7 
// ******* 
// ****** 
// ***** 
// **** 
// *** 
// ** 
// *   


//    Solution :
// var initialNumber = 7;
// const div = document.querySelector('.div');
// for(let i = initialNumber;i > 0; i--){
//     var stars = '';
//     for(let j = 0;j < i;j++){
//         stars += '*';
//     }
//     div.innerHTML += `<div>${stars}</div>`
// }



//             Question 20
// 20. Write a program to create the following patterns in your 
// browser. Take number of lines as an input. 
// a. ***** 
// ***** 
// ***** 
// ***** 
// b. * 
// ** 
// *** 
// **** 
// ***** 
// c. ***** 
// **** 
// *** 
// ** 
// *




// Solution:
//                         Did not complete
/// Kata Multiples of 3 or 5

function solution(number){
  let arr = [];
  for (let i = 1; i<number;i++) {
    arr.push(i)
  }
  let arr2 = [];
  for (let j = 0;j<arr.length;j++) {
    if (arr[j]%3 === 0 || arr[j]%5 === 0) {
      arr2.push(arr[j])
    }
  }
  return arr2.reduce((a, b)=> a + b, 0)
}
/// Kata Count Odd Numbers below n

function oddCount(n) {
	return Math.trunc(n / 2);
}
/// Kata Count the divisors of a number

function getDivisorsCnt(n){
  let count = 0;
  for(let i = 1; i <= n; i++){
    if(n % i === 0){
      count++
    }
  }
  return count;
}
/// Kata Especially Joyful Numbers
function numberJoy(n) {
  let str = String(n)
  let sum = 0;
  for (let i = 0; i < str.length;i++) {
     sum += Number(str[i])
  }
  let num = String(sum).split('').reverse().join('')
  if (sum * Number(num) === n) {
    return true;
  } else {
    return false
  }
  
    // your code
}
//// Kata Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  if (bool) {
    return 'Yes'
  } else { 
  return 'No'}
  //...
}
//// Kata  Sum two arrays
function addArrays(array1, array2) {
  if (array1.length === 0) {
    return array2
  } else if (array2.length === 0) {
    return array1
  }
  let arrayToNumber1 = parseInt(array1.join(''));
  let arrayToNumber2 = parseInt(array2.join(''));
  let arr = arrayToNumber1 + arrayToNumber2;
 
  let str = String(arr);
  let arr2 =[];
  for (let i =0;i<str.length;i++) {
    arr2.push(Number(str[i]))
  }
  if (isNaN(arr2[0])) {
    arr2.shift()
    arr2[0] = arr2[0] * (-1)
  }
  return arr2
  
}
///Geometric Progression Sequence

function geometricSequenceElements(a, r, n){
  let arr = [a];
  for(let i=0;i<n - 1;i++) {
    arr[i] *= r
    arr.push(arr[i])
  }
  let str = a.toString()
  arr.pop();
  return str + ', ' + arr.join(', ')
  
}
////Fix string case
function solve(s){
  let arr = s.split('');
  let arr2 = []
  for (let i =0;i<arr.length;i++) {
    if(arr[i].toUpperCase() === arr[i]) {
      arr2.push(arr[i])
    }
  }
  if (arr.length / 2 === arr2.length) {
    return arr.join('').toLowerCase()
  } else if (arr.length / 2 > arr2.length) {
    return arr.join('').toLowerCase()
  } else if (arr2.length > arr.length/ 2) {
    return arr.join('').toUpperCase();
  }
}
///8 kyu Power JavaScript:
function numberToPower(number, power){

  if (number===0 && power === 0) {
    return 0
  } else if(number === 0) {
    return number
  } else if (number > 0 ) {
    let arr = Array(power).fill(number)
    let c = 1;
    for (let i = 0;i<arr.length;++i) {
      c *= arr[i]
    }
    return c
  }
      
}///Remove duplicates from list

function distinct(a) {
  if(a.length === 1) {
    return a
  } else {
    return a.filter((el, i) => i === a.indexOf(el))
  }
  
}

/////Sum of Multiples

function sumMul(n,m){
//your idea here
  if(n === m || n > m) {
    return 'INVALID'
  } else {
    let n1 = n
    const arr = [n]
    while((n + n1) < m) {
      n += n1
     arr.push(n)
  }
   return arr.reduce((a, b) => a + b, 0)
  }
  
}
///Get the addresses of all Google Sheets cells in the range
function getCellAddresses(range) {
  // ... //
  
  let r = range.split(':')
  let length = +(r[1].replace(/[^0-9, ]/g,"")) - (+(r[0].replace(/[^0-9, ]/g,""))) + 1
  let num = (+(r[0].replace(/[^0-9, ]/g,"")))
  let al = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let int = Array.from({ length: length }, (_, i) => i + num);
  let str = al.slice(al.indexOf(r[0][0]), al.indexOf(r[1][0]) + 1)
  let arr = []
  for(let i=0; i<int.length; i++) {
    for(let j = 0; j<str.length; j++) {
      let cell = str[j] + int[i]
      arr.push(cell)
    }
    
  }
  return arr.length === 1 ? [] : arr
}
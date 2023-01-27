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
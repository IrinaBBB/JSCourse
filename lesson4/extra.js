function getFriendlyNumbers(start, end) {
  if ((start > end) || isNaN(start) || isNaN(end) || (start <= 0) || (end <= 0) ||
    !Number.isInteger(start) || !Number.isInteger(end)) {
    return false;
  }

  returnFriendlyNumbersPair(start, end);

}

console.log(returnFriendlyNumbersPair(1, 300));

function returnFriendlyNumbersPair(start, end) {
  let friendNumbersPairs = [];
  for (let i = start; i < end; i++) {
    for (let j = start; j < end; j++) {
      if (i != j) {
        if (isFriendly(i, j)) {
          if (i < j) {
          friendNumbersPairs.push([i, j]);
          }
        }
      }
    }
  }

  return friendNumbersPairs;
}



function isFriendly(num1, num2) {
  let sum1 = getDivisorsSum(num1),
    sum2 = getDivisorsSum(num2);

  return (sum1 == num2 && sum2 == num1);
}


function getDivisorsSum(num) {
  return getSum(getDivisors(num));
}

function getDivisors(num) {
  let arr = [];
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      arr.push(i);

    }
  }
  return arr;
}

function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}





//1.ÖDEV
const number = parseInt(prompt("Enter a Number: "));
let isPrime = true;

if (number === 1) {
  console.log("1 is never a prime number :( Please Forget It!!");
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) { 
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is a not prime number`);
  }
} else {
  console.log("Is a not prime number..");
}

//2.Ödev
function isFriendNumbers(x, y) {
  var xTotal = 0;
  var yTotal = 0;
  for (let i = 0; i < x; i++) {
    if (x % i == 0) {
      xTotal = xTotal + i;
    }
  }
  for (let i = 0; i <y; i++) {
    if (y % i == 0) {
      yTotal = yTotal + i;
    }
  }

  if (x== yTotal && y == xTotal) {
    console.log(x + " ve " + y + " these are friend numbers!! ");
  } else {
    console.log(x + " ve " + y + " These are not friend numbers :( ");
  }
}

isFriendNumbers(27, 35);

//3.ÖDEV

function isPerfectNumber() {
  for (let x = 0; x < 1000; x++) {
    let totalDivisor = 0;

    for (let j = 0; j < x; j++) {
      if (x % j == 0) {
        totalDivisor = totalDivisor + j;
      }
    }

    if (totalDivisor == x) {
      console.log(x + " Perfect Number");
    }
  }
}
isPerfectNumber();

//4.ÖDEV

function primeNumbers() {
  for (let p = 1; p < 1000; p++) {
    let primeNumbersCount = 0;

    for (let i = 2; i < p; i++) {
      if (p % i == 0) {
        primeNumbersCount++;
      }
    }

    if (primeNumbersCount == 0) {
      console.log(p + " Prime Number..");
    }
  }
}
primeNumbers();

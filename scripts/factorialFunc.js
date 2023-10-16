function getFactorial(n) {
    if (isNaN(n) || n < 0) {
      return 'not a number';
    }
  
    if (n === 0 || n === 1) {
      return 1;
    }
  
    return n * getFactorial(n - 1);
}

console.log(getFactorial(5));
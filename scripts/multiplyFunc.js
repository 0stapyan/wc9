function multiply(x) {
    let product = x;
  
    function nextMultiplier(y) {
      product *= y;
      return nextMultiplier;
    }
  
    nextMultiplier.toString = function () {
      return product;
    };
  
    return nextMultiplier;
  }

  const result = multiply(2)(3)(10); 
  console.log(result.toString());  
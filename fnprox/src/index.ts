/**
 * Function to approx using Taylor Series expansion
 * @param { number } x - Value at which to approx
 * @param { number } n - Number of terms in series
 * @param { Function } fnc - Function to approx
 * @param { number } a - Point around which to expand series
 * @returns { number }
 */

function taylorApprox(x: number, n: number, fnc: (x: number) => number, a: number) : number {
  var result = 0;

  for (let i = 0; i < n; i++) {
    const coeff = fncDeriv(fnc, a, i) / factorial(i);

    result += coeff * Math.pow(x - a, i);
  }

  return result;
}

/**
 * Function to calculate function derivative using numerical differentiation
 * @param { Function } fnc - Function to differentiate
 * @param { number } x - Point at which to differentiate function
 * @param { number } o - Order of derivative
 * @param { number } h - Step size for num diff
 * @returns { number }
 */

function fncDeriv(fnc: (x: number) => number, x: number, o: number, h = 0.0001) : number {
  if (o === 0) return fnc(x);

  return (fncDeriv(fnc, x + h, o - 1) - fncDeriv(fnc, x - h, o - 1)) / (2 * h);
}

/**
 * Function to calculate factorial
 * @param { number } n - Number to calculate factorial of
 * @returns { number }
 */

function factorial(n: number) : number {
  if (n <= 1) return 1;
  
  return n * factorial(n - 1);
}

export { taylorApprox };
// Write a function called curriedAdd. If you give this function a number, it returns a new function to you. If you give this function no arguments, it returns the total of all the numbers you’ve passed to it so far.

function curriedAdd(total) {
  if (total === undefined) return 0;

  // this function is used to add all the numbers and if no numbers, return the sum
  return function inner(innerTotal) {
    if (innerTotal === undefined) return total;

    total = total + innerTotal;
    return inner;
  };
}

module.exports = { curriedAdd };

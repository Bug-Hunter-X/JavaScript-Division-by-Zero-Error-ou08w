function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //Incorrect handling of zero values
  }
  return a / b; // Potential for division by zero if b is zero
}
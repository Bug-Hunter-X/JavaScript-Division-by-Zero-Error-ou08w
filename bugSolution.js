function foo(a, b) {
  if (b === 0) {
    return Infinity; // or throw new Error('Division by zero'); // Handle division by zero appropriately
  } else if (a === 0 || b === 0) {
    return 0; // Handle case where a or b is zero
  }
  return a / b;
}
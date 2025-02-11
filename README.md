# JavaScript Division by Zero Bug

This repository demonstrates a common error in JavaScript: division by zero.  The `foo` function attempts to divide two numbers, but it doesn't properly handle cases where the divisor is zero. This can result in an error or unexpected behavior.

The `bug.js` file contains the flawed code.  The `bugSolution.js` file provides a corrected version that robustly handles zero values, preventing division by zero errors.

## Bug Description
The original function does not check if the second argument (`b`) is zero before performing the division. If `b` is zero, a division by zero error occurs.

## Solution
The solution involves adding a check to see if the divisor (`b`) is zero before proceeding with the division.  If `b` is zero, the function should handle this case appropriately (e.g., return an error message, return a default value, or throw an exception).